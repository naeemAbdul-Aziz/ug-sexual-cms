import React from 'react';
import AdminLayout from '../components/layout/AdminLayout';

const AdminSettings: React.FC = () => (
  <AdminLayout pageTitle="Settings">
    <div className="p-10 max-w-3xl">
      <div className="mb-10">
        <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">System Settings</h2>
        <p className="text-on-surface-variant text-sm">Manage EOB membership, notification preferences, and system configuration.</p>
      </div>

      {/* EOB Membership roster */}
      <section className="border border-outline-variant bg-white mb-8">
        <div className="px-8 py-5 border-b border-outline-variant flex items-center justify-between">
          <h3 className="font-bold text-primary text-[13px] uppercase tracking-widest">EOB Membership (13 persons)</h3>
          <button className="bg-primary text-on-primary px-5 py-2 font-bold text-[11px] uppercase tracking-widest flex items-center gap-2 hover:brightness-110 transition-all outline-none border-none shadow-none">
            <span className="material-symbols-outlined text-[16px]">person_add</span>
            Add Member
          </button>
        </div>
        <div className="divide-y divide-outline-variant">
          {[
            { role: 'Chair',                           name: 'Prof. Ama Asantewaa',  term: '3-year (renewable once, 2-yr)', tag: 'Chair' },
            { role: 'Registrar / Representative',      name: 'TBD',                  term: '2-year (renewable once)',       tag: 'Ex-officio' },
            { role: 'Legal Counsel / Representative',  name: 'TBD',                  term: '2-year (renewable once)',       tag: 'Ex-officio' },
            { role: 'CEGENSA Representative',          name: 'Dr. Abena Mensah',     term: '2-year (renewable once)',       tag: 'Representative' },
            { role: 'School of Law Representative',    name: 'TBD',                  term: '2-year (renewable once)',       tag: 'Representative' },
            { role: 'Convocation Rep. (Teaching)',     name: 'Prof. Kwame Owusu',    term: '2-year (renewable once)',       tag: 'Representative' },
            { role: 'Convocation Rep. (Non-Teaching)', name: 'TBD',                  term: '2-year (renewable once)',       tag: 'Representative' },
            { role: 'SRC Student Representative',      name: 'TBD',                  term: '1-year',                        tag: 'Student' },
            { role: 'GRASAG Student Representative',   name: 'TBD',                  term: '1-year',                        tag: 'Student' },
            { role: 'Senior Staff (FUSSAG/SSA-UoG)',   name: 'TBD',                  term: '2-year (renewable once)',       tag: 'Staff' },
            { role: 'Junior Staff (TEWU)',              name: 'TBD',                  term: '2-year (renewable once)',       tag: 'Staff' },
            { role: 'External Expert 1',               name: 'TBD',                  term: '2-year (renewable once)',       tag: 'External' },
            { role: 'External Expert 2',               name: 'TBD',                  term: '2-year (renewable once)',       tag: 'External' },
          ].map(({ role, name, term, tag }) => (
            <div key={role} className="px-8 py-5 flex items-center justify-between hover:bg-surface-container-low transition-colors">
              <div>
                <p className="font-bold text-primary text-[13px]">{name}</p>
                <p className="text-on-surface-variant text-[11px] mt-0.5 uppercase tracking-wider">{role}</p>
                <p className="text-on-surface-variant text-[11px] mt-0.5">Term: {term}</p>
              </div>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant font-bold text-[9px] uppercase tracking-widest border border-outline-variant">{tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* System info */}
      <section className="border border-outline-variant bg-white">
        <div className="px-8 py-5 border-b border-outline-variant">
          <h3 className="font-bold text-primary text-[13px] uppercase tracking-widest">System Information</h3>
        </div>
        <div className="px-8 py-6 space-y-5">
          {[
            { label: 'Policy Publication', value: 'No. 975 · Vol. 60 No. 3 · 2023' },
            { label: 'Effective Date',     value: 'August 11, 2022' },
            { label: 'Release Date',       value: 'March 14, 2023' },
            { label: 'System Version',     value: 'v2.4.0 (Confidential)' },
            { label: 'Review Cycle',       value: 'Every 5 years' },
            { label: 'Adjudication Window',value: '21 working days' },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center py-3 border-b border-outline-variant last:border-0">
              <span className="text-on-surface-variant font-bold text-[11px] uppercase tracking-widest">{label}</span>
              <span className="text-primary font-bold text-[13px]">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  </AdminLayout>
);

export default AdminSettings;
