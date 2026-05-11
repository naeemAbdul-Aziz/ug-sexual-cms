import React from 'react';
import Layout from '../components/layout/Layout';

const CARDS = [
  {
    icon: 'event_note',
    phase: 'Phase 01',
    title: 'Annual Workplan & Budget',
    body: 'EOB develops an Annual Workplan and Budget based on clear criteria, subject to approval by the University Council. The workplan and budget shall assist in setting targets for the delivery of outputs with linked inputs, activities and outcomes.',
    footer: 'Frequency: Annual · Approved by Council',
    footerIcon: 'calendar_today',
  },
  {
    icon: 'fact_check',
    phase: 'Phase 02',
    title: 'Yearly Gender Audits',
    body: 'The EOB undertakes yearly gender audits of the University in collaboration with CEGENSA and produces a report with recommendations to be submitted to the Vice-Chancellor for the consideration of the University Council.',
    footer: 'Frequency: Annual · EOB & CEGENSA jointly',
    footerIcon: 'verified',
  },
  {
    icon: 'history_edu',
    phase: 'Phase 03',
    title: 'Policy Evaluation — Every 4 Years',
    body: "The EOB shall evaluate the implementation and impact of the University's gender policies and practices on gender equality every four years.",
    footer: 'Frequency: Every 4 Years',
    footerIcon: 'update',
  },
  {
    icon: 'description',
    phase: 'Phase 04',
    title: 'Gender Equality Annual Report',
    body: "A Gender Equality Annual Report shall be published summarising cases handled and the report of the gender audit. Information on how the University's policies and practices affect gender equality shall be included.",
    footer: 'Published Annually · Public Disclosure Required',
    footerIcon: 'visibility',
  },
];

const Monitoring: React.FC = () => {
  return (
    <Layout bgClass="bg-surface">
      {/* Hero */}
      <section className="bg-[#002652] text-white py-24 px-6 md:px-12 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-[1024px] mx-auto relative z-10">
          <span className="font-label-md bg-secondary text-on-secondary px-4 py-1.5 mb-6 inline-block tracking-wider uppercase text-xs">
            Section 8.0
          </span>
          <h1 className="font-display-lg text-5xl md:text-6xl mb-6 leading-tight">Monitoring &amp; Evaluation</h1>
          <p className="text-white/80 max-w-2xl leading-relaxed">
            How the University tracks and evaluates the implementation of the Gender Policy.
          </p>
        </div>
      </section>

      {/* M&E Framework Cards */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="font-headline-md text-2xl text-primary mb-8 pb-4 border-b border-outline-variant flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            M&amp;E Framework Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CARDS.map(({ icon, phase, title, body, footer, footerIcon }) => (
              <div key={phase} className="bg-white border border-outline-variant p-8 hover:border-secondary/40 hover:shadow-sm transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-primary bg-[#EBF2FA] p-3">{icon}</span>
                  <span className="text-xs font-bold text-outline uppercase tracking-widest">{phase}</span>
                </div>
                <h3 className="font-bold text-primary text-lg mb-3">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{body}</p>
                <div className="pt-5 border-t border-outline-variant flex items-center gap-3 text-secondary">
                  <span className="material-symbols-outlined text-lg">{footerIcon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider">{footer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion of the Gender Policy */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="font-headline-md text-2xl text-primary mb-8 pb-4 border-b border-outline-variant">
            Promotion of the Gender Policy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-outline-variant p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 mb-5">
                <span className="material-symbols-outlined text-primary bg-[#EBF2FA] p-3" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
                <h3 className="font-bold text-primary text-[13px] uppercase tracking-wider">Dissemination</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                The EOB, with support from CEGENSA, shall outline and implement yearly activities to promote the dissemination of the Gender Policy throughout the University. Stakeholders (employees and students) shall be consulted periodically about their experiences of the policy.
              </p>
            </div>
            <div className="bg-white border border-outline-variant p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 mb-5">
                <span className="material-symbols-outlined text-primary bg-[#EBF2FA] p-3" style={{ fontVariationSettings: "'FILL' 1" }}>storage</span>
                <h3 className="font-bold text-primary text-[13px] uppercase tracking-wider">Gathering Information</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                The EOB shall receive comments from the University community and gather information on gender issues and the application of the Gender Policy within the University. Information on how policies and practices affect gender equality shall be included in the Annual Report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Version Control Table */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-[1024px] mx-auto">
          <div className="bg-white border border-outline-variant overflow-hidden">
            <div className="bg-surface-container px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-bold text-primary text-lg">Policy Version Control</h3>
                <p className="text-sm text-on-surface-variant mt-1">Official policy release and amendment history</p>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 bg-primary/10 text-primary">
                Pub. No. 975 · Vol. 60 No. 3
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container-low text-primary border-b-2 border-primary">
                    <th className="px-8 py-4 font-bold text-[11px] uppercase tracking-widest">Version</th>
                    <th className="px-8 py-4 font-bold text-[11px] uppercase tracking-widest">Release Date</th>
                    <th className="px-8 py-4 font-bold text-[11px] uppercase tracking-widest">Effective Date</th>
                    <th className="px-8 py-4 font-bold text-[11px] uppercase tracking-widest">Approved By</th>
                    <th className="px-8 py-4 font-bold text-[11px] uppercase tracking-widest">Amendment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-l-4 border-l-secondary bg-secondary/[0.02]">
                    <td className="px-8 py-5 font-bold text-primary">1</td>
                    <td className="px-8 py-5 text-on-surface-variant text-sm">March 14, 2023</td>
                    <td className="px-8 py-5 text-on-surface-variant text-sm">August 11, 2022</td>
                    <td className="px-8 py-5 font-medium text-primary text-sm">Council</td>
                    <td className="px-8 py-5 text-on-surface-variant text-sm">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-8 py-4 border-t border-outline-variant bg-surface-container-low">
              <p className="text-xs text-on-surface-variant">
                Policy reviewed every <strong className="text-primary">5 years</strong>. Impact evaluated every <strong className="text-primary">4 years</strong>. Next review due approximately 2027.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Monitoring;
