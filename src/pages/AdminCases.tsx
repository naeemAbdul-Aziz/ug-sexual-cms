import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import { supabase } from '../lib/supabase';

// Helper to map incident_type to Label
const OFFENCE_LABELS: Record<string, string> = {
  sexist_remarks: 'Sexist Remarks',
  promotion_denial: 'Denial of Promotion / Grade',
  dismissal: 'Dismissal / Sanctions / Threats',
  pregnancy: 'Pregnancy Discrimination',
  care_leave: 'Denial of Care Leave',
  gender_rules: 'Gender-Disadvantaging Rules',
  gbv: 'Gender-Based Violence',
  unfair_treatment: 'Unfair Treatment on Gender Grounds',
  frustrating: 'Frustrating / Refusing a Complaint',
  other: 'Other / Unsure',
};

const getStatusCls = (status: string) => {
  switch (status) {
    case 'Investigation': return 'bg-blue-50 text-blue-800 border-blue-200';
    case 'Panel Hearing': return 'bg-amber-50 text-amber-800 border-amber-200';
    case 'Initial Review': return 'bg-rose-50 text-rose-800 border-rose-200';
    case 'Recommendation': return 'bg-slate-100 text-slate-800 border-slate-200';
    case 'Resolved': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
    default: return 'bg-slate-50 text-slate-800 border-slate-200';
  }
};

const PAGE_SIZE = 10;

interface RawCase {
  id: string;
  reference_id: string;
  path: string;
  incident_type: string;
  incident_date: string;
  location: string;
  involved_parties: string | null;
  narrative: string;
  priority: string;
  status: string;
  submitted_at: string;
  assigned_officer_id: string | null;
  officer?: { id: string; full_name: string };
}

interface TransformedCase {
  id: string;
  dbId: string;
  party: string;
  accent: string;
  date: string;
  status: string;
  statusCls: string;
  officer: string;
  type: string;
  offenceType: string;
  daysLeft: number | null;
  priority: string;
}

