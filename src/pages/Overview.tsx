import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const OBJECTIVES = [
  {
    num: '01',
    title: 'Promote gender equality at all levels',
    body: 'Measures to achieve gender equality within all units of the University — academic, administrative, and governance.',
  },
  {
    num: '02',
    title: 'Balance male-to-female ratios',
    body: 'Achieve balance among employees and students at all levels within the University through deliberate and monitored measures.',
  },
  {
    num: '03',
    title: 'Empower units to develop gender balance plans',
    body: 'Identify and develop innovative gender balance initiatives at the unit level — faculty, school, and department.',
  },
  {
    num: '04',
    title: 'Provide avenue for redress',
    body: 'Establish a clear process and body (the EOB) when there is non-compliance with the policy.',
  },
];

const CARDS = [
  {
    icon: 'target',
    title: 'Aim',
    text: 'Provide a framework document for achieving a gender-equitable environment that values diverse perspectives and harnesses the potential of both men and women.',
  },
  {
    icon: 'visibility',
    title: 'Scope',
    text: 'Applies to all current and prospective members of the university community — employees, students, interns, visiting faculty, and businesses operating within campus.',
  },
  {
    icon: 'gavel',
    title: 'Legal Basis',
    text: "Grounded in Ghana's 1992 Constitution, the UG Act 2010 (Act 806), CEDAW, the African Charter Protocol on Rights of Women, and the Beijing Platform for Action.",
  },
  {
    icon: 'diversity_3',
    title: 'Special Measures',
    text: 'The University may enact temporary special measures for one gender without constituting a breach of the policy for those who do not benefit.',
  },
];

const TAGS = [
  'Pub. No. 975', 'Vol. 60', 'No. 3',
  'Approved: Aug 11, 2022', 'Released: Mar 14, 2023',
  'Version 1', 'Reviewed every 5 years', 'Approved by Council',
];

