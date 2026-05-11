import React from 'react';
import AdminLayout from '../components/layout/AdminLayout';

const AdminReporting: React.FC = () => (
  <AdminLayout pageTitle="Reporting & Analytics">
    <div className="p-10">
      <div className="mb-10">
        <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">Reporting &amp; Analytics</h2>
        <p className="text-on-surface-variant text-sm">Annual gender audit metrics, case resolution rates, and policy impact data.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant border border-outline-variant mb-12 overflow-hidden">
        {[
          { label: 'Cases Resolved',    value: '47',  sub: 'Academic Year 2024/2025', cls: 'text-primary' },
          { label: 'Avg. Resolution',   value: '14d', sub: 'Within 21-day window',    cls: 'text-primary' },
          { label: 'Gender Audits Done', value: '3',  sub: 'Since policy adoption',   cls: 'text-primary' },
          { label: 'Policy Compliance', value: '94%', sub: 'Across all units',        cls: 'text-primary' },
        ].map(({ label, value, sub, cls }) => (
          <div key={label} className="bg-white p-10 flex flex-col justify-between h-44 hover:bg-surface-container-low transition-colors">
            <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">{label}</span>
            <div>
              <h3 className={`font-display-lg text-5xl font-bold ${cls}`}>{value}</h3>
              <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Version Control table — from spec */}
      <div className="border border-outline-variant bg-white mb-12">
        <div className="px-8 py-5 border-b border-outline-variant">
          <h3 className="font-bold text-primary text-[13px] uppercase tracking-widest">Policy Version Control</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-primary">
                {['Version', 'Release Date', 'Effective Date', 'Approved By', 'Amendment'].map((h) => (
                  <th key={h} className="py-4 px-8 font-bold text-[11px] uppercase tracking-widest text-primary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-5 px-8 font-bold text-primary">1</td>
                <td className="py-5 px-8 text-on-surface-variant text-sm">March 14, 2023</td>
                <td className="py-5 px-8 text-on-surface-variant text-sm">August 11, 2022</td>
                <td className="py-5 px-8 text-on-surface-variant text-sm">Council</td>
                <td className="py-5 px-8 text-on-surface-variant text-sm">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border border-dashed border-outline p-16 flex flex-col items-center justify-center text-center bg-white">
        <span className="material-symbols-outlined text-5xl text-primary/20 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>bar_chart</span>
        <h3 className="font-bold text-primary text-[14px] uppercase tracking-wider mb-2">Analytics Charts</h3>
        <p className="text-on-surface-variant text-sm max-w-sm">Interactive reporting charts will be available here — case trends, resolution timelines, and gender audit outcomes.</p>
      </div>
    </div>
  </AdminLayout>
);

export default AdminReporting;
