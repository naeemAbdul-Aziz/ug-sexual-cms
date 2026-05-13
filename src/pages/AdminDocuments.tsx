import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';
import { supabase } from '../lib/supabase';

interface PolicyDocument {
  icon: string;
  file: string;
  badge: string;
  badgeCls: string;
  label: string;
  principal: string;
  date: string;
  url: string;
}

const AdminDocuments: React.FC = () => {
  const [documents, setDocuments] = useState<PolicyDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('policy_documents')
        .select('*')
        .order('effective_date', { ascending: false });

      if (error) {
        console.error('Error fetching documents:', error);
      } else if (data) {
        setDocuments(data.map(d => ({
          icon: 'description',
          file: `UG_Gender_Policy_v${d.version_number}.pdf`,
          badge: 'Policies',
          badgeCls: 'bg-surface-container-high text-on-surface-variant border-outline-variant',
          label: 'Verified • PDF',
          principal: 'Academic Board',
          date: new Date(d.effective_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          url: d.storage_uri
        })));
      }
      setLoading(false);
    };

    fetchDocuments();
  }, []);

  return (
    <AdminLayout pageTitle="Archives & Governance">
      <div className="px-10 py-10 max-w-full">

        {/* Page intro */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant pb-10">
          <div>
            <nav className="flex mb-3 text-[11px] uppercase tracking-widest text-on-surface-variant font-label-md">
              <Link to="/admin" className="hover:text-primary transition-colors">Admin</Link>
              <span className="mx-2">/</span>
              <span className="text-primary font-bold">Policy &amp; Documentation</span>
            </nav>
            <h2 className="font-display-lg text-4xl text-primary uppercase tracking-tight mb-3">Archives &amp; Governance</h2>
            <p className="font-body-lg text-sm text-on-surface-variant leading-relaxed max-w-xl">
              Central repository for institutional frameworks, case evidence, and historical audit reports.
            </p>
          </div>
          <button className="bg-primary text-white font-label-md text-[12px] px-8 py-4 flex items-center gap-3 hover:brightness-110 transition-all self-start md:self-auto border-none outline-none shadow-none uppercase tracking-widest">
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
            Upload Repository
          </button>
        </div>

        {/* Stats (Semi-static for now based on known stats) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant border border-outline-variant mb-12 overflow-hidden">
          <div className="bg-white p-8 flex flex-col gap-1">
            <span className="font-label-md text-[11px] uppercase tracking-widest text-on-surface-variant">Global Records</span>
            <div className="font-display-lg text-[36px] text-primary leading-none mt-2">
              {documents.length} <span className="text-sm font-body-md text-on-surface-variant tracking-normal">versions</span>
            </div>
          </div>
          <div className="bg-white p-8 flex flex-col gap-1">
            <span className="font-label-md text-[11px] uppercase tracking-widest text-on-surface-variant">Active Policy</span>
            <div className="font-display-lg text-[36px] text-primary leading-none mt-2">
              v{documents[0]?.file.split('_v')[1]?.split('.pdf')[0] || '3.0'} <span className="text-sm font-body-md text-secondary font-semibold tracking-normal">verified</span>
            </div>
          </div>
          <div className="bg-white p-8 flex flex-col gap-1">
            <span className="font-label-md text-[11px] uppercase tracking-widest text-on-surface-variant">Vault Integrity</span>
            <div className="font-display-lg text-[36px] text-primary leading-none mt-2">100%</div>
            <div className="w-full bg-surface-container-high h-[2px] mt-2">
              <div className="bg-primary h-full" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        {/* Directories */}
        <section className="mb-12">
          <div className="flex items-end justify-between mb-6">
            <h3 className="font-bold text-primary text-[15px] uppercase tracking-widest">Directories</h3>
            <Link to="#" className="text-[11px] font-bold text-primary border-b border-primary pb-0.5 uppercase tracking-widest hover:opacity-70 transition-opacity outline-none">
              View All Directories
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'account_balance', label: 'Policy Frameworks',  count: documents.length, iconCls: 'text-primary',   borderCls: 'border-primary/20',   hoverCls: 'group-hover:bg-primary group-hover:text-white',   desc: 'Standard operating procedures and institutional statutes.' },
              { icon: 'lock_open',       label: 'Case Evidence',       count: 0, iconCls: 'text-error',    borderCls: 'border-error/20',     hoverCls: 'group-hover:bg-error group-hover:text-white',     desc: 'Encrypted deposition records and forensic data.' },
              { icon: 'analytics',       label: 'Audit Reports',       count: 0, iconCls: 'text-secondary', borderCls: 'border-secondary/20', hoverCls: 'group-hover:bg-secondary group-hover:text-white', desc: 'Annual compliance certifications and findings.' },
              { icon: 'menu_book',       label: 'Educational',         count: 0, iconCls: 'text-on-surface-variant', borderCls: 'border-outline',     hoverCls: 'group-hover:bg-on-surface-variant group-hover:text-white', desc: 'Training modules for governance and ethics.' },
            ].map(({ icon, label, count, iconCls, borderCls, hoverCls, desc }) => (
              <Link key={label} to="#" className="group border border-outline-variant p-8 bg-white hover:bg-surface-container-low transition-all flex flex-col gap-5 outline-none">
                <div className={`w-10 h-10 border flex items-center justify-center transition-colors ${iconCls} ${borderCls} ${hoverCls}`}>
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-[15px] mb-1">{label}</h4>
                  <p className="font-body-md text-[12px] text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
                <div className="mt-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-primary">
                  <span>{count} Entries</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">east</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent activity table */}
        <section className="border-t border-outline-variant pt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h3 className="font-bold text-primary text-[15px] uppercase tracking-widest">Policy Archive</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
                <input
                  className="pl-10 pr-6 py-3 border border-outline-variant font-body-md text-[12px] focus:border-primary focus:ring-0 w-full sm:w-64 bg-white outline-none shadow-none"
                  placeholder="Search archives…"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto border border-outline-variant bg-white">
            {loading ? (
              <div className="py-20 text-center">
                 <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-primary">
                    {['Document Title', 'Category', 'Principal', 'Revision Date', 'Actions'].map((h, i) => (
                      <th key={h} className={`py-4 px-6 font-bold text-[11px] uppercase tracking-widest text-primary ${i === 4 ? 'text-right' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {documents.map((row) => (
                    <tr key={row.file} className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-4">
                          <span className="material-symbols-outlined text-primary text-[20px]">{row.icon}</span>
                          <div>
                            <span className="text-primary font-semibold text-[13px] block">{row.file}</span>
                            <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tight">{row.label}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wide border ${row.badgeCls}`}>{row.badge}</span>
                      </td>
                      <td className="py-6 px-6 text-on-surface-variant text-sm">{row.principal}</td>
                      <td className="py-6 px-6 text-on-surface-variant text-sm">{row.date}</td>
                      <td className="py-6 px-6 text-right">
                        <div className="flex justify-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                          {[
                            { icon: 'visibility', title: 'View',     hover: 'hover:bg-primary hover:text-white', link: row.url },
                            { icon: 'download',   title: 'Download', hover: 'hover:bg-primary hover:text-white', link: row.url },
                          ].map(({ icon, title, hover, link }) => (
                            <a key={icon} href={link} target="_blank" rel="noopener noreferrer" title={title} className={`p-2 text-primary transition-colors inline-block ${hover}`}>
                              <span className="material-symbols-outlined text-[18px]">{icon}</span>
                            </a>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {documents.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-20 text-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        No documents found in vault
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminDocuments;

