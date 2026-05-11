import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const SearchResults: React.FC = () => {
  return (
    <Layout bgClass="bg-background">
      <main className="flex-grow flex flex-col md:flex-row max-w-[1280px] mx-auto w-full px-margin-mobile md:px-margin-desktop py-12 gap-12 min-h-screen">

        {/* Minimal Sidebar Filters */}
        <aside className="w-full md:w-56 shrink-0 flex flex-col gap-8">
          <section>
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Filters</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Category</h4>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-checkbox text-primary border-outline-variant rounded focus:ring-primary/20 h-4 w-4" type="checkbox" defaultChecked />
                    <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Policy Sections</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-checkbox text-primary border-outline-variant rounded focus:ring-primary/20 h-4 w-4" type="checkbox" defaultChecked />
                    <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Documents</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-checkbox text-primary border-outline-variant rounded focus:ring-primary/20 h-4 w-4" type="checkbox" />
                    <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">FAQ</span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Time Period</h4>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-radio text-primary border-outline-variant focus:ring-primary/20 h-4 w-4" name="dateFilter" type="radio" defaultChecked />
                    <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Any time</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-radio text-primary border-outline-variant focus:ring-primary/20 h-4 w-4" name="dateFilter" type="radio" />
                    <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Past Year</span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Sort By</h4>
                <select className="w-full bg-transparent border-none p-0 text-sm text-primary font-medium focus:ring-0 cursor-pointer outline-none">
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Oldest First</option>
                </select>
              </div>
            </div>
          </section>
        </aside>

        {/* Search Results Area */}
        <div className="flex-grow flex flex-col gap-8 min-w-0">

          {/* Search Header */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-display-lg text-4xl text-primary mb-2 tracking-tight">Search Results</h1>
              <p className="text-on-surface-variant font-body-md">
                Found <span className="font-bold text-on-surface">12 results</span> for <span className="italic">"sexual harassment"</span>
              </p>
            </div>

            <div className="flex gap-2">
              <div className="flex-grow relative">
                <input
                  className="w-full bg-white border border-outline-variant/50 rounded-xl text-on-surface py-4 px-6 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-body-lg shadow-sm"
                  type="text"
                  defaultValue="sexual harassment"
                />
              </div>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-container transition-all shadow-sm">
                Search
              </button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Result Card 1 */}
            <article className="result-card bg-white rounded-2xl border border-outline-variant/30 p-8 flex flex-col group shadow-[0_4px_12px_-2px_rgba(0,38,82,0.03)]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary/60 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]" data-icon="policy">policy</span> Policy Section
                </span>
                <span className="text-on-surface-variant text-xs">Oct 2023</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 leading-snug group-hover:text-primary-container transition-colors">
                Section 4: Definitions of Prohibited Conduct
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                Detailed legal definitions of what constitutes <mark>sexual harassment</mark> within the university context, including quid pro quo and hostile environment criteria for reporting.
              </p>
              <Link to="/definitions" className="text-primary text-sm font-bold inline-flex items-center gap-1 group/link">
                View Section
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </article>

            {/* Result Card 2 */}
            <article className="result-card bg-white rounded-2xl border border-outline-variant/30 p-8 flex flex-col group shadow-[0_4px_12px_-2px_rgba(0,38,82,0.03)]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary/60 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]" data-icon="description">description</span> Document
                </span>
                <span className="text-on-surface-variant text-xs">PDF • 2.4 MB</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 leading-snug group-hover:text-primary-container transition-colors">
                Formal Complaint Form (Form A)
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                Official form required to report incidents of <mark>sexual harassment</mark> to the Anti-Sexual Harassment Committee. Includes instructions for filing.
              </p>
              <Link to="/report" className="text-primary text-sm font-bold inline-flex items-center gap-1 group/link">
                Download Form
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1" data-icon="download">download</span>
              </Link>
            </article>

            {/* Result Card 3 (Featured/Full Width) */}
            <article className="md:col-span-2 result-card bg-white rounded-2xl border border-outline-variant/30 p-8 flex flex-col group shadow-[0_4px_12px_-2px_rgba(0,38,82,0.03)]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary/60 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]" data-icon="help_center">help_center</span> FAQ
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-container transition-colors">
                What happens after I report an incident?
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                Once a report regarding <mark>sexual harassment</mark> is filed, the EOB conducts an initial assessment within 48 hours. Support services are immediately offered, including counseling and legal guidance, and a formal investigation may be initiated depending on the complainant's wishes and the severity of the allegations.
              </p>
              <Link to="/complaints" className="text-primary text-sm font-bold inline-flex items-center gap-1 group/link">
                Read Full FAQ
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </article>

            {/* Result Card 4 (Alert Badge Demo) */}
            <article className="result-card bg-white rounded-2xl border border-outline-variant/30 p-8 flex flex-col group shadow-[0_4px_12px_-2px_rgba(0,38,82,0.03)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]" data-icon="warning">warning</span> Prohibited Conduct
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 leading-snug group-hover:text-primary-container transition-colors">
                Section 5.1: Quid Pro Quo
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                Cases where benefits are conditioned upon submission to unwelcome <mark>sexual</mark> advances. This is classified as a severe violation under university regulations.
              </p>
              <Link to="/principles" className="text-primary text-sm font-bold inline-flex items-center gap-1 group/link">
                View Policy
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </article>

          </div>

          {/* Modern Pagination */}
          <nav className="mt-8 flex justify-center items-center gap-2">
            <button aria-label="Previous" className="p-3 text-on-surface-variant hover:text-primary disabled:opacity-30 transition-colors" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-full bg-primary text-white font-semibold text-sm shadow-sm">1</button>
              <button className="w-10 h-10 rounded-full text-on-surface-variant hover:bg-surface-container font-medium text-sm transition-colors">2</button>
              <button className="w-10 h-10 rounded-full text-on-surface-variant hover:bg-surface-container font-medium text-sm transition-colors">3</button>
              <span className="px-2 text-on-surface-variant">...</span>
              <button className="w-10 h-10 rounded-full text-on-surface-variant hover:bg-surface-container font-medium text-sm transition-colors">6</button>
            </div>
            <button aria-label="Next" className="p-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </nav>

        </div>
      </main>
    </Layout>
  );
};

export default SearchResults;
