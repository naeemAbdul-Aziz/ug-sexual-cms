import React from 'react';
import Layout from '../components/layout/Layout';


const Monitoring: React.FC = () => {
  return (
    <Layout bgClass="bg-surface">
      {/* Hero Section */}
      <section className="bg-[#002652] text-white py-24 px-margin-mobile md:px-margin-desktop mb-stack-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
          </svg>
        </div>
        <div className="max-w-[1024px] mx-auto relative z-10">
          <span className="font-label-md bg-secondary text-on-secondary px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase text-xs">Section 8.0</span>
          <h1 className="font-display-lg text-5xl md:text-6xl mb-6 leading-tight">Monitoring & Evaluation</h1>
          <p className="font-body-lg text-surface-container-low max-w-2xl leading-relaxed opacity-90">
            Establishing a rigorous framework for institutional accountability through continuous data synthesis, regular gender audits, and evidence-based impact assessment.
          </p>
        </div>
      </section>

      {/* Monitoring Framework Grid */}
      <section className="px-margin-mobile md:px-margin-desktop mb-24">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-headline-md text-3xl text-primary flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
              </span>
              M&E Framework Components
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1: Annual Workplan */}
            <div className="bg-gradient-to-br from-white to-[#f8faff] shadow-[0_4px_20px_-2px_rgba(0,38,82,0.05)] p-8 rounded-2xl border border-outline-variant/50 group hover:border-secondary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary bg-primary-fixed p-3 rounded-xl">event_note</span>
                <span className="text-xs font-bold text-outline uppercase tracking-widest">Phase 01</span>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-4">Annual Workplan & Budget</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Development of comprehensive operational roadmaps and financial allocations dedicated to gender mainstreaming initiatives for each academic year.
              </p>
              <div className="pt-6 border-t border-outline-variant flex items-center gap-3 text-secondary font-label-md">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                <span>Frequency: Every August</span>
              </div>
            </div>

            {/* Card 2: Yearly Gender Audits */}
            <div className="bg-gradient-to-br from-white to-[#f8faff] shadow-[0_4px_20px_-2px_rgba(0,38,82,0.05)] p-8 rounded-2xl border border-outline-variant/50 group hover:border-secondary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary bg-primary-fixed p-3 rounded-xl">fact_check</span>
                <span className="text-xs font-bold text-outline uppercase tracking-widest">Phase 02</span>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-4">Yearly Gender Audits</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Systematic internal and external assessments of institutional structures to ensure compliance with policy directives and identify systemic gaps.
              </p>
              <div className="pt-6 border-t border-outline-variant flex items-center gap-3 text-secondary font-label-md">
                <span className="material-symbols-outlined text-lg">verified</span>
                <span>Frequency: Annual</span>
              </div>
            </div>

            {/* Card 3: Policy Evaluation */}
            <div className="bg-gradient-to-br from-white to-[#f8faff] shadow-[0_4px_20px_-2px_rgba(0,38,82,0.05)] p-8 rounded-2xl border border-outline-variant/50 group hover:border-secondary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary bg-primary-fixed p-3 rounded-xl">history_edu</span>
                <span className="text-xs font-bold text-outline uppercase tracking-widest">Phase 03</span>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-4">Policy Evaluation</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                A deep-dive impact assessment conducted to measure long-term progress toward gender equality and revise policy goals based on current needs.
              </p>
              <div className="pt-6 border-t border-outline-variant flex items-center gap-3 text-secondary font-label-md">
                <span className="material-symbols-outlined text-lg">update</span>
                <span>Frequency: Every 4 Years</span>
              </div>
            </div>

            {/* Card 4: Gender Equality Annual Report */}
            <div className="bg-gradient-to-br from-white to-[#f8faff] shadow-[0_4px_20px_-2px_rgba(0,38,82,0.05)] p-8 rounded-2xl border border-outline-variant/50 group hover:border-secondary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary bg-primary-fixed p-3 rounded-xl">description</span>
                <span className="text-xs font-bold text-outline uppercase tracking-widest">Phase 04</span>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-4">Gender Equality Annual Report</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Publication of key performance indicators, progress narratives, and statistical data for transparent communication with stakeholders.
              </p>
              <div className="pt-6 border-t border-outline-variant flex items-center gap-3 text-secondary font-label-md">
                <span className="material-symbols-outlined text-lg">visibility</span>
                <span>Public Disclosure: Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information & Dissemination Section */}
      <section className="px-margin-mobile md:px-margin-desktop mb-24">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Dissemination */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-headline-md text-3xl text-primary mb-4">Information Dissemination</h2>
                <p className="text-on-surface-variant text-lg">
                  The University ensures that M&E findings are accessible to all members of the community through integrated communication channels.
                </p>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center gap-5 p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">groups</span>
                  </span>
                  <span className="font-label-md text-on-surface">University-wide Townhall Meetings</span>
                </li>
                <li className="flex items-center gap-5 p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">computer</span>
                  </span>
                  <span className="font-label-md text-on-surface">Digital Portal & E-Policy Repository</span>
                </li>
                <li className="flex items-center gap-5 p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">newspaper</span>
                  </span>
                  <span className="font-label-md text-on-surface">Quarterly Faculty Bulletins</span>
                </li>
              </ul>
            </div>

            {/* Information Gathering Image */}
            <div className="lg:col-span-7">
              <div className="relative group aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-outline-variant/20">
                <img
                  alt="University staff collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAho4sCSKxIeG-mIx4T2-pZNdTwobeabEIzb9sqI-Kq6i55CTMSAWCU-adbSD-sOi0SB2uUPYstdhRWeTZ5x6A-BHRJmiUIKrcBXwKJigf71AxGSFomSib7D3G5nTPz0yAQCXyIylWA_L_j5040B9pNJyAJyFrsDUaElB1UqUFr-pSSt9Vqzx24qCl5Pohg2oykMg3ciqtGLLsLpjlZLGoEYDf0psLTVcdo6AG0o42JjxB94r6UoBXbbPIk90OCWV5wOvBEQRi2v8E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm font-label-md opacity-80 uppercase tracking-widest mb-1">Strategic Review</p>
                  <p className="text-lg font-headline-md">Collaborative Decision Making at UG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version Control Table */}
      <section className="px-margin-mobile md:px-margin-desktop mb-stack-lg">
        <div className="max-w-[1024px] mx-auto">
          <div className="bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-surface-container p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-headline-md text-primary text-xl">Document Governance</h3>
                <p className="text-sm text-on-surface-variant mt-1">Official policy lifecycle and amendment history</p>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 bg-error-container text-on-error-container rounded-full">
                Internal Only
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-md border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container-low text-primary font-label-md border-b border-outline-variant/50">
                    <th className="px-8 py-5">Version</th>
                    <th className="px-8 py-5">Adopted</th>
                    <th className="px-8 py-5">Approving Body</th>
                    <th className="px-8 py-5">Revision Summary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-primary">V 1.0</td>
                    <td className="px-8 py-6 text-on-surface-variant">Oct 2012</td>
                    <td className="px-8 py-6 font-medium">Centre for Gender Studies</td>
                    <td className="px-8 py-6 text-on-surface-variant text-sm">Initial policy framework adopted by University Council.</td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-primary">V 2.0</td>
                    <td className="px-8 py-6 text-on-surface-variant">Jan 2018</td>
                    <td className="px-8 py-6 font-medium">Institutional Review Com.</td>
                    <td className="px-8 py-6 text-on-surface-variant text-sm">Expanded scope to include online harassment and digital inclusivity.</td>
                  </tr>
                  <tr className="bg-primary/[0.02] border-l-4 border-l-secondary">
                    <td className="px-8 py-6 font-bold text-primary">V 3.0</td>
                    <td className="px-8 py-6 text-on-surface-variant">June 2024</td>
                    <td className="px-8 py-6 font-medium">EOB Administrator</td>
                    <td className="px-8 py-6 text-on-surface-variant text-sm">Full structural alignment with modern M&E standards and legal basis updates.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Monitoring;
