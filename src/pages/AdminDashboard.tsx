import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';
import { supabase } from '../lib/supabase';

interface RecentCase {
  id: string;
  party: string;
  accent: string;
  date: string;
  status: string;
  statusCls: string;
  officer: string;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    initial: 0,
    investigation: 0,
    hearing: 0,
    resolution: 0
  });
  const [recentCases, setRecentCases] = useState<RecentCase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      
      // 1. Fetch Stats (Parallel)
      const [
        { count: initial },
        { count: investigation },
        { count: hearing },
        { count: resolution }
      ] = await Promise.all([
        supabase.from('cases').select('*', { count: 'exact', head: true }).eq('status', 'Initial Review'),
        supabase.from('cases').select('*', { count: 'exact', head: true }).eq('status', 'Investigation'),
        supabase.from('cases').select('*', { count: 'exact', head: true }).eq('status', 'Panel Hearing'),
        supabase.from('cases').select('*', { count: 'exact', head: true }).in('status', ['Recommendation', 'Resolved'])
      ]);

      setStats({
        initial: initial || 0,
        investigation: investigation || 0,
        hearing: hearing || 0,
        resolution: resolution || 0
      });

      // 2. Fetch Recent Cases
      const { data } = await supabase
        .from('cases')
        .select(`
          *,
          officer:users!assigned_officer_id (full_name)
        `)
        .order('submitted_at', { ascending: false })
        .limit(5);

      if (data) {
        setRecentCases(data.map(c => ({
          id: c.reference_id,
          party: c.involved_parties || 'Anonymous',
          accent: c.path === 'formal' ? 'bg-primary' : 'bg-secondary',
          date: new Date(c.submitted_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase(),
          status: c.status,
          statusCls: getStatusCls(c.status),
          officer: c.officer?.full_name || 'Unassigned'
        })));
      }

      setLoading(false);
    };

    fetchDashboardData();

    // Realtime subscription for stats update
    const channel = supabase
      .channel('dashboard-stats')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'cases' },
        () => fetchDashboardData()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getStatusCls = (status: string) => {
    switch (status) {
      case 'Investigation': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Panel Hearing': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Initial Review': return 'bg-rose-50 text-rose-800 border-rose-200';
      case 'Resolved': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      default: return 'bg-slate-50 text-slate-800 border-slate-200';
    }
  };

  return (
    <AdminLayout pageTitle="Gender Policy Admin">
      <div className="p-10 max-w-full mx-auto w-full">

        {/* Page Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">Case Management Registry</h2>
            <div className="flex items-center gap-4 text-on-surface-variant font-label-md text-sm">
              <span>Academic Year 2024/2025</span>
              <span className="w-1 h-1 bg-outline rounded-full" />
              <span>System Administration Console</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-primary px-6 py-3 font-label-md text-xs tracking-widest flex items-center gap-3 border border-outline hover:bg-surface-container-low transition-colors uppercase outline-none">
              <span className="material-symbols-outlined text-[18px]">file_download</span>
              Export
            </button>
            <button className="bg-primary text-on-primary px-6 py-3 font-label-md text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none shadow-none">
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              Initiate Proceeding
            </button>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant border border-outline-variant mb-14 overflow-hidden">
          <div className="bg-white p-10 flex flex-col justify-between h-48 hover:bg-surface-container-low transition-colors text-decoration-none">
            <div className="flex justify-between items-start">
              <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">Initial Review</span>
              {stats.initial > 0 && <span className="text-error font-bold text-[10px] bg-error-container px-2 py-0.5">NEW</span>}
            </div>
            <div>
              <h3 className="font-display-lg text-5xl font-bold text-primary">{stats.initial.toString().padStart(2, '0')}</h3>
              <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">Active Filings</p>
            </div>
          </div>
          <div className="bg-white p-10 flex flex-col justify-between h-48 hover:bg-surface-container-low transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">Investigation</span>
            </div>
            <div>
              <h3 className="font-display-lg text-5xl font-bold text-primary">{stats.investigation.toString().padStart(2, '0')}</h3>
              <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">Open Enquiries</p>
            </div>
          </div>
          <div className="bg-white p-10 flex flex-col justify-between h-48 hover:bg-surface-container-low transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">Panel Hearing</span>
            </div>
            <div>
              <h3 className="font-display-lg text-5xl font-bold text-primary">{stats.hearing.toString().padStart(2, '0')}</h3>
              <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">Scheduled Proceedings</p>
            </div>
          </div>
          <div className="bg-primary p-10 flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <span className="text-on-primary font-bold tracking-[0.2em] text-[10px] uppercase opacity-70">Resolution</span>
            </div>
            <div>
              <h3 className="font-display-lg text-5xl font-bold text-on-primary">{stats.resolution.toString().padStart(2, '0')}</h3>
              <p className="text-on-primary/70 text-[11px] font-bold uppercase tracking-widest mt-2">Total Outcome</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14">
          <Link to="/admin/cases" className="group border border-outline-variant p-8 bg-white hover:bg-surface-container-low transition-all flex items-center gap-5">
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">gavel</span>
            </div>
            <div>
              <p className="font-bold text-primary text-[13px] uppercase tracking-wider">Active Cases</p>
              <p className="text-on-surface-variant text-[11px] mt-0.5">View full case registry</p>
            </div>
          </Link>
          <Link to="/admin/definitions" className="group border border-outline-variant p-8 bg-white hover:bg-surface-container-low transition-all flex items-center gap-5">
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">list_alt</span>
            </div>
            <div>
              <p className="font-bold text-primary text-[13px] uppercase tracking-wider">Definitions</p>
              <p className="text-on-surface-variant text-[11px] mt-0.5">Manage policy terms</p>
            </div>
          </Link>
          <Link to="/admin/documents" className="group border border-outline-variant p-8 bg-white hover:bg-surface-container-low transition-all flex items-center gap-5">
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">folder_shared</span>
            </div>
            <div>
              <p className="font-bold text-primary text-[13px] uppercase tracking-wider">Documents</p>
              <p className="text-on-surface-variant text-[11px] mt-0.5">Policy archives</p>
            </div>
          </Link>
          <Link to="/admin/reporting" className="group border border-outline-variant p-8 bg-white hover:bg-surface-container-low transition-all flex items-center gap-5">
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">analytics</span>
            </div>
            <div>
              <p className="font-bold text-primary text-[13px] uppercase tracking-wider">Reporting</p>
              <p className="text-on-surface-variant text-[11px] mt-0.5">Annual Analytics</p>
            </div>
          </Link>
        </div>

        {/* Recent Cases (preview) */}
        <div className="border border-outline-variant bg-white min-h-[300px]">
          <div className="px-8 py-5 border-b border-outline-variant flex items-center justify-between">
            <h3 className="font-bold text-primary text-[13px] uppercase tracking-widest">Recent Filings</h3>
            <Link to="/admin/cases" className="text-primary font-bold text-[11px] uppercase tracking-widest border-b border-primary pb-0.5 hover:opacity-70 transition-opacity">
              View All →
            </Link>
          </div>
          <div className="w-full overflow-x-auto">
            {loading ? (
              <div className="py-20 text-center">
                 <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="text-on-surface-variant border-b border-outline-variant">
                    <th className="py-4 px-8 font-bold text-[10px] uppercase tracking-[0.2em]">Reference ID</th>
                    <th className="py-4 px-8 font-bold text-[10px] uppercase tracking-[0.2em]">Party Involved</th>
                    <th className="py-4 px-8 font-bold text-[10px] uppercase tracking-[0.2em]">Filing Date</th>
                    <th className="py-4 px-8 font-bold text-[10px] uppercase tracking-[0.2em]">Status</th>
                    <th className="py-4 px-8 font-bold text-[10px] uppercase tracking-[0.2em]">Officer</th>
                    <th className="py-4 px-8 font-bold text-[10px] uppercase tracking-[0.2em] text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {recentCases.map((row) => (
                    <tr key={row.id} className="hover:bg-surface-container-low transition-all">
                      <td className="py-6 px-8">
                        <span className="font-bold text-primary text-sm tracking-tight">{row.id}</span>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex items-center gap-3">
                          <div className={`w-1.5 h-4 ${row.accent}`} />
                          <span className="font-medium text-on-surface text-sm">{row.party}</span>
                        </div>
                      </td>
                      <td className="py-6 px-8 text-on-surface-variant font-medium text-sm">{row.date}</td>
                      <td className="py-6 px-8">
                        <span className={`inline-block px-3 py-1 border font-bold text-[9px] uppercase tracking-[0.15em] ${row.statusCls}`}>{row.status}</span>
                      </td>
                      <td className="py-6 px-8 font-medium text-primary text-sm">{row.officer}</td>
                      <td className="py-6 px-8 text-right">
                        <button className="text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 font-bold text-[10px] uppercase tracking-widest transition-all outline-none">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                  {recentCases.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-20 text-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        No recent filings found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

