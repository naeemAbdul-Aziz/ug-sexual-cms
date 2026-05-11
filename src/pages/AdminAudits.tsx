import React from 'react';
import AdminLayout from '../components/layout/AdminLayout';

const AdminAudits: React.FC = () => (
  <AdminLayout pageTitle="Gender Audits">
    <div className="p-10">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">Gender Audits</h2>
          <p className="text-on-surface-variant text-sm">EOB-led yearly gender audits of the University in collaboration with CEGENSA.</p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none shadow-none">
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          Schedule Audit
        </button>
      </div>

      {/* Cycle info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          { icon: 'event_repeat',  label: 'Evaluation Cycle',  value: 'Every 4 Years',  sub: 'Policy impact assessment' },
          { icon: 'calendar_month', label: 'Review Cycle',    value: 'Every 5 Years',  sub: 'Full policy review' },
          { icon: 'schedule',       label: 'Next Audit Due',  value: 'Dec 2025',       sub: 'Scheduled by EOB' },
        ].map(({ icon, label, value, sub }) => (
          <div key={label} className="border border-outline-variant bg-white p-8 flex items-center gap-6">
            <div className="w-12 h-12 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[24px]">{icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{label}</p>
              <p className="font-display-lg text-[22px] text-primary font-bold leading-tight">{value}</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Audit log */}
      <div className="border border-outline-variant bg-white">
        <div className="px-8 py-5 border-b border-outline-variant flex items-center justify-between">
          <h3 className="font-bold text-primary text-[13px] uppercase tracking-widest">Audit Log</h3>
          <button className="text-primary font-bold text-[11px] uppercase tracking-widest border-b border-primary pb-0.5 hover:opacity-70 transition-opacity">
            Download Report ↓
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-primary">
                {['Audit Period', 'Conducted By', 'Date Submitted', 'Status', 'Recommendations'].map((h) => (
                  <th key={h} className="py-4 px-8 font-bold text-[11px] uppercase tracking-widest text-primary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {[
                { period: 'Academic Year 2023/24', by: 'EOB + CEGENSA', date: 'Mar 2024', status: 'Completed',  recs: 12 },
                { period: 'Academic Year 2022/23', by: 'EOB + CEGENSA', date: 'Mar 2023', status: 'Completed',  recs: 9  },
                { period: 'Academic Year 2024/25', by: 'EOB + CEGENSA', date: 'Pending',  status: 'In Progress', recs: '—' },
              ].map((row) => (
                <tr key={row.period} className="hover:bg-surface-container-low transition-colors">
                  <td className="py-5 px-8 font-bold text-primary text-sm">{row.period}</td>
                  <td className="py-5 px-8 text-on-surface-variant text-sm">{row.by}</td>
                  <td className="py-5 px-8 text-on-surface-variant text-sm">{row.date}</td>
                  <td className="py-5 px-8">
                    <span className={`px-3 py-1 font-bold text-[9px] uppercase tracking-widest border ${row.status === 'Completed' ? 'bg-blue-50 text-blue-800 border-blue-200' : 'bg-amber-50 text-amber-800 border-amber-200'}`}>{row.status}</span>
                  </td>
                  <td className="py-5 px-8 font-bold text-primary">{row.recs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default AdminAudits;
