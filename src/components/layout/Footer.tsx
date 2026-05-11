import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-20 pb-12 px-margin-desktop bg-primary text-on-primary mt-auto border-t border-secondary/30">
      <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-16 mb-12">
        <div className="max-w-md">
          <h2 className="font-headline-lg text-3xl font-bold uppercase tracking-tight mb-6">UNIVERSITY OF GHANA</h2>
          <p className="font-body-md opacity-60 leading-relaxed">
            Established to promote gender equity and social justice within the academic community through transparent policies and rigorous ethical standards.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-20 gap-y-12 mt-12 md:mt-0">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] uppercase tracking-widest text-secondary-fixed mb-2">RESOURCES</span>
            <Link to="/overview" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Legal Basis</Link>
            <Link to="/definitions" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Policy Definitions</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[12px] uppercase tracking-widest text-secondary-fixed mb-2">SUPPORT</span>
            <Link to="/institutions" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact EOB</Link>
            <a href="https://www.ug.edu.gh" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">University Home</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[12px] uppercase tracking-[0.2em] opacity-40">
          © UNIVERSITY OF GHANA. PUBLICATION NO. 975.
        </p>
        <div className="flex gap-8">
          <span className="material-symbols-outlined opacity-60 cursor-pointer hover:opacity-100" data-icon="facebook">facebook</span>
          <span className="material-symbols-outlined opacity-60 cursor-pointer hover:opacity-100" data-icon="language">language</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