const Overview: React.FC = () => {
  return (
    <Layout>
      {/* Publication Metadata Header */}
      <div className="bg-white px-margin-desktop py-4 border-b border-outline-variant">
        <p className="text-on-surface-variant font-label-md tracking-wider flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          University of Ghana Gender Policy, Pub. No. 975 · Vol. 60 No. 3 · 2023
        </p>
      </div>

      {/* Hero Section */}
      <section className="policy-gradient text-on-primary py-stack-lg px-margin-desktop relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5,186c0-104.1,84.4-188.5,188.5-188.5S414.5,81.9,414.5,186S330.1,374.5,226,374.5S37.5,290.1,37.5,186z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          <span className="inline-block text-secondary-fixed font-bold text-[11px] uppercase tracking-widest mb-4">
            University of Ghana · Gender Policy 2023
          </span>
          <h1 className="font-display-lg text-display-lg leading-[1.1] animate-in fade-in slide-in-from-left duration-700 mb-6 max-w-3xl">
            Building a Gender-Equitable University Community
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
            A framework to achieve a gender-equitable environment that engages both males and females in all critical spheres of decision-making — and to mainstream gender in all university policies and procedures.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/report" className="bg-secondary text-white px-10 py-4 font-bold text-[12px] uppercase tracking-widest shadow-xl hover:brightness-110 hover:-translate-y-0.5 smooth-transition">
              File a Complaint
            </Link>
            <Link to="/complaints" className="border-2 border-white/30 text-white px-10 py-4 font-bold text-[12px] uppercase tracking-widest hover:bg-white/10 hover:border-white/50 smooth-transition">
              View Complaints Procedure
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — gold left-border treatment */}
      <section className="py-12 px-margin-desktop bg-white border-b border-outline-variant">
        <div className="max-w-container-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-0 border border-outline-variant divide-x divide-outline-variant">
          {[
            { val: '13',      label: 'EOB members',        sub: 'Equal Opportunities Board' },
            { val: '4 yrs',   label: 'Evaluation cycle',   sub: 'Policy impact assessment' },
            { val: '5 yrs',   label: 'Review cycle',       sub: 'Full policy review' },
            { val: '21 days', label: 'Adjudication window', sub: 'Formal complaint resolution' },
          ].map(({ val, label, sub }) => (
            <div key={label} className="border-l-4 border-l-secondary px-8 py-10 hover:bg-surface-container-low transition-colors">
              <span className="text-primary font-display-lg text-4xl font-bold block mb-1">{val}</span>
              <span className="text-on-surface font-bold text-[12px] uppercase tracking-wider block mb-1">{label}</span>
              <span className="text-on-surface-variant text-xs">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Cards */}
      <section className="py-stack-lg px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-label-md text-[11px] uppercase tracking-widest text-on-surface-variant mb-8">Policy Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CARDS.map(({ icon, title, text }) => (
              <div key={title} className="bg-white border border-outline-variant p-8 hover:border-secondary/40 hover:shadow-sm transition-all group">
                <div className="w-12 h-12 bg-[#EBF2FA] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <h3 className="font-bold text-primary text-[13px] uppercase tracking-wider mb-3">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* 4 Specific Objectives */}
          <div className="border-t border-outline-variant pt-16">
            <div className="mb-10">
              <span className="text-secondary font-bold text-[11px] uppercase tracking-widest">Four Specific Objectives</span>
              <h2 className="font-display-lg text-3xl text-primary mt-2">What This Policy Sets Out to Achieve</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OBJECTIVES.map(({ num, title, body }) => (
                <div key={num} className="flex gap-6 p-8 bg-white border border-outline-variant hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0 font-bold text-on-primary text-[13px] uppercase">
                    {num}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-[14px] mb-2">{title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-outline-variant flex flex-wrap gap-3">
            {TAGS.map((tag) => (
              <span key={tag} className="px-4 py-1.5 border border-secondary/30 text-secondary font-bold text-[10px] uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Right-column reading lane section */}
      <section className="py-stack-lg px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Legal & Special Measures */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-8 border border-outline-variant">
                <h3 className="font-bold text-primary text-[13px] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">gavel</span>
                  Legal Basis
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed italic border-l-4 border-secondary pl-4 py-1">
                  "Grounded in the Constitution of the Republic of Ghana, the University of Ghana Act, 2010 (Act 806), CEDAW, the African Charter Protocol on Rights of Women, and the Beijing Platform for Action."
                </p>
              </div>
              <div className="bg-primary/5 p-8 border border-primary/10">
                <h3 className="font-bold text-primary text-[13px] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">diversity_3</span>
                  Special Measures
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  The University may implement affirmative action measures to address historical imbalances in recruitment, promotion, and student admissions where gender disparities persist — without constituting a breach of the policy for those who do not benefit.
                </p>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-primary p-10 text-on-primary relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <span className="material-symbols-outlined text-secondary text-5xl mb-6 inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_share</span>
              <h3 className="font-headline-md text-2xl mb-3">Need Immediate Help?</h3>
              <p className="text-on-primary/70 mb-8 leading-relaxed text-sm">
                If you have witnessed or experienced an incident that violates this policy, our response team is available through the EOB.
              </p>
              <Link to="/report" className="block w-full bg-secondary text-white py-4 text-center font-bold text-[12px] uppercase tracking-widest hover:brightness-110 transition-all">
                Submit a Complaint
              </Link>
            </div>

            <div className="bg-white border border-outline-variant p-8">
              <h4 className="font-label-md uppercase tracking-[0.2em] text-[11px] text-on-surface-variant/60 mb-6 border-b border-outline-variant pb-2">
                Policy Documents
              </h4>
              <div className="space-y-3">
                {[
                  { icon: 'picture_as_pdf', label: 'Full Policy PDF', meta: '1.2 MB' },
                  { icon: 'article',        label: 'Implementation Guide', meta: '850 KB' },
                  { icon: 'quiz',           label: 'Policy FAQ', meta: 'LINK' },
                ].map(({ icon, label, meta }) => (
                  <a key={label} href="#" className="flex items-center justify-between p-4 hover:bg-surface-container smooth-transition group border border-transparent hover:border-outline-variant">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary bg-primary/5 p-2 group-hover:scale-110 smooth-transition">{icon}</span>
                      <span className="text-sm font-semibold text-on-surface">{label}</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant opacity-60">{meta}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Overview;
