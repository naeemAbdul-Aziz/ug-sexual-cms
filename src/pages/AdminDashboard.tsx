import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div className="admin-theme bg-background text-on-surface font-body-md min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col border-r border-outline-variant bg-white z-50">
        <div className="h-24 px-8 flex items-center border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <img
              alt="UG Crest"
              className="w-10 h-10 object-contain grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGdFYcTb-EXXkGKPzR3gwbKU-5FZ4Cb8LuaCeBX5C6LGprMQcZSLNFtnURT2RwMiRh24tzAy0jWcA9ZcQLGXZ7x7X3h96kkCTom70-3hPeqPj9MbLSfTGY6JSPXWdpT39Hgb4O3cj58KtFPt-wP1UNs7cH0Gfuy-lPvlUnUdtvOO04_QdBcyjTItY7Tlq8VzOYdu-fSgCf4HMh9CSKAl8hA7rhL_iqp6RxstQGLWCKRu6NeL8NcBZWe0RnXeDyXZwwjKz2_luCwGE"
            />
            <div>
              <h2 className="font-bold text-primary text-[11px] uppercase tracking-[0.2em] leading-none">University</h2>
              <h2 className="font-bold text-primary text-[11px] uppercase tracking-[0.2em]">of Ghana</h2>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-1">
          <Link to="/admin" className="flex items-center gap-4 px-4 py-3 bg-primary text-on-primary font-label-md text-sm transition-all">
            <span className="material-symbols-outlined text-[20px]" data-icon="dashboard">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/admin" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all font-label-md text-sm">
            <span className="material-symbols-outlined text-[20px]" data-icon="gavel" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
            <span>Active Cases</span>
          </Link>
          <Link to="/admin/documents" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all font-label-md text-sm">
            <span className="material-symbols-outlined text-[20px]" data-icon="folder_shared">folder_shared</span>
            <span>Documents</span>
          </Link>
          <Link to="#" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all font-label-md text-sm">
            <span className="material-symbols-outlined text-[20px]" data-icon="analytics">analytics</span>
            <span>Reporting</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-outline-variant">
          <button className="w-full bg-secondary text-on-secondary py-3 font-label-md text-xs tracking-widest flex items-center justify-center gap-2 hover:brightness-110 transition-all uppercase outline-none shadow-none">
            <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
            New Case
          </button>
        </div>
        <div className="px-4 py-6 border-t border-outline-variant space-y-1">
          <Link to="#" className="flex items-center gap-4 px-4 py-2 text-on-surface-variant hover:text-primary transition-all font-label-md text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]" data-icon="settings">settings</span>
            Settings
          </Link>
          <Link to="/" className="flex items-center gap-4 px-4 py-2 text-on-surface-variant hover:text-primary transition-all font-label-md text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]" data-icon="logout">logout</span>
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 w-full z-40 flex items-center justify-between px-10 h-24 bg-white border-b border-outline-variant">
          <div className="flex items-center gap-12">
            <h1 className="font-display-lg text-2xl font-bold text-primary tracking-tight">Gender Policy Admin</h1>
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/admin" className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Overview</Link>
              <Link to="/admin" className="text-primary border-b-2 border-primary py-1 text-xs font-bold uppercase tracking-widest">Case Registry</Link>
              <Link to="/admin/documents" className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Policy Hub</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" data-icon="search">search</span>
              <input
                className="pl-10 pr-4 py-2 border-b border-outline-variant bg-transparent focus:border-primary focus:ring-0 w-64 font-body-md text-xs uppercase tracking-widest outline-none shadow-none"
                placeholder="Search registry..."
                type="text"
              />
            </div>
            <button className="p-2 text-on-surface-variant hover:text-primary outline-none">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center font-bold text-primary text-xs">
              EA
            </div>
          </div>
        </header>

        <div className="p-10 max-w-full mx-auto w-full flex-1">
          {/* Dashboard Header */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">Case Management Registry</h2>
              <div className="flex items-center gap-4 text-on-surface-variant font-label-md text-sm">
                <span>Academic Year 2024/2025</span>
                <span className="w-1 h-1 bg-outline rounded-full"></span>
                <span>System Administration Console</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-primary px-6 py-3 font-label-md text-xs tracking-widest flex items-center gap-3 border border-outline hover:bg-surface-container-low transition-colors uppercase outline-none">
                <span className="material-symbols-outlined text-[18px]" data-icon="file_download">file_download</span>
                Export
              </button>
              <button className="bg-primary text-on-primary px-6 py-3 font-label-md text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none shadow-none">
                <span className="material-symbols-outlined text-[18px]" data-icon="add_circle">add_circle</span>
                Initiate Proceeding
              </button>
            </div>
          </div>

          {/* Refined Metric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant border border-outline-variant mb-16 overflow-hidden">
            <div className="bg-white p-10 flex flex-col justify-between h-48 group hover:bg-surface-container-low transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">Initial Review</span>
                <span className="text-error font-bold text-[10px] bg-error-container px-2 py-0.5">+4 NEW</span>
              </div>
              <div>
                <h3 className="font-display-lg text-5xl font-bold text-primary">12</h3>
                <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">Active Filings</p>
              </div>
            </div>
            <div className="bg-white p-10 flex flex-col justify-between h-48 group hover:bg-surface-container-low transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-on-surface-variant font-bold tracking-[0.2em] text-[10px] uppercase">Investigation</span>
              </div>
              <div>
                <h3 className="font-display-lg text-5xl font-bold text-primary">28</h3>
                <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mt-2">Open Enquiries</p>
              </div>
            </div>
            <div className="bg-white p-10 flex flex-col justify-between h-48 group hover:bg-surface-container-low transition-colors">
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

          {/* Table Controls & Registry */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant pb-6">
            <div className="flex items-center gap-10">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Case Category</label>
                <select className="border-0 p-0 bg-transparent font-bold text-primary focus:ring-0 cursor-pointer pr-8 uppercase text-[12px] tracking-wider outline-none shadow-none">
                  <option>All Registry Categories</option>
                  <option>Student Cases</option>
                  <option>Administrative Staff</option>
                  <option>Academic Faculty</option>
                </select>
              </div>
              <div className="w-px h-8 bg-outline-variant"></div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Filing Period</label>
                <select className="border-0 p-0 bg-transparent font-bold text-primary focus:ring-0 cursor-pointer pr-8 uppercase text-[12px] tracking-wider outline-none shadow-none">
                  <option>Last 30 Days</option>
                  <option>Current Semester</option>
                  <option>Academic Year 23/24</option>
                </select>
              </div>
            </div>
            <div className="text-on-surface-variant font-label-md text-[11px] tracking-widest uppercase">
              Registry Statistics: <span className="text-primary font-bold">53 Active Records</span>
            </div>
          </div>

          {/* Full Width Case Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="text-on-surface-variant border-b border-outline">
                  <th className="py-5 font-bold text-[10px] uppercase tracking-[0.2em] w-1/6">Reference ID</th>
                  <th className="py-5 font-bold text-[10px] uppercase tracking-[0.2em] w-1/4">Party Involved</th>
                  <th className="py-5 font-bold text-[10px] uppercase tracking-[0.2em] w-1/6">Filing Date</th>
                  <th className="py-5 font-bold text-[10px] uppercase tracking-[0.2em] w-1/6">Process Status</th>
                  <th className="py-5 font-bold text-[10px] uppercase tracking-[0.2em] w-1/6">Case Officer</th>
                  <th className="py-5 font-bold text-[10px] uppercase tracking-[0.2em] text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-low transition-all group">
                  <td className="py-8">
                    <span className="font-bold text-primary text-base tracking-tight">#GBC-24-0812</span>
                  </td>
                  <td className="py-8">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-4 bg-secondary"></div>
                      <span className="font-medium text-on-surface text-sm">Student Body</span>
                    </div>
                  </td>
                  <td className="py-8 text-on-surface-variant font-medium text-sm">14 OCT 2024</td>
                  <td className="py-8">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 border border-blue-200 font-bold text-[9px] uppercase tracking-[0.15em]">Investigation</span>
                  </td>
                  <td className="py-8 font-medium text-primary text-sm">Dr. Abena Mensah</td>
                  <td className="py-8 text-right">
                    <button className="text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 font-bold text-[10px] uppercase tracking-widest transition-all outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-low transition-all group">
                  <td className="py-8">
                    <span className="font-bold text-primary text-base tracking-tight">#GBC-24-0809</span>
                  </td>
                  <td className="py-8">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-4 bg-primary"></div>
                      <span className="font-medium text-on-surface text-sm">Staff (Admin)</span>
                    </div>
                  </td>
                  <td className="py-8 text-on-surface-variant font-medium text-sm">12 OCT 2024</td>
                  <td className="py-8">
                    <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 font-bold text-[9px] uppercase tracking-[0.15em]">Panel Hearing</span>
                  </td>
                  <td className="py-8 font-medium text-primary text-sm">Prof. Kwame Owusu</td>
                  <td className="py-8 text-right">
                    <button className="text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 font-bold text-[10px] uppercase tracking-widest transition-all outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-container-low transition-all group">
                  <td className="py-8">
                    <span className="font-bold text-primary text-base tracking-tight">#GBC-24-0795</span>
                  </td>
                  <td className="py-8">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-4 bg-secondary"></div>
                      <span className="font-medium text-on-surface text-sm">Student Body</span>
                    </div>
                  </td>
                  <td className="py-8 text-on-surface-variant font-medium text-sm">05 OCT 2024</td>
                  <td className="py-8">
                    <span className="inline-block px-3 py-1 bg-rose-50 text-rose-800 border border-rose-200 font-bold text-[9px] uppercase tracking-[0.15em]">Initial Review</span>
                  </td>
                  <td className="py-8 font-medium text-primary text-sm">Sarah Boateng</td>
                  <td className="py-8 text-right">
                    <button className="text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 font-bold text-[10px] uppercase tracking-widest transition-all outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container-low transition-all group">
                  <td className="py-8">
                    <span className="font-bold text-primary text-base tracking-tight">#GBC-24-0782</span>
                  </td>
                  <td className="py-8">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-4 bg-primary"></div>
                      <span className="font-medium text-on-surface text-sm">Faculty Member</span>
                    </div>
                  </td>
                  <td className="py-8 text-on-surface-variant font-medium text-sm">28 SEP 2024</td>
                  <td className="py-8">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 border border-slate-200 font-bold text-[9px] uppercase tracking-[0.15em]">Recommendation</span>
                  </td>
                  <td className="py-8 font-medium text-primary text-sm">Dr. Abena Mensah</td>
                  <td className="py-8 text-right">
                    <button className="text-primary hover:bg-primary hover:text-white border border-primary px-4 py-2 font-bold text-[10px] uppercase tracking-widest transition-all outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Clean Pagination */}
          <div className="mt-12 py-8 flex justify-between items-center border-t border-outline-variant">
            <button className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none">
              <span className="material-symbols-outlined text-[14px]" data-icon="west">west</span>
              Previous
            </button>
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary font-bold text-[11px] outline-none shadow-none border-none">1</button>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant font-bold text-[11px] transition-colors outline-none shadow-none border-none">2</button>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant font-bold text-[11px] transition-colors outline-none shadow-none border-none">3</button>
              <span className="text-on-surface-variant text-[11px] font-bold">...</span>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant font-bold text-[11px] transition-colors outline-none shadow-none border-none">12</button>
            </div>
            <button className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none">
              Next
              <span className="material-symbols-outlined text-[14px]" data-icon="east">east</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-10 px-10 border-t border-outline-variant bg-white mt-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <img
                  alt="UG Crest Small"
                  className="w-6 h-6 grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGdFYcTb-EXXkGKPzR3gwbKU-5FZ4Cb8LuaCeBX5C6LGprMQcZSLNFtnURT2RwMiRh24tzAy0jWcA9ZcQLGXZ7x7X3h96kkCTom70-3hPeqPj9MbLSfTGY6JSPXWdpT39Hgb4O3cj58KtFPt-wP1UNs7cH0Gfuy-lPvlUnUdtvOO04_QdBcyjTItY7Tlq8VzOYdu-fSgCf4HMh9CSKAl8hA7rhL_iqp6RxstQGLWCKRu6NeL8NcBZWe0RnXeDyXZwwjKz2_luCwGE"
                />
                <h3 className="font-display-lg text-lg font-bold tracking-tight text-primary">University of Ghana</h3>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed uppercase tracking-wider">
                Office of the Gender Policy Administrator<br/>
                Confidential Management System v2.4.0
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
              <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-[10px] uppercase tracking-[0.15em]">Security Protocol</Link>
              <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-[10px] uppercase tracking-[0.15em]">Privacy Policy</Link>
              <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-[10px] uppercase tracking-[0.15em]">Staff Portal</Link>
              <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors font-bold text-[10px] uppercase tracking-[0.15em]">Support Hub</Link>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-outline-variant text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">
            © 2024 University of Ghana. All institutional records are confidential.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminDashboard;
