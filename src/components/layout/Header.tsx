import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/',             label: 'Overview',     end: true },
  { to: '/principles',   label: 'Principles',   end: false },
  { to: '/definitions',  label: 'Definitions',  end: false },
  { to: '/institutions', label: 'Institutions', end: false },
  { to: '/complaints',   label: 'Complaints',   end: false },
  { to: '/offences',     label: 'Offences',     end: false },
  { to: '/monitoring',   label: 'Monitoring',   end: false },
];

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate('/search');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant shadow-none">
      {/* Top bar */}
      <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop h-20">
        {/* Brand */}
        <div className="flex items-center gap-10">
          <Link to="/" className="font-headline-lg text-[22px] font-bold text-primary tracking-tight shrink-0">
            UG Gender Policy
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-1 items-center h-full">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? 'px-3 py-1.5 text-primary border-b-2 border-secondary font-bold text-[12px] uppercase tracking-wider'
                    : 'px-3 py-1.5 text-on-surface-variant hover:text-primary transition-colors text-[12px] uppercase tracking-wider font-medium'
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Search — xl only */}
          <div className="relative hidden xl:block">
            <input
              className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary w-64 smooth-transition text-sm"
              placeholder="Search policy document…"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
          </div>

          {/* Report CTA */}
          <Link
            to="/report"
            className="hidden md:block bg-primary text-on-primary px-6 py-2.5 font-label-md text-[12px] uppercase tracking-widest transition-all hover:brightness-110 rounded-lg"
          >
            Report Incident
          </Link>

          {/* Admin — discreet */}
          <Link
            to="/admin"
            className="hidden md:flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors text-[11px] uppercase tracking-widest font-bold"
            title="Admin Portal"
          >
            <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-on-surface-variant hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-outline-variant bg-surface px-4 pb-4">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-[13px] uppercase tracking-wider font-medium border-b border-outline-variant last:border-0 ${
                  isActive ? 'text-primary font-bold' : 'text-on-surface-variant'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/report"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block text-center bg-primary text-on-primary px-6 py-3 font-bold text-[12px] uppercase tracking-widest rounded-lg"
          >
            Report Incident
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
