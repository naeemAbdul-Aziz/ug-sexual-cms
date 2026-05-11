import React from 'react';
import Layout from '../components/layout/Layout';

const Complaints: React.FC = () => {
  return (
    <Layout bgClass="bg-white">
      {/* Hero Section */}
      <section className="px-margin-desktop py-20 bg-white">
        <div className="policy-reading-lane text-center">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] mb-4 block">Institutional Protocol</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Complaints & Grievance Procedures</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Detailed protocols for reporting, investigation, and adjudication of gender-based misconduct at the University of Ghana.
          </p>
        </div>
      </section>

      {/* Rights Cards Section - Typography Driven */}
      <section className="px-margin-desktop pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant pt-16">
          {/* Rights of Complainant */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl" data-icon="shield_person">shield_person</span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-wide text-xl">Rights of Complainant</h3>
            </div>
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-4">
              <li className="flex gap-3 items-start border-l border-outline-variant pl-4 py-1">Right to a prompt investigation within stipulated timeframes.</li>
              <li className="flex gap-3 items-start border-l border-outline-variant pl-4 py-1">Full protection from retaliation or victimization.</li>
              <li className="flex gap-3 items-start border-l border-outline-variant pl-4 py-1">Accompaniment by a support person of choice.</li>
            </ul>
          </div>

          {/* Rights of Respondent */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl" data-icon="gavel">gavel</span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-wide text-xl">Rights of Respondent</h3>
            </div>
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-4">
              <li className="flex gap-3 items-start border-l border-outline-variant pl-4 py-1">Informed in writing of all allegations filed.</li>
              <li className="flex gap-3 items-start border-l border-outline-variant pl-4 py-1">A fair hearing upholding principles of due process.</li>
              <li className="flex gap-3 items-start border-l border-outline-variant pl-4 py-1">Right to present evidence and relevant witnesses.</li>
            </ul>
          </div>

          {/* Confidentiality */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl" data-icon="lock">lock</span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-wide text-xl">Confidentiality</h3>
            </div>
            <div className="border-l-2 border-secondary pl-6">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Information regarding complaints is strictly restricted to the EOB and necessary panel members to ensure privacy and institutional integrity for all parties involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Notice - Sleek Integrated Banner */}
      <section className="border-y border-outline-variant bg-surface-container-low">
        <div className="px-margin-desktop py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-primary text-white">
              <span className="material-symbols-outlined text-2xl" data-icon="timer">timer</span>
            </div>
            <div>
              <span className="text-secondary font-label-md text-[12px] uppercase tracking-widest block mb-1">Adjudication Notice</span>
              <h4 className="font-headline-md text-xl text-primary font-bold">Strict 21-Day Resolution Window</h4>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant md:max-w-md text-right border-l border-outline-variant pl-8 md:block hidden">
            All formal complaints must reach a final decision within 21 working days of the panel's first seating.
          </p>
        </div>
      </section>

      {/* Accordion Mechanism: Resolution Approaches */}
      <section className="px-margin-desktop py-stack-lg bg-white">
        <h2 className="font-headline-lg text-display-lg text-primary mb-12 text-center md:text-left">Dispute Resolution Mechanisms</h2>
        <div className="space-y-px bg-outline-variant border border-outline-variant">
          {/* Informal Approach */}
          <details className="group bg-white" open>
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
              <div className="flex items-center gap-8">
                <span className="text-secondary font-display-lg text-3xl opacity-30 group-open:opacity-100 transition-opacity">01</span>
                <span className="font-headline-md text-headline-md text-primary uppercase tracking-wider">
                  Informal Approach <span className="text-on-surface-variant font-normal normal-case opacity-60 ml-2">(Mediation)</span>
                </span>
              </div>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary" data-icon="expand_more">expand_more</span>
            </summary>
            <div className="px-8 pb-12 pt-4">
              <div className="policy-reading-lane">
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 border-b border-outline-variant pb-8">
                  The informal process aims for resolution through dialogue, suitable for incidents that may not require disciplinary action but benefit from institutional oversight.
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b-2 border-secondary w-fit pb-1">Voluntary Participation</h5>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Both parties must agree to mediation. It can be stopped at any point in favor of a formal procedure.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest border-b-2 border-secondary w-fit pb-1">Facilitated Discussion</h5>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Mediated by a neutral officer from the Ethics and Organizational Behavior unit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </details>

          {/* Formal Approach */}
          <details className="group bg-white">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
              <div className="flex items-center gap-8">
                <span className="text-secondary font-display-lg text-3xl opacity-30 group-open:opacity-100 transition-opacity">02</span>
                <span className="font-headline-md text-headline-md text-primary uppercase tracking-wider">
                  Formal Approach <span className="text-on-surface-variant font-normal normal-case opacity-60 ml-2">(Adjudication)</span>
                </span>
              </div>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary" data-icon="expand_more">expand_more</span>
            </summary>
            <div className="px-8 pb-12 pt-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-0 border border-outline-variant">
                  {/* Step 1 */}
                  <div className="p-6 border-r border-b md:border-b-0 border-outline-variant hover:bg-primary group/step transition-colors cursor-default">
                    <span className="text-sm font-bold text-secondary mb-4 block group-hover/step:text-secondary-fixed">01</span>
                    <h5 className="font-label-md text-[13px] text-primary uppercase tracking-wider mb-2 group-hover/step:text-white">Lodge complaint</h5>
                    <p className="text-[12px] text-on-surface-variant group-hover/step:text-white/70">Official report filed with EOB</p>
                  </div>
                  {/* Step 2 */}
                  <div className="p-6 border-r border-b md:border-b-0 border-outline-variant hover:bg-primary group/step transition-colors cursor-default">
                    <span className="text-sm font-bold text-secondary mb-4 block group-hover/step:text-secondary-fixed">02</span>
                    <h5 className="font-label-md text-[13px] text-primary uppercase tracking-wider mb-2 group-hover/step:text-white">Written statement</h5>
                    <p className="text-[12px] text-on-surface-variant group-hover/step:text-white/70">Evidence and narrative documented</p>
                  </div>
                  {/* Step 3 */}
                  <div className="p-6 border-r border-b md:border-b-0 border-outline-variant hover:bg-primary group/step transition-colors cursor-default">
                    <span className="text-sm font-bold text-secondary mb-4 block group-hover/step:text-secondary-fixed">03</span>
                    <h5 className="font-label-md text-[13px] text-primary uppercase tracking-wider mb-2 group-hover/step:text-white">Notify respondent</h5>
                    <p className="text-[12px] text-on-surface-variant group-hover/step:text-white/70">Due notice served within 48h</p>
                  </div>
                  {/* Step 4 */}
                  <div className="p-6 border-r border-b md:border-b-0 border-outline-variant hover:bg-primary group/step transition-colors cursor-default">
                    <span className="text-sm font-bold text-secondary mb-4 block group-hover/step:text-secondary-fixed">04</span>
                    <h5 className="font-label-md text-[13px] text-primary uppercase tracking-wider mb-2 group-hover/step:text-white">Panel hearing</h5>
                    <p className="text-[12px] text-on-surface-variant group-hover/step:text-white/70">Evidence review and testimonies</p>
                  </div>
                  {/* Step 5 */}
                  <div className="p-6 border-r border-b md:border-b-0 border-outline-variant hover:bg-primary group/step transition-colors cursor-default">
                    <span className="text-sm font-bold text-secondary mb-4 block group-hover/step:text-secondary-fixed">05</span>
                    <h5 className="font-label-md text-[13px] text-primary uppercase tracking-wider mb-2 group-hover/step:text-white">Decision</h5>
                    <p className="text-[12px] text-on-surface-variant group-hover/step:text-white/70">Binding verdict and sanctions</p>
                  </div>
                  {/* Step 6 */}
                  <div className="p-6 border-b md:border-b-0 border-outline-variant hover:bg-secondary group/step transition-colors cursor-default bg-surface-container-low">
                    <span className="text-sm font-bold text-primary mb-4 block group-hover/step:text-primary">06</span>
                    <h5 className="font-label-md text-[13px] text-primary uppercase tracking-wider mb-2 group-hover/step:text-primary">Appeal</h5>
                    <p className="text-[12px] text-on-surface-variant group-hover/step:text-primary/70">Final recourse if contested</p>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Visual Anchor Section */}
      <section className="px-margin-desktop py-stack-lg border-t border-outline-variant bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] bg-primary group overflow-hidden">
            <img
              alt="University of Ghana setting"
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc3jp1RAgbkdDipLGcZx7lPO3EtsS2DS4n2KuWpLTrZuLV8ftqp2H4y9c8z3m6ovbkVEIKkLOZpkCCqCVXVxVY4EOBrVw6BHFc8d7pCyMsTmoCPNjGkGGb-KA74oIVB1Cv1A8KMGKxoUlrNdyIk9gWHApb6-OZzwKhrB53bYW8N127hPhekir8GnQM-cxtHr5KpsormsaaxTkUe4N2cusKVg5amWS_yKVhzEzJtVjHJ9jNv9gOpKc84pq2v-rjZH8Qm7FiNrBuHLA"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-px bg-white/50"></div>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.3em]">Commitment</span>
            <h2 className="font-display-lg text-4xl text-primary leading-tight">Safe. Secure. Fair.</h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              The Ethics and Organizational Behavior unit is committed to maintaining a campus environment free from all forms of gender discrimination. Every voice is heard, and every case is handled with the highest level of professional integrity.
            </p>
            <div className="pt-4">
              <button className="border border-primary text-primary px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                Learn more about EOB
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Complaints;
