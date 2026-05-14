import React, { useState, useMemo, useEffect } from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import { supabase } from '../lib/supabase';

// Definition Interface
interface Definition {
  id: string;
  term: string;
  definition: string;
  type: 'term' | 'acronym';
}


const AdminDefinitions: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'terms' | 'acronyms'>('terms');
  const [terms, setTerms] = useState<Definition[]>([]);
  const [acronyms, setAcronyms] = useState<Definition[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<Definition> | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchDefinitions();

    const channel = supabase
      .channel('admin-definitions')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'definitions' },
        () => fetchDefinitions()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchDefinitions = async () => {
    const { data, error } = await supabase
      .from('definitions')
      .select('*')
      .order('term', { ascending: true });

    if (error) {
      console.error('Error fetching definitions:', error);
    } else if (data) {
      setTerms(data.filter(d => d.type === 'term'));
      setAcronyms(data.filter(d => d.type === 'acronym'));
    }
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.term || !editingItem?.definition) return;
    
    setIsSaving(true);
    const payload = {
      term: editingItem.term,
      definition: editingItem.definition,
      type: activeTab === 'terms' ? 'term' : 'acronym'
    };

    let error;
    if (editingItem.id) {
      const { error: err } = await supabase
        .from('definitions')
        .update(payload)
        .eq('id', editingItem.id);
      error = err;
    } else {
      const { error: err } = await supabase
        .from('definitions')
        .insert([payload]);
      error = err;
    }

    if (error) {
      alert('Error saving: ' + error.message);
    } else {
      setIsModalOpen(false);
      setEditingItem(null);
      fetchDefinitions();
    }
    setIsSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this term?')) return;
    
    const { error } = await supabase
      .from('definitions')
      .delete()
      .eq('id', id);

    if (error) {
      alert('Error deleting: ' + error.message);
    } else {
      fetchDefinitions();
    }
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    const list = activeTab === 'terms' ? terms : acronyms;
    if (!q) return list;
    return list.filter(t =>
      t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [search, terms, acronyms, activeTab]);

  return (
    <AdminLayout pageTitle="Policy Definitions">
      <div className="p-10">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">Definition Registry</h2>
            <p className="text-on-surface-variant text-sm">
              {terms.length} official policy terms · {acronyms.length} acronyms — mirrored from the public portal.
            </p>
          </div>
          <button 
            onClick={() => { setEditingItem({}); setIsModalOpen(true); }}
            className="bg-primary text-on-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Add {activeTab === 'terms' ? 'New Term' : 'New Acronym'}
          </button>
        </div>

        {/* Search + Tabs */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-outline-variant pb-6">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              type="text"
              placeholder="Filter list…"
              className="w-full pl-10 pr-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-0 border border-outline-variant">
            {(['terms', 'acronyms'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 font-bold text-[11px] uppercase tracking-widest transition-colors ${activeTab === tab ? 'bg-primary text-on-primary' : 'bg-white text-on-surface-variant hover:bg-surface-container-low'}`}
              >
                {tab === 'terms' ? `Terms (${terms.length})` : `Acronyms (${acronyms.length})`}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="py-24 text-center">
             <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Syncing with secure vault...</p>
          </div>
        ) : (
          <div className="border border-outline-variant bg-white overflow-hidden">
            <div className="px-8 py-4 bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                {search ? `${filtered.length} matching items` : `${activeTab === 'terms' ? terms.length : acronyms.length} total items`}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Actions</span>
            </div>
            <div className="divide-y divide-outline-variant">
              {filtered.map((item) => (
                <div key={item.id} className="flex justify-between items-start gap-8 px-8 py-5 hover:bg-surface-container-low transition-colors group">
                  <div className={activeTab === 'terms' ? "min-w-[220px]" : "min-w-[120px]"}>
                    <p className={`font-bold text-primary leading-snug ${activeTab === 'acronyms' ? 'text-lg' : 'text-sm'}`}>{item.term}</p>
                  </div>
                  <p className={`text-on-surface-variant text-sm leading-relaxed flex-1 ${activeTab === 'acronyms' ? 'italic' : ''}`}>{item.definition}</p>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <button 
                      onClick={() => { setEditingItem(item); setIsModalOpen(true); }}
                      className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors outline-none"
                    >
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-on-surface-variant hover:text-error hover:bg-error/5 transition-colors outline-none"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="py-16 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl block mb-3 opacity-30">search_off</span>
                  <p className="font-bold uppercase tracking-widest text-xs">No results for "{search}"</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/20 backdrop-blur-sm p-6">
            <div className="bg-white w-full max-w-lg border border-outline shadow-2xl animate-in fade-in zoom-in duration-200">
              <form onSubmit={handleSave}>
                <div className="p-8 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                  <h3 className="font-display-lg text-2xl text-primary uppercase tracking-tight">
                    {editingItem?.id ? 'Update' : 'Add'} {activeTab === 'terms' ? 'Term' : 'Acronym'}
                  </h3>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="text-outline hover:text-primary transition-colors outline-none">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                
                <div className="p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{activeTab === 'terms' ? 'Official Term' : 'Abbreviation'}</label>
                    <input 
                      required
                      autoFocus
                      type="text" 
                      className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm transition-all font-medium"
                      value={editingItem?.term || ''}
                      onChange={e => setEditingItem(prev => ({ ...prev, term: e.target.value }))}
                      placeholder={activeTab === 'terms' ? 'e.g. Gender Equity' : 'e.g. EOB'}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Description / Full Name</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm transition-all leading-relaxed"
                      value={editingItem?.definition || ''}
                      onChange={e => setEditingItem(prev => ({ ...prev, definition: e.target.value }))}
                      placeholder="Enter the official definition or full institutional name..."
                    />
                  </div>
                </div>

                <div className="p-8 bg-surface-container-low border-t border-outline-variant flex justify-end gap-4">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-3 font-bold text-xs tracking-widest text-primary hover:bg-primary/5 transition-colors uppercase outline-none"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isSaving}
                    className="bg-primary text-on-primary px-8 py-3 font-bold text-xs tracking-widest hover:brightness-125 transition-all uppercase outline-none border-none flex items-center gap-3 disabled:opacity-50"
                  >
                    {isSaving && <div className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />}
                    {editingItem?.id ? 'Save Changes' : 'Confirm & Add'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default AdminDefinitions;
