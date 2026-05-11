import React from 'react';
import { Link } from 'react-router-dom';

const AdminDocuments: React.FC = () => {
  return (
    <div className="admin-theme bg-background text-on-background font-body-md h-screen flex overflow-hidden">
      {/* SideNavBar (Maintained structural layout) */}
      <nav className="fixed left-0 top-0 h-screen w-64 flex-col border-r border-outline-variant bg-white z-40 hidden md:flex">
        <div className="p-8 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img
              alt="University of Ghana Crest"
              className="w-10 h-10 object-cover border border-outline-variant"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvZlLFohtrAITMlQEpWOOKpVPv1N-VTbI8YCOy4Kj0rZr0lKth_U0cGry2jC6tYdZiE57_dkiXA8n8Xa96ukp7iCdRggXSENZP8EtZFggSjcMSgM25Idgnms6D5_DlKU1_3nvFQ81F2P870IE7rvMi95k_thfMyW9MbvEvSB_acOB5iEVTnQqbKgPBfjvJGW-iHkGM5uIRj_id_8A9oDJINGMr3GMC2NzDMGXWLkvr18365OU8hfkD2Lu4MLnw8CV8siJ8gbduOYA"
            />
            <div>
              <h1 className="font-headline-md text-[18px] font-bold text-primary leading-tight">EOB Administrator</h1>
              <p className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant">Policy Management</p>
            </div>
          </div>
          <button className="w-full bg-primary text-on-primary py-3 px-4 font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2 outline-none shadow-none border-none">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Case
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2 flex flex-col">
          <Link to="/admin" className="text-on-surface-variant hover:bg-surface-container-high px-8 py-3 flex items-center gap-4 font-label-md text-label-md transition-colors outline-none">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            Dashboard
          </Link>
          <Link to="/admin" className="text-on-surface-variant hover:bg-surface-container-high px-8 py-3 flex items-center gap-4 font-label-md text-label-md transition-colors outline-none">
            <span className="material-symbols-outlined text-[20px]">gavel</span>
            Cases
          </Link>
          <Link to="/admin/documents" className="sidebar-item-active text-primary px-8 py-3 flex items-center gap-4 font-label-md text-label-md transition-colors outline-none">
            <span className="material-symbols-outlined text-[20px] active-nav-fill">folder_shared</span>
            Documents
          </Link>
          <Link to="#" className="text-on-surface-variant hover:bg-surface-container-high px-8 py-3 flex items-center gap-4 font-label-md text-label-md transition-colors outline-none">
            <span className="material-symbols-outlined text-[20px]">analytics</span>
            Audits
          </Link>
          <Link to="#" className="text-on-surface-variant hover:bg-surface-container-high px-8 py-3 flex items-center gap-4 font-label-md text-label-md transition-colors outline-none">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            Settings
          </Link>
        </div>

        <div className="p-4 border-t border-outline-variant flex flex-col">
          <Link to="#" className="text-on-surface-variant hover:bg-surface-container-high px-8 py-3 flex items-center gap-4 font-label-md text-label-md transition-colors outline-none">
            <span className="material-symbols-outlined text-[20px]">help</span>
            Help
          </Link>
          <Link to="/" className="text-on-surface-variant hover:bg-surface-container-high px-8 py-3 flex items-center gap-4 font-label-md text-label-md transition-colors outline-none">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Logout
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 overflow-y-auto bg-white">
        {/* Header Section (More Editorial) */}
        <div className="px-margin-desktop py-stack-md border-b border-outline-variant bg-white sticky top-0 z-30">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <nav className="flex mb-4 text-[11px] uppercase tracking-widest text-on-surface-variant font-label-md">
                <span className="hover:text-primary cursor-pointer">Admin</span>
                <span className="mx-2">/</span>
                <span className="text-primary font-bold">Policy & Documentation</span>
              </nav>
              <h2 className="font-display-lg text-display-lg text-primary leading-none">Archives & Governance</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
                Central repository for institutional frameworks, case evidence, and historical audit reports.
              </p>
            </div>
            <button className="bg-primary text-white font-label-md text-label-md px-8 py-4 flex items-center gap-3 hover:bg-on-primary-fixed-variant transition-colors self-start md:self-auto border-none outline-none shadow-none">
              <span className="material-symbols-outlined text-[20px]">upload_file</span>
              Upload Repository
            </button>
          </div>
        </div>

        <div className="px-margin-desktop py-stack-md max-w-container-max mx-auto space-y-stack-lg">
          {/* Minimalist Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter border-b border-outline-variant pb-stack-md">
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-[12px] uppercase tracking-widest text-on-surface-variant">Global Records</span>
              <div className="font-display-lg text-[40px] text-primary">142,000 <span className="text-sm font-body-md text-on-surface-variant tracking-normal">units</span></div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-[12px] uppercase tracking-widest text-on-surface-variant">Monthly Throughput</span>
              <div className="font-display-lg text-[40px] text-primary">+1,280 <span className="text-sm font-body-md text-secondary font-semibold tracking-normal">verified</span></div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-[12px] uppercase tracking-widest text-on-surface-variant">Vault Integrity</span>
              <div className="font-display-lg text-[40px] text-primary">42% <span className="text-sm font-body-md text-on-surface-variant tracking-normal">utilized</span></div>
              <div className="w-full bg-surface-container-high h-[2px] mt-4">
                <div className="bg-primary h-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>

          {/* Document Folders (Sophisticated, Light Representations) */}
          <section>
            <div className="flex items-end justify-between mb-stack-sm">
              <h3 className="font-headline-md text-headline-md text-primary">Directories</h3>
              <Link to="#" className="text-label-md font-semibold text-primary border-b border-primary pb-1 outline-none">View All Directories</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Folder 1 */}
              <Link to="#" className="group border border-outline-variant p-8 hover:bg-surface-container-high transition-all flex flex-col gap-6 outline-none">
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-[20px] text-primary mb-2">Policy Frameworks</h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">Standard operating procedures and institutional statutes.</p>
                </div>
                <div className="mt-4 flex justify-between items-center text-[12px] font-bold uppercase tracking-widest text-primary">
                  <span>24 Entries</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">east</span>
                </div>
              </Link>

              {/* Folder 2 */}
              <Link to="#" className="group border border-outline-variant p-8 hover:bg-surface-container-high transition-all flex flex-col gap-6 outline-none">
                <div className="w-10 h-10 border border-error/20 flex items-center justify-center text-error group-hover:bg-error group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">lock_open</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-[20px] text-primary mb-2">Case Evidence</h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">Encrypted deposition records and forensic data.</p>
                </div>
                <div className="mt-4 flex justify-between items-center text-[12px] font-bold uppercase tracking-widest text-primary">
                  <span>86 Entries</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">east</span>
                </div>
              </Link>

              {/* Folder 3 */}
              <Link to="#" className="group border border-outline-variant p-8 hover:bg-surface-container-high transition-all flex flex-col gap-6 outline-none">
                <div className="w-10 h-10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-[20px] text-primary mb-2">Audit Reports</h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">Annual compliance certifications and findings.</p>
                </div>
                <div className="mt-4 flex justify-between items-center text-[12px] font-bold uppercase tracking-widest text-primary">
                  <span>12 Entries</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">east</span>
                </div>
              </Link>

              {/* Folder 4 */}
              <Link to="#" className="group border border-outline-variant p-8 hover:bg-surface-container-high transition-all flex flex-col gap-6 outline-none">
                <div className="w-10 h-10 border border-on-tertiary-fixed-variant/20 flex items-center justify-center text-on-tertiary-fixed-variant group-hover:bg-tertiary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-[20px] text-primary mb-2">Educational</h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">Training modules for governance and ethics.</p>
                </div>
                <div className="mt-4 flex justify-between items-center text-[12px] font-bold uppercase tracking-widest text-primary">
                  <span>20 Entries</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">east</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Professional Table */}
          <section className="border-t border-outline-variant pt-stack-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <h3 className="font-headline-md text-headline-md text-primary">Recent Activity</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                  <input
                    className="pl-12 pr-6 py-3 border border-outline-variant font-body-md text-sm focus:border-primary focus:ring-0 w-full sm:w-72 bg-white outline-none shadow-none"
                    placeholder="Search archives..."
                    type="text"
                  />
                </div>
                <button className="px-6 py-3 border border-outline-variant font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors text-on-surface-variant uppercase tracking-widest text-[11px] font-bold outline-none shadow-none">
                  <span className="material-symbols-outlined text-[16px]">tune</span>
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-4 px-6 font-label-md text-[11px] uppercase tracking-widest text-primary font-bold">Document Title</th>
                    <th className="py-4 px-6 font-label-md text-[11px] uppercase tracking-widest text-primary font-bold">Category</th>
                    <th className="py-4 px-6 font-label-md text-[11px] uppercase tracking-widest text-primary font-bold">Principal</th>
                    <th className="py-4 px-6 font-label-md text-[11px] uppercase tracking-widest text-primary font-bold">Revision Date</th>
                    <th className="py-4 px-6 font-label-md text-[11px] uppercase tracking-widest text-primary font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md divide-y divide-outline-variant">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-high transition-colors group">
                    <td className="py-6 px-6 flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary text-[20px]">description</span>
                      <div>
                        <span className="text-primary font-semibold block">UG_Gender_Policy_v3.0.pdf</span>
                        <span className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tighter">Verified • PDF</span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="px-3 py-1 bg-surface-container-high text-[11px] font-bold text-on-surface-variant uppercase tracking-wide border border-outline-variant">Policies</span>
                    </td>
                    <td className="py-6 px-6 text-on-surface-variant text-sm">Dr. Mensah</td>
                    <td className="py-6 px-6 text-on-surface-variant text-sm">12 Oct 2023</td>
                    <td className="py-6 px-6 text-right">
                      <div className="flex justify-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-primary hover:bg-primary hover:text-white transition-colors outline-none border-none shadow-none" title="View">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-2 text-primary hover:bg-primary hover:text-white transition-colors outline-none border-none shadow-none" title="Download">
                          <span className="material-symbols-outlined text-[18px]">download</span>
                        </button>
                        <button className="p-2 text-primary hover:bg-error hover:text-white transition-colors outline-none border-none shadow-none" title="Archive">
                          <span className="material-symbols-outlined text-[18px]">archive</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-high transition-colors group">
                    <td className="py-6 px-6 flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary text-[20px]">folder_zip</span>
                      <div>
                        <span className="text-primary font-semibold block">Evidence_Log_GBC-2024-089.zip</span>
                        <span className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tighter">Restricted • ARCHIVE</span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="px-3 py-1 bg-error-container text-[11px] font-bold text-on-error-container uppercase tracking-wide border border-error/20">Evidence</span>
                    </td>
                    <td className="py-6 px-6 text-on-surface-variant text-sm">Investigator</td>
                    <td className="py-6 px-6 text-on-surface-variant text-sm">10 Oct 2023</td>
                    <td className="py-6 px-6 text-right">
                      <div className="flex justify-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-primary hover:bg-primary hover:text-white transition-colors outline-none border-none shadow-none" title="View">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-2 text-primary hover:bg-primary hover:text-white transition-colors outline-none border-none shadow-none" title="Download">
                          <span className="material-symbols-outlined text-[18px]">download</span>
                        </button>
                        <button className="p-2 text-primary hover:bg-error hover:text-white transition-colors outline-none border-none shadow-none" title="Archive">
                          <span className="material-symbols-outlined text-[18px]">archive</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-high transition-colors group">
                    <td className="py-6 px-6 flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary text-[20px]">article</span>
                      <div>
                        <span className="text-primary font-semibold block">Q3_Gender_Audit_Final.docx</span>
                        <span className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tighter">Internal • DOCUMENT</span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="px-3 py-1 bg-secondary-container text-[11px] font-bold text-on-secondary-container uppercase tracking-wide border border-secondary/20">Audits</span>
                    </td>
                    <td className="py-6 px-6 text-on-surface-variant text-sm">Audit Committee</td>
                    <td className="py-6 px-6 text-on-surface-variant text-sm">05 Oct 2023</td>
                    <td className="py-6 px-6 text-right">
                      <div className="flex justify-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-primary hover:bg-primary hover:text-white transition-colors outline-none border-none shadow-none" title="View">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-2 text-primary hover:bg-primary hover:text-white transition-colors outline-none border-none shadow-none" title="Download">
                          <span className="material-symbols-outlined text-[18px]">download</span>
                        </button>
                        <button className="p-2 text-primary hover:bg-error hover:text-white transition-colors outline-none border-none shadow-none" title="Archive">
                          <span className="material-symbols-outlined text-[18px]">archive</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[12px] text-on-surface-variant font-body-md">Showing 1 to 3 of 142 entries</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-outline-variant text-[11px] font-bold uppercase tracking-widest hover:bg-surface-container-high transition-colors outline-none shadow-none">Previous</button>
                <button className="px-4 py-2 border border-primary bg-primary text-white text-[11px] font-bold uppercase tracking-widest hover:bg-on-primary-fixed-variant transition-colors outline-none shadow-none">Next</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDocuments;
