import React from 'react';
import Layout from '../components/layout/Layout';

const Overview: React.FC = () => {
  return (
    <Layout>
      {/* Publication Metadata Header */}
      <div className="bg-white px-margin-desktop py-4 border-b border-outline-variant">
        <p className="text-on-surface-variant font-label-md tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          University of Ghana Gender Policy, Pub. No. 975 · Vol. 60 No. 3 · 2023
        </p>
      </div>

      {/* Hero Section */}
      <section className="policy-gradient text-on-primary py-stack-lg px-margin-desktop relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5,186c0-104.1,84.4-188.5,188.5-188.5S414.5,81.9,414.5,186S330.1,374.5,226,374.5S37.5,290.1,37.5,186z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 space-y-8">
            <h1 className="font-display-lg text-display-lg leading-[1.1] animate-in fade-in slide-in-from-left duration-700">
              Building a Gender-Equitable University Community
            </h1>
            <p className="text-body-lg text-white/80 max-w-2xl leading-relaxed">
              The University of Ghana is committed to fostering an inclusive environment that ensures equal opportunities, dignity, and respect for all members of the academic community, regardless of gender identity or expression.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-secondary text-white px-10 py-4 rounded-xl font-label-md font-bold shadow-xl hover:shadow-secondary/20 hover:-translate-y-0.5 smooth-transition">
                Download Full Policy
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-label-md hover:bg-white/10 hover:border-white/50 smooth-transition">
                Quick Summary
              </button>
            </div>
          </div>
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-80 h-[480px] bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8 flex flex-col justify-between shadow-2xl rotate-3 transform-gpu smooth-transition hover:rotate-0">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-secondary-fixed text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    account_balance
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
                    Official Document
                  </span>
                </div>
                <div className="space-y-6">
                  <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                  <div className="h-1.5 w-5/6 bg-white/10 rounded-full"></div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                </div>
                <div className="relative overflow-hidden rounded-xl h-48 group-inner shadow-inner">
                  <img
                    alt="Institutional background"
                    className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay hover:scale-110 smooth-transition"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCpprJDCvmLVH8OFGUhJoOa7Pc1OiRQ6FcewkfmYTg9sF8elrgj_Ajki8Z5UvPG3x2vwKF1i5nHj7WihqOPx-B9n5xyu9sGxFn9AkByxwzGwL2SjuIf3VpuEs1fdTjfJIIOUZrShYCOq0wd3TgkDFHZuZ74C9VwJ0_GdyW4EP-LjttAcUT1eMALHNGsyuTOuCuQsI17OBO4eBUCAcES_lzdPSSbs7877qyFZrI5Y3JpgfaDTCeoOB_56-qG7IB_Ai_AhlMJg-jDRo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Section (Bento Style) */}
      <section className="py-12 px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-outline-variant card-shadow hover-card smooth-transition">
            <span className="text-primary font-display-lg text-4xl block mb-2">13</span>
            <span className="text-on-surface-variant font-label-md uppercase tracking-[0.1em] text-xs">EOB members</span>
            <p className="text-sm text-on-surface-variant/70 mt-4 leading-relaxed">
              Specialized Ethics and Oversight Board governing gender-related affairs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-outline-variant card-shadow hover-card smooth-transition">
            <span className="text-primary font-display-lg text-4xl block mb-2">4 yrs</span>
            <span className="text-on-surface-variant font-label-md uppercase tracking-[0.1em] text-xs">Policy evaluation</span>
            <p className="text-sm text-on-surface-variant/70 mt-4 leading-relaxed">
              Rigorous cycle for assessing the impact of gender equity initiatives.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-outline-variant card-shadow hover-card smooth-transition">
            <span className="text-primary font-display-lg text-4xl block mb-2">5 yrs</span>
            <span className="text-on-surface-variant font-label-md uppercase tracking-[0.1em] text-xs">Policy review</span>
            <p className="text-sm text-on-surface-variant/70 mt-4 leading-relaxed">
              Comprehensive strategic updates to maintain policy relevance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-outline-variant card-shadow hover-card smooth-transition">
            <span className="text-primary font-display-lg text-4xl block mb-2">21 days</span>
            <span className="text-on-surface-variant font-label-md uppercase tracking-[0.1em] text-xs">Adjudication</span>
            <p className="text-sm text-on-surface-variant/70 mt-4 leading-relaxed">
              Maximum timeline for initial resolution of formal complaints.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Policy Overview */}
      <section className="py-stack-lg px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Reading Lane */}
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white p-10 rounded-2xl border border-outline-variant card-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                <h2 className="font-headline-lg text-3xl text-primary mb-6 flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-lg">target</span>
                  Aim of the Policy
                </h2>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  The primary aim of this policy is to create a culture of zero tolerance for gender-based discrimination and harassment. It seeks to institutionalize gender mainstreaming across all University functions, including teaching, research, and administration, ensuring that every individual has a fair path to excellence.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl border border-outline-variant card-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                <h2 className="font-headline-lg text-3xl text-primary mb-6 flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-lg">visibility</span>
                  Scope of Application
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-6">
                  This policy applies to all members of the University community, including but not limited to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                  <li className="flex items-start gap-4 text-body-md text-on-surface group">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 smooth-transition group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Full-time and part-time students at all levels.</span>
                  </li>
                  <li className="flex items-start gap-4 text-body-md text-on-surface group">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 smooth-transition group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Academic, administrative, and technical staff.</span>
                  </li>
                  <li className="flex items-start gap-4 text-body-md text-on-surface group">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 smooth-transition group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Contractors, service providers, and visiting scholars.</span>
                  </li>
                  <li className="flex items-start gap-4 text-body-md text-on-surface group">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 smooth-transition group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>University-affiliated events occurring off-campus.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant hover:border-primary/20 smooth-transition">
                  <h3 className="font-headline-md text-xl text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">gavel</span>
                    Legal Basis
                  </h3>
                  <p className="text-body-md text-on-surface-variant italic border-l-4 border-secondary pl-6 py-1">
                    "Grounded in the Constitution of the Republic of Ghana, the University of Ghana Act, 2010 (Act 806), and international human rights instruments."
                  </p>
                </div>
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 hover:border-primary/20 smooth-transition">
                  <h3 className="font-headline-md text-xl text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">diversity_3</span>
                    Special Measures
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    The University shall implement affirmative action measures to address historical imbalances in recruitment, promotion, and student admissions where gender disparities persist.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Links & Context */}
            <aside className="lg:col-span-4 space-y-10">
              <div className="bg-primary p-10 rounded-3xl text-on-primary shadow-2xl shadow-primary/20 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <span className="material-symbols-outlined text-secondary text-5xl mb-6 inline-block">emergency_share</span>
                <h3 className="font-headline-md text-2xl mb-3">Need Immediate Help?</h3>
                <p className="text-on-primary/70 mb-8 leading-relaxed">
                  If you have witnessed or experienced an incident that violates this policy, our response team is available 24/7.
                </p>
                <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold shadow-lg shadow-black/20 hover:brightness-110 hover:-translate-y-0.5 smooth-transition">
                  Submit a Complaint
                </button>
              </div>

              <div className="bg-white border border-outline-variant rounded-2xl p-8 card-shadow">
                <h4 className="font-label-md uppercase tracking-[0.2em] text-[11px] text-on-surface-variant/60 mb-6 border-b border-outline-variant pb-2">
                  Policy Documents
                </h4>
                <div className="space-y-3">
                  <a className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container smooth-transition group border border-transparent hover:border-outline-variant" href="#">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-lg group-hover:scale-110 smooth-transition">picture_as_pdf</span>
                      <span className="text-body-md font-semibold text-on-surface">Full Policy PDF</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant opacity-60">1.2 MB</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container smooth-transition group border border-transparent hover:border-outline-variant" href="#">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-lg group-hover:scale-110 smooth-transition">article</span>
                      <span className="text-body-md font-semibold text-on-surface">Implementation Guide</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant opacity-60">850 KB</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container smooth-transition group border border-transparent hover:border-outline-variant" href="#">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-lg group-hover:scale-110 smooth-transition">quiz</span>
                      <span className="text-body-md font-semibold text-on-surface">Policy FAQ</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant opacity-60">LINK</span>
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-video group shadow-xl">
                <img
                  alt="Students in library"
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPcxzYnk0rF8pzTN-FU7507DT1KUSs23Ku4b1T3QgDEX-UTZ3PD_trYzA1u844BcTmrR1lhJXauy-6lpaNGv65-hkDigcDFQsMBuWovgnPTVmn6vEPIhVTmbjBYkqsdGn3Jj1tjQwxgY-kaAEVu97Yr8_bNgnVJn9lhajfDyXmmV0eE60AsfBmcHn0YxNCa_jGJ2s3uJ2zYcdQ2MSQf6XCqkpCVzWSsFRkDLrbPDW3ybLDtFH3VEpq4Go0lLi3Rl-3nGJeD38SbHI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-6">
                  <p className="text-white text-xs font-medium tracking-wide opacity-90">
                    Students collaborating at Balme Library, 2023.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Overview;
