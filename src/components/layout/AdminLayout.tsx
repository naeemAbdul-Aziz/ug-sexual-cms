import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

interface NavItem {
  to: string;
  icon: string;
  label: string;
  end?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/admin',           icon: 'dashboard',     label: 'Dashboard',    end: true },
  { to: '/admin/cases',     icon: 'gavel',         label: 'Active Cases'               },
  { to: '/admin/definitions', icon: 'list_alt',      label: 'Definitions'                },
  { to: '/admin/documents', icon: 'folder_shared', label: 'Documents'                  },
  { to: '/admin/reporting', icon: 'analytics',     label: 'Reporting'                  },
  { to: '/admin/audits',    icon: 'fact_check',    label: 'Audits'                     },
];

interface AdminLayoutProps {
  children: React.ReactNode;
  /** Shown in the top header bar as the current page title */
  pageTitle?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, pageTitle = 'Gender Policy Admin' }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && search.trim()) {
      navigate('/search');
    }
  };

  return (
    <div className="admin-theme bg-[#f8f9fb] text-on-surface font-body-md min-h-screen flex">

      {/* ── Sidebar ──────────────────────────────────────────── */}
      <aside className="fixed left-0 top-0 h-screen w-60 flex flex-col border-r border-outline-variant bg-white z-50">

        {/* Brand */}
        <div className="h-[72px] px-6 flex items-center gap-3 border-b border-outline-variant shrink-0">
          <img
            alt="UG Crest"
            className="w-8 h-8 object-contain grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGdFYcTb-EXXkGKPzR3gwbKU-5FZ4Cb8LuaCeBX5C6LGprMQcZSLNFtnURT2RwMiRh24tzAy0jWcA9ZcQLGXZ7x7X3h96kkCTom70-3hPeqPj9MbLSfTGY6JSPXWdpT39Hgb4O3cj58KtFPt-wP1UNs7cH0Gfuy-lPvlUnUdtvOO04_QdBcyjTItY7Tlq8VzOYdu-fSgCf4HMh9CSKAl8hA7rhL_iqp6RxstQGLWCKRu6NeL8NcBZWe0RnXeDyXZwwjKz2_luCwGE"
          />
          <div className="leading-tight">
            <p className="font-bold text-primary text-[10px] uppercase tracking-[0.2em]">University of Ghana</p>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.15em]">Gender Policy</p>
          </div>
        </div>

        {/* Primary nav */}
        <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
          {NAV_ITEMS.map(({ to, icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-3 px-4 py-2.5 bg-primary text-on-primary font-bold text-[12px] uppercase tracking-wider'
                  : 'flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors font-bold text-[12px] uppercase tracking-wider'
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {icon}
                  </span>
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* New Case CTA */}
        <div className="px-3 pb-3 border-t border-outline-variant pt-3 shrink-0">
          <button className="w-full bg-secondary text-on-secondary py-3 font-bold text-[11px] tracking-widest flex items-center justify-center gap-2 hover:brightness-110 transition-all uppercase outline-none shadow-none border-none">
            <span className="material-symbols-outlined text-[16px]">add</span>
            New Case
          </button>
        </div>

        {/* Footer nav */}
        <div className="px-3 py-3 border-t border-outline-variant space-y-0.5 shrink-0">
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-3 px-4 py-2 bg-primary text-on-primary font-bold text-[11px] uppercase tracking-wider'
                : 'flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-[11px] uppercase tracking-wider'
            }
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>settings</span>
                Settings
              </>
            )}
          </NavLink>
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-[11px] uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            Logout
          </Link>
        </div>
      </aside>

      {/* ── Main column ──────────────────────────────────────── */}
      <div className="ml-60 flex flex-col flex-1 min-h-screen">

        {/* Top header */}
        <header className="sticky top-0 z-40 w-full h-[72px] bg-white border-b border-outline-variant flex items-center justify-between px-8 shrink-0">
          <h1 className="font-bold text-primary text-[18px] tracking-tight">{pageTitle}</h1>
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden xl:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input
                className="pl-10 pr-4 py-2 border-b border-outline-variant bg-transparent focus:border-primary focus:ring-0 w-56 font-body-md text-[12px] uppercase tracking-widest outline-none shadow-none"
                placeholder="Search registry…"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
            {/* Notifications */}
            <button className="p-2 text-on-surface-variant hover:text-primary outline-none">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            {/* Avatar */}
            <div className="w-9 h-9 bg-primary flex items-center justify-center font-bold text-on-primary text-[11px] tracking-wider">
              EA
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

        {/* Admin footer */}
        <footer className="w-full py-6 px-8 border-t border-outline-variant bg-white shrink-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">
            <span>© 2024 University of Ghana — Gender Policy Office · Confidential System v2.4</span>
            <div className="flex gap-8">
              <Link to="#" className="hover:text-primary transition-colors">Security Protocol</Link>
              <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Support Hub</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
