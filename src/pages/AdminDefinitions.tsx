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

  useEffect(() => {
    fetchDefinitions();
  }, []);

  const fetchDefinitions = async () => {
    setLoading(true);
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

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return terms;
    return terms.filter(t =>
      t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [search, terms]);


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
          <button className="bg-primary text-on-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Add New Term
          </button>
        </div>

        {/* Search + Tabs */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-outline-variant pb-6">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              type="text"
              placeholder="Filter terms or definitions…"
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
          <>
            {/* Terms tab */}
            {activeTab === 'terms' && (
              <div className="border border-outline-variant bg-white overflow-hidden">
                <div className="px-8 py-4 bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    {search ? `${filtered.length} of ${terms.length} terms` : `${terms.length} terms`}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Actions</span>
                </div>
                <div className="divide-y divide-outline-variant">
                  {filtered.map((item) => (
                    <div key={item.term} className="flex justify-between items-start gap-8 px-8 py-5 hover:bg-surface-container-low transition-colors group">
                      <div className="min-w-[220px]">
                        <p className="font-bold text-primary text-sm leading-snug">{item.term}</p>
                      </div>
                      <p className="text-on-surface-variant text-sm leading-relaxed flex-1">{item.definition}</p>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors outline-none">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error/5 transition-colors outline-none">
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

            {/* Acronyms tab */}
            {activeTab === 'acronyms' && (
              <div className="border border-outline-variant bg-white overflow-hidden">
                <div className="divide-y divide-outline-variant">
                  {acronyms.map((item) => (
                    <div key={item.term} className="flex justify-between items-center px-8 py-5 hover:bg-surface-container-low transition-colors group">
                      <div className="flex items-center gap-6">
                        <span className="font-bold text-primary text-lg w-24">{item.term}</span>
                        <span className="text-outline">—</span>
                        <span className="text-on-surface-variant text-sm">{item.definition}</span>
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors outline-none">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </AdminLayout>
  );
};

export default AdminDefinitions;
