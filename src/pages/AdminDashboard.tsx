import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';

const AdminDashboard: React.FC = () => {
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
          <div className="bg-white p-10 flex flex-col justify-between h-48 hover:bg-surface-container-low transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">Initial Review</span>
              <span className="text-error font-bold text-[10px] bg-error-container px-2 py-0.5">+4 NEW</span>
            </div>
            <div>
              <h3 className="font-display-lg text-5xl font-bold text-primary">12</h3>
              <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">Active Filings</p>
            </div>
          </div>
          <div className="bg-white p-10 flex flex-col justify-between h-48 hover:bg-surface-container-low transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">Investigation</span>
            </div>
            <div>
              <h3 className="font-display-lg text-5xl font-bold text-primary">28</h3>
              <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">Open Enquiries</p>
            </div>
          </div>
          <div className="bg-white p-10 flex flex-col justify-between h-48 hover:bg-surface-container-low transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">Panel Hearing</span>
            </div>
            <div>
              <h3 className="font-display-lg text-5xl font-bold text-primary">08</h3>
              <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">Scheduled Proceedings</p>
            </div>
          </div>
          <div className="bg-primary p-10 flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <span className="text-on-primary font-bold tracking-[0.2em] text-[10px] uppercase opacity-70">Resolution</span>
            </div>
            <div>
              <h3 className="font-display-lg text-5xl font-bold text-on-primary">05</h3>
              <p className="text-on-primary/70 text-[11px] font-bold uppercase tracking-widest mt-2">Awaiting Outcome</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <Link to="/admin/cases" className="group border border-outline-variant p-8 bg-white hover:bg-surface-container-low transition-all flex items-center gap-5">
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">gavel</span>
            </div>
            <div>
              <p className="font-bold text-primary text-[13px] uppercase tracking-wider">Active Cases</p>
              <p className="text-on-surface-variant text-[11px] mt-0.5">View full case registry</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">east</span>
          </Link>
          <Link to="/admin/documents" className="group border border-outline-variant p-8 bg-white hover:bg-surface-container-low transition-all flex items-center gap-5">
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">folder_shared</span>
            </div>
            <div>
              <p className="font-bold text-primary text-[13px] uppercase tracking-wider">Documents</p>
              <p className="text-on-surface-variant text-[11px] mt-0.5">Policy archives & evidence</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">east</span>
          </Link>
          <Link to="/admin/reporting" className="group border border-outline-variant p-8 bg-white hover:bg-surface-container-low transition-all flex items-center gap-5">
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">analytics</span>
            </div>
            <div>
              <p className="font-bold text-primary text-[13px] uppercase tracking-wider">Reporting</p>
              <p className="text-on-surface-variant text-[11px] mt-0.5">Analytics & audit reports</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">east</span>
          </Link>
        </div>

        {/* Recent Cases (preview) */}
        <div className="border border-outline-variant bg-white">
          <div className="px-8 py-5 border-b border-outline-variant flex items-center justify-between">
            <h3 className="font-bold text-primary text-[13px] uppercase tracking-widest">Recent Filings</h3>
            <Link to="/admin/cases" className="text-primary font-bold text-[11px] uppercase tracking-widest border-b border-primary pb-0.5 hover:opacity-70 transition-opacity">
              View All →
            </Link>
          </div>
          <div className="w-full overflow-x-auto">
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
                {[
                  { id: '#GBC-24-0812', party: 'Student Body',   accent: 'bg-secondary', date: '14 OCT 2024', status: 'Investigation', statusCls: 'bg-blue-50 text-blue-800 border-blue-200',   officer: 'Dr. Abena Mensah' },
                  { id: '#GBC-24-0809', party: 'Staff (Admin)',   accent: 'bg-primary',   date: '12 OCT 2024', status: 'Panel Hearing', statusCls: 'bg-amber-50 text-amber-800 border-amber-200', officer: 'Prof. Kwame Owusu' },
                  { id: '#GBC-24-0795', party: 'Student Body',   accent: 'bg-secondary', date: '05 OCT 2024', status: 'Initial Review', statusCls: 'bg-rose-50 text-rose-800 border-rose-200',    officer: 'Sarah Boateng' },
                ].map((row) => (
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
