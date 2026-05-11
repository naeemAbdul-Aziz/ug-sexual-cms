import React from 'react';
import AdminLayout from '../components/layout/AdminLayout';

const AdminCases: React.FC = () => {
  // offenceType values mirror INCIDENT_TYPES.value from ReportIncident.tsx
  const rows = [
    { 
      id: '#GBC-24-0812', 
      party: 'Student Body',   
      accent: 'bg-secondary', 
      date: '14 OCT 2024', 
      status: 'Investigation',  
      statusCls: 'bg-blue-50 text-blue-800 border-blue-200',   
      officer: 'Dr. Abena Mensah',
      type: 'Formal',
      offenceType: 'Sexist Remarks',
      daysLeft: 12,
      priority: 'High'
    },
    { 
      id: '#GBC-24-0809', 
      party: 'Staff (Admin)',   
      accent: 'bg-primary',   
      date: '12 OCT 2024', 
      status: 'Panel Hearing',  
      statusCls: 'bg-amber-50 text-amber-800 border-amber-200', 
      officer: 'Prof. Kwame Owusu',
      type: 'Formal',
      offenceType: 'Gender-Based Violence',
      daysLeft: 18,
      priority: 'Medium'
    },
    { 
      id: '#GBC-24-0795', 
      party: 'Student Body',   
      accent: 'bg-secondary', 
      date: '05 OCT 2024', 
      status: 'Initial Review', 
      statusCls: 'bg-rose-50 text-rose-800 border-rose-200',    
      officer: 'Sarah Boateng',
      type: 'Informal',
      offenceType: 'Unfair Treatment on Gender Grounds',
      daysLeft: null,
      priority: 'Low'
    },
    { 
      id: '#GBC-24-0782', 
      party: 'Faculty Member',  
      accent: 'bg-primary',   
      date: '28 SEP 2024', 
      status: 'Recommendation', 
      statusCls: 'bg-slate-100 text-slate-800 border-slate-200', 
      officer: 'Dr. Abena Mensah',
      type: 'Formal',
      offenceType: 'Denial of Promotion / Grade',
      daysLeft: 2,
      priority: 'Critical'
    },
  ];

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
              <span>Showing {rows.length} of 53 Active Records</span>
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

        {/* Timeline Warning (Sticky if any critical) */}
        <div className="mb-8 p-4 bg-error-container/20 border-l-4 border-error flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-error">notification_important</span>
            <p className="text-sm font-bold text-error uppercase tracking-wider">
              1 Case reaching the 21-day adjudication deadline today
            </p>
          </div>
          <button className="text-[10px] font-bold text-error border-b border-error pb-0.5 uppercase tracking-widest">Take Immediate Action</button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant pb-6">
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Offence Type</label>
              <select className="border-0 p-0 bg-transparent font-bold text-primary focus:ring-0 cursor-pointer uppercase text-[12px] tracking-wider outline-none shadow-none">
                <option>All Offence Types</option>
                <option value="sexist_remarks">Sexist Remarks</option>
                <option value="promotion_denial">Denial of Promotion / Grade</option>
                <option value="dismissal">Dismissal / Sanctions / Threats</option>
                <option value="pregnancy">Pregnancy Discrimination</option>
                <option value="care_leave">Denial of Care Leave</option>
                <option value="gender_rules">Gender-Disadvantaging Rules</option>
                <option value="gbv">Gender-Based Violence</option>
                <option value="unfair_treatment">Unfair Treatment on Gender Grounds</option>
                <option value="frustrating">Frustrating / Refusing a Complaint</option>
                <option value="other">Other / Unsure</option>
              </select>
            </div>
            <div className="w-px h-8 bg-outline-variant" />
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Case Type</label>
              <select className="border-0 p-0 bg-transparent font-bold text-primary focus:ring-0 cursor-pointer uppercase text-[12px] tracking-wider outline-none shadow-none">
                <option>All Types</option>
                <option>Formal Adjudication</option>
                <option>Informal Mediation</option>
              </select>
            </div>
            <div className="w-px h-8 bg-outline-variant" />
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Priority</label>
              <select className="border-0 p-0 bg-transparent font-bold text-primary focus:ring-0 cursor-pointer uppercase text-[12px] tracking-wider outline-none shadow-none">
                <option>Any Priority</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto border border-outline-variant bg-white">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="text-on-surface-variant border-b border-outline-variant bg-surface-container-low">
                {['Reference ID', 'Type', 'Party / Offence', 'Deadline (21 Days)', 'Process Status', 'Action'].map((h, i) => (
                  <th key={h} className={`py-5 px-6 font-bold text-[10px] uppercase tracking-[0.2em] ${i === 5 ? 'text-right' : ''}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {rows.map((row) => (
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
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-10 py-6 flex justify-between items-center border-t border-outline-variant">
          <button className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none">
            <span className="material-symbols-outlined text-[14px]">west</span>
            Previous
          </button>
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((n) => (
              <button key={n} className={`w-8 h-8 flex items-center justify-center font-bold text-[11px] outline-none border-none transition-colors ${n === 1 ? 'bg-primary text-on-primary' : 'hover:bg-surface-container-low text-on-surface-variant'}`}>{n}</button>
            ))}
            <span className="text-on-surface-variant text-[11px] font-bold">...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant font-bold text-[11px] transition-colors outline-none border-none">12</button>
          </div>
          <button className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none">
            Next
            <span className="material-symbols-outlined text-[14px]">east</span>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCases;
