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

interface TransformedCase {
  id: string;
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
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filters
  const [filterOffence, setFilterOffence] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterPriority, setFilterPriority] = useState('Any');

  useEffect(() => {
    const fetchCases = async () => {
      setLoading(true);
      
      let query = supabase
        .from('cases')
        .select(`
          *,
          officer:users!assigned_officer_id (full_name)
        `, { count: 'exact' });

      // Apply Filters
      if (filterOffence !== 'All') query = query.eq('incident_type', filterOffence);
      if (filterType !== 'All') query = query.eq('path', filterType.toLowerCase());
      if (filterPriority !== 'Any') query = query.eq('priority', filterPriority);

      // Apply Pagination
      const from = (currentPage - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { data, count, error } = await query
        .order('submitted_at', { ascending: false })
        .range(from, to);

      if (error) {
        console.error('Error fetching cases:', error);
      } else if (data) {
        const transformed = data.map(c => {
          const submittedDate = new Date(c.submitted_at);
          const now = new Date();
          const diffDays = Math.floor((now.getTime() - submittedDate.getTime()) / (1000 * 3600 * 24));
          const daysLeft = c.path === 'formal' ? Math.max(0, 21 - diffDays) : null;

          return {
            id: c.reference_id,
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
    };

    fetchCases();

    // Realtime subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'cases' },
        () => fetchCases()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [currentPage, filterOffence, filterType, filterPriority]);

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
            <button className="bg-white text-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 border border-outline hover:bg-surface-container-low transition-colors uppercase outline-none">
              <span className="material-symbols-outlined text-[18px]">file_download</span>
              Export
            </button>
            <button className="bg-primary text-on-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none shadow-none">
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
                  <tr key={row.id} className="hover:bg-surface-container-low transition-all">
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
                      <button className="text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 font-bold text-[10px] uppercase tracking-widest transition-all outline-none">
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
      </div>
    </AdminLayout>
  );
};

export default AdminCases;

