import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin-desktop h-20 bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm">
      <div className="flex items-center gap-10">
        <span className="font-headline-lg text-2xl tracking-tight font-bold text-primary">UG Gender Policy</span>
        <nav className="hidden md:flex items-center gap-8 h-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-semibold py-2 px-1 smooth-transition"
                : "text-on-surface-variant hover:text-primary smooth-transition py-2 px-1"
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/principles"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-semibold py-2 px-1 smooth-transition"
                : "text-on-surface-variant hover:text-primary smooth-transition py-2 px-1"
            }
          >
            Principles
          </NavLink>
          <NavLink
            to="/institutions"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-semibold py-2 px-1 smooth-transition"
                : "text-on-surface-variant hover:text-primary smooth-transition py-2 px-1"
            }
          >
            Institutions
          </NavLink>
          <NavLink
            to="/complaints"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-semibold py-2 px-1 smooth-transition"
                : "text-on-surface-variant hover:text-primary smooth-transition py-2 px-1"
            }
          >
            Complaints
          </NavLink>
          <NavLink
            to="/offences"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-semibold py-2 px-1 smooth-transition"
                : "text-on-surface-variant hover:text-primary smooth-transition py-2 px-1"
            }
          >
            Offences
          </NavLink>
          <NavLink
            to="/monitoring"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-secondary font-semibold py-2 px-1 smooth-transition"
                : "text-on-surface-variant hover:text-primary smooth-transition py-2 px-1"
            }
          >
            Monitoring
          </NavLink>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden xl:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
          <input
            className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary w-72 smooth-transition text-sm"
            placeholder="Search policy document..."
            type="text"
          />
        </div>
        <button className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-md hover:bg-primary-container active:scale-95 smooth-transition shadow-sm">
          Report Incident
        </button>
        <div className="flex items-center gap-2 border-l border-outline-variant pl-4">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer p-2 hover:bg-surface-container rounded-full smooth-transition">notifications</span>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer p-2 hover:bg-surface-container rounded-full smooth-transition">account_circle</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
