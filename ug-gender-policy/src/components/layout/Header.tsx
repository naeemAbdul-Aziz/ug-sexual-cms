import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-20 bg-surface border-b border-outline-variant shadow-none">
      <div className="flex items-center gap-12">
        <Link to="/" className="font-headline-lg text-[24px] font-bold text-primary tracking-tight">UG GENDER POLICY</Link>
        <nav className="hidden lg:flex gap-8 items-center h-full pt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-bold font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
                : "text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/principles"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-bold font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
                : "text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
            }
          >
            Principles
          </NavLink>
          <NavLink
            to="/institutions"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-bold font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
                : "text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
            }
          >
            Institutions
          </NavLink>
          <NavLink
            to="/definitions"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-bold font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
                : "text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
            }
          >
            Definitions
          </NavLink>
          <NavLink
            to="/complaints"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-bold font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
                : "text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
            }
          >
            Complaints
          </NavLink>
          <NavLink
            to="/offences"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-bold font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
                : "text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider pb-5 px-2"
            }
          >
            Offences
          </NavLink>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="notifications">notifications</span>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="account_circle">account_circle</span>
        </div>
        <Link to="/report" className="hidden md:block bg-primary text-on-primary px-8 py-2.5 font-label-md text-label-md uppercase tracking-widest transition-all hover:bg-opacity-90 rounded-lg">
          Report Incident
        </Link>
      </div>
    </header>
  );
};

export default Header;