const AdminCases: React.FC = () => {
  const [cases, setCases] = useState<TransformedCase[]>([]);
  const [rawCases, setRawCases] = useState<RawCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [officers, setOfficers] = useState<{ id: string, full_name: string }[]>([]);
  
  // Filters
  const [filterOffence, setFilterOffence] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterPriority, setFilterPriority] = useState('Any');

  // Modal State
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<RawCase | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchOfficers = React.useCallback(async () => {
    const { data } = await supabase
      .from('users')
      .select('id, full_name')
      .in('role', ['OFFICER', 'ADMIN'])
      .eq('is_active', true);
    if (data) setOfficers(data as { id: string, full_name: string }[]);
  }, []);

  useEffect(() => {
    fetchOfficers();
  }, [fetchOfficers]);

  const fetchCases = React.useCallback(async () => {
    setLoading(true);
    
    let query = supabase
      .from('cases')
      .select(`
        *,
        officer:users!assigned_officer_id (id, full_name)
      `, { count: 'exact' });

    if (filterOffence !== 'All') query = query.eq('incident_type', filterOffence);
    if (filterType !== 'All') query = query.eq('path', filterType.toLowerCase());
    if (filterPriority !== 'Any') query = query.eq('priority', filterPriority);

    const from = (currentPage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, count, error } = await query
      .order('submitted_at', { ascending: false })
      .range(from, to);

    if (error) {
      console.error('Error fetching cases:', error);
    } else if (data) {
      setRawCases(data as RawCase[]);
      const transformed = (data as RawCase[]).map(c => {
        const submittedDate = new Date(c.submitted_at);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - submittedDate.getTime()) / (1000 * 3600 * 24));
        const daysLeft = c.path === 'formal' ? Math.max(0, 21 - diffDays) : null;

        return {
          id: c.reference_id,
          dbId: c.id,
          party: c.involved_parties || 'Anonymous',
          accent: c.path === 'formal' ? 'bg-primary' : 'bg-secondary',
          date: submittedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase(),
          status: c.status,
          statusCls: getStatusCls(c.status),
          officer: c.officer?.full_name || 'Unassigned',
          type: c.path.charAt(0).toUpperCase() + c.path.slice(1),
          offenceType: OFFENCE_LABELS[c.incident_type] || c.incident_type,
          daysLeft: daysLeft,
          priority: c.priority
        };
      });
      setCases(transformed);
      setTotalCount(count || 0);
    }
    setLoading(false);
  }, [currentPage, filterOffence, filterType, filterPriority]);

  const handleExport = () => {
    if (cases.length === 0) return;
    const headers = ['Reference ID', 'Type', 'Party', 'Offence', 'Priority', 'Status'];
    const csvContent = [
      headers.join(','),
      ...cases.map(c => [c.id, c.type, `"${c.party}"`, `"${c.offenceType}"`, c.priority, c.status].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `UG_GBC_Registry_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetchCases();

    // Check for ?action=new query param
    const params = new URLSearchParams(window.location.search);
    if (params.get('action') === 'new') {
      setIsAddModalOpen(true);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }

    const channel = supabase
      .channel('admin-cases')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'cases' },
        () => fetchCases()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchCases]);

  const handleUpdateCase = async (id: string, updates: Partial<RawCase>) => {
    setIsUpdating(true);
    const { error } = await supabase
      .from('cases')
      .update(updates)
      .eq('id', id);

    if (error) {
      alert('Update failed: ' + error.message);
    } else {
      setIsManageModalOpen(false);
      fetchCases();
    }
    setIsUpdating(false);
  };

  const handleDeleteCase = async (id: string) => {
    if (!confirm('CAUTION: This will permanently delete this case record. Proceed?')) return;
    
    setIsUpdating(true);
    const { error } = await supabase
      .from('cases')
      .delete()
      .eq('id', id);

    if (error) {
      alert('Delete failed: ' + error.message);
    } else {
      setIsManageModalOpen(false);
      fetchCases();
    }
    setIsUpdating(false);
  };

  const handleAddCase = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    // Simple reference ID generator
    const year = new Date().getFullYear().toString().slice(-2);
    const random = Math.floor(1000 + Math.random() * 9000);
    const refId = `#GBC-${year}-${random}`;

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const payload = {
      reference_id: refId,
      path: formData.get('path'),
      incident_type: formData.get('incident_type'),
      incident_date: formData.get('incident_date'),
      location: formData.get('location'),
      involved_parties: formData.get('involved_parties'),
      narrative: formData.get('narrative'),
      priority: formData.get('priority'),
      status: 'Initial Review',
      submitted_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('cases')
      .insert([payload]);

    if (error) {
      alert('Failed to create case: ' + error.message);
    } else {
      setIsAddModalOpen(false);
      fetchCases();
    }
    setIsUpdating(false);
  };

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <AdminLayout pageTitle="Active Cases">
      <div className="p-10">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">Case Registry</h2>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm">
              <span>Academic Year 2024/2025</span>
              <span className="w-1 h-1 bg-outline rounded-full" />
              <span>Showing {cases.length} of {totalCount} Active Records</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleExport}
              className="bg-white text-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 border border-outline hover:bg-surface-container-low transition-colors uppercase outline-none"
            >
              <span className="material-symbols-outlined text-[18px]">file_download</span>
              Export
            </button>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="bg-primary text-on-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none shadow-none"
            >
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              Initiate Proceeding
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant pb-6">
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Offence Type</label>
              <select 
                className="border-0 p-0 bg-transparent font-bold text-primary focus:ring-0 cursor-pointer uppercase text-[12px] tracking-wider outline-none shadow-none"
                value={filterOffence}
                onChange={(e) => { setFilterOffence(e.target.value); setCurrentPage(1); }}
              >
                <option value="All">All Offence Types</option>
                {Object.entries(OFFENCE_LABELS).map(([val, label]) => (
                  <option key={val} value={val}>{label}</option>
                ))}
              </select>
            </div>
            <div className="w-px h-8 bg-outline-variant" />
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Case Type</label>
              <select 
                className="border-0 p-0 bg-transparent font-bold text-primary focus:ring-0 cursor-pointer uppercase text-[12px] tracking-wider outline-none shadow-none"
                value={filterType}
                onChange={(e) => { setFilterType(e.target.value); setCurrentPage(1); }}
              >
                <option value="All">All Types</option>
                <option value="Formal">Formal Adjudication</option>
                <option value="Informal">Informal Mediation</option>
              </select>
            </div>
            <div className="w-px h-8 bg-outline-variant" />
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Priority</label>
              <select 
                className="border-0 p-0 bg-transparent font-bold text-primary focus:ring-0 cursor-pointer uppercase text-[12px] tracking-wider outline-none shadow-none"
                value={filterPriority}
                onChange={(e) => { setFilterPriority(e.target.value); setCurrentPage(1); }}
              >
                <option value="Any">Any Priority</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto border border-outline-variant bg-white min-h-[400px]">
          {loading ? (
            <div className="py-32 text-center">
               <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Accessing secure registry...</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="text-on-surface-variant border-b border-outline-variant bg-surface-container-low">
                  {['Reference ID', 'Type', 'Party / Offence', 'Deadline (21 Days)', 'Process Status', 'Action'].map((h, i) => (
                    <th key={h} className={`py-5 px-6 font-bold text-[10px] uppercase tracking-[0.2em] ${i === 5 ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {cases.map((row) => (
                  <tr key={row.dbId} className="hover:bg-surface-container-low transition-all">
                    <td className="py-7 px-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary text-sm tracking-tight">{row.id}</span>
                        <span className={`text-[9px] font-bold uppercase mt-1 ${row.priority === 'Critical' ? 'text-error animate-pulse' : 'text-on-surface-variant'}`}>{row.priority} Priority</span>
                      </div>
                    </td>
                    <td className="py-7 px-6">
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container-high px-2 py-1 border border-outline-variant">{row.type}</span>
                    </td>
                    <td className="py-7 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-4 ${row.accent}`} />
                        <div>
                          <span className="font-medium text-on-surface text-sm block">{row.party}</span>
                          <span className="text-[10px] text-on-surface-variant mt-0.5 block">{row.offenceType}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-7 px-6">
                      {row.daysLeft !== null ? (
                        <div className="flex flex-col gap-1.5">
                          <div className="flex justify-between items-end">
                            <span className={`text-[10px] font-bold uppercase ${row.daysLeft <= 3 ? 'text-error' : 'text-on-surface-variant'}`}>
                              {row.daysLeft} Working Days Left
                            </span>
                          </div>
                          <div className="w-32 h-1.5 bg-outline-variant rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${row.daysLeft <= 3 ? 'bg-error' : row.daysLeft <= 10 ? 'bg-amber-500' : 'bg-primary'}`} 
                              style={{ width: `${(row.daysLeft / 21) * 100}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="text-[10px] text-outline italic">N/A (Informal)</span>
                      )}
                    </td>
                    <td className="py-7 px-6">
                      <span className={`inline-block px-3 py-1 border font-bold text-[9px] uppercase tracking-[0.15em] ${row.statusCls}`}>{row.status}</span>
                    </td>
                    <td className="py-7 px-6 text-right">
                      <button 
                        onClick={() => { setSelectedCase(rawCases.find(rc => rc.id === row.dbId)); setIsManageModalOpen(true); }}
                        className="text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 font-bold text-[10px] uppercase tracking-widest transition-all outline-none"
                      >
                        Manage Case
                      </button>
                    </td>
                  </tr>
                ))}
                {cases.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-24 text-center">
                       <span className="material-symbols-outlined text-4xl block mb-3 opacity-30 text-on-surface-variant">folder_open</span>
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">No active cases found in registry</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 py-6 flex justify-between items-center border-t border-outline-variant">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none disabled:opacity-30 disabled:hover:text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-[14px]">west</span>
              Previous
            </button>
            
            <div className="flex items-center gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button 
                  key={n} 
                  onClick={() => setCurrentPage(n)}
                  className={`w-8 h-8 flex items-center justify-center font-bold text-[11px] outline-none border-none transition-colors ${n === currentPage ? 'bg-primary text-on-primary' : 'hover:bg-surface-container-low text-on-surface-variant'}`}
                >
                  {n}
                </button>
              ))}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none disabled:opacity-30 disabled:hover:text-on-surface-variant"
            >
              Next
              <span className="material-symbols-outlined text-[14px]">east</span>
            </button>
          </div>
        )}

        {/* Manage Case Modal */}
        {isManageModalOpen && selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/20 backdrop-blur-sm p-6">
            <div className="bg-white w-full max-w-2xl border border-outline shadow-2xl animate-in fade-in zoom-in duration-200">
              <div className="p-8 border-b border-outline-variant flex justify-between items-start bg-surface-container-low">
                <div>
                  <h3 className="font-display-lg text-2xl text-primary uppercase tracking-tight mb-1">Manage {selectedCase.reference_id}</h3>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Submitted on {new Date(selectedCase.submitted_at).toLocaleDateString()}</p>
                </div>
                <button onClick={() => setIsManageModalOpen(false)} className="text-outline hover:text-primary transition-colors outline-none">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Status Update */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Process Status</label>
                    <select 
                      className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm transition-all font-bold text-primary"
                      value={selectedCase.status}
                      onChange={(e) => handleUpdateCase(selectedCase.id, { status: e.target.value })}
                      disabled={isUpdating}
                    >
                      <option value="Initial Review">Initial Review</option>
                      <option value="Investigation">Investigation</option>
                      <option value="Panel Hearing">Panel Hearing</option>
                      <option value="Recommendation">Recommendation</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Assigned Officer</label>
                    <select 
                      className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm transition-all font-bold"
                      value={selectedCase.assigned_officer_id || ''}
                      onChange={(e) => handleUpdateCase(selectedCase.id, { assigned_officer_id: e.target.value || null })}
                      disabled={isUpdating}
                    >
                      <option value="">Unassigned</option>
                      {officers.map(o => (
                        <option key={o.id} value={o.id}>{o.full_name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Priority Level</label>
                    <div className="flex gap-2">
                      {['Low', 'Medium', 'High', 'Critical'].map(p => (
                        <button
                          key={p}
                          onClick={() => handleUpdateCase(selectedCase.id, { priority: p })}
                          className={`flex-1 py-2 text-[10px] font-bold uppercase border transition-all ${selectedCase.priority === p ? 'bg-primary text-on-primary border-primary' : 'bg-white text-on-surface-variant border-outline-variant hover:border-primary'}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Info Summary */}
                <div className="bg-surface-container-low p-6 border border-outline-variant flex flex-col gap-4">
                  <div>
                    <span className="text-[9px] font-bold text-outline uppercase block mb-1">Involved Parties</span>
                    <p className="text-sm font-medium">{selectedCase.involved_parties || 'Anonymous'}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-outline uppercase block mb-1">Incident Type</span>
                    <p className="text-sm font-medium">{OFFENCE_LABELS[selectedCase.incident_type] || selectedCase.incident_type}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-outline uppercase block mb-1">Location</span>
                    <p className="text-sm">{selectedCase.location || 'Not specified'}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
                    <button 
                      onClick={() => handleDeleteCase(selectedCase.id)}
                      className="text-error font-bold text-[10px] uppercase tracking-widest hover:underline flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                      Archive Record
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-surface-container-low border-t border-outline-variant flex justify-end gap-4">
                 <button 
                    onClick={() => setIsManageModalOpen(false)}
                    className="bg-primary text-on-primary px-8 py-3 font-bold text-xs tracking-widest hover:brightness-125 transition-all uppercase outline-none border-none"
                  >
                    Done
                  </button>
              </div>
            </div>
          </div>
        )}

        {/* Initiate Proceeding Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/20 backdrop-blur-sm p-6">
            <div className="bg-white w-full max-w-3xl border border-outline shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
              <form onSubmit={handleAddCase}>
                <div className="p-8 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                  <h3 className="font-display-lg text-2xl text-primary uppercase tracking-tight">Initiate Official Proceeding</h3>
                  <button type="button" onClick={() => setIsAddModalOpen(false)} className="text-outline hover:text-primary transition-colors outline-none">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[60vh] overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Involved Parties</label>
                    <input name="involved_parties" required className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm" placeholder="e.g. Student vs Faculty" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Incident Location</label>
                    <input name="location" required className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm" placeholder="e.g. Balme Library" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Offence Type</label>
                    <select name="incident_type" required className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm font-bold">
                      {Object.entries(OFFENCE_LABELS).map(([val, label]) => (
                        <option key={val} value={val}>{label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Adjudication Path</label>
                    <select name="path" required className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm font-bold">
                      <option value="formal">Formal Adjudication</option>
                      <option value="informal">Informal Mediation</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Incident Date</label>
                    <input name="incident_date" type="date" required className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Initial Priority</label>
                    <select name="priority" required className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm font-bold">
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Case Narrative / Brief</label>
                    <textarea name="narrative" required rows={4} className="w-full px-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm leading-relaxed" placeholder="Brief summary of the incident as reported..." />
                  </div>
                </div>

                <div className="p-8 bg-surface-container-low border-t border-outline-variant flex justify-end gap-4">
                  <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 font-bold text-xs tracking-widest text-primary hover:bg-primary/5 transition-colors uppercase outline-none">Cancel</button>
                  <button type="submit" disabled={isUpdating} className="bg-primary text-on-primary px-8 py-3 font-bold text-xs tracking-widest hover:brightness-125 transition-all uppercase outline-none border-none flex items-center gap-3">
                    {isUpdating && <div className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />}
                    Confirm & Open Case
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

export default AdminCases;

