import React from 'react';
import Layout from '../components/layout/Layout';

const Complaints: React.FC = () => {
  return (
    <Layout bgClass="bg-background">
      {/* Hero Section */}
      <section className="px-margin-desktop py-stack-md bg-gradient-to-b from-surface-container-low to-background border-b border-outline-variant/50">
        <div className="policy-reading-lane">
          <h1 className="font-display-lg text-display-lg text-primary mb-4 leading-tight">
            Complaints & Grievance Procedures
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Detailed protocols for reporting, investigation, and adjudication of gender-based misconduct at the University of Ghana.
          </p>
        </div>
      </section>

      {/* Rights Cards Section */}
      <section className="px-margin-desktop mt-stack-lg max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Rights of Complainant */}
          <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all group flex flex-col gap-4">
            <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
              <span className="material-symbols-outlined text-3xl">shield_person</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">Rights of Complainant</h3>
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-3">
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-1">check_circle</span>
                Right to a prompt investigation.
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-1">check_circle</span>
                Right to protection from retaliation.
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-1">check_circle</span>
                Right to be accompanied by a support person.
              </li>
            </ul>
          </div>

          {/* Rights of Respondent */}
          <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all group flex flex-col gap-4">
            <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
              <span className="material-symbols-outlined text-3xl">gavel</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">Rights of Respondent</h3>
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-3">
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-1">check_circle</span>
                Right to be informed of the allegations.
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-1">check_circle</span>
                Right to a fair hearing and due process.
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-1">check_circle</span>
                Right to present evidence and witnesses.
              </li>
            </ul>
          </div>

          {/* Confidentiality */}
          <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all group flex flex-col gap-4">
            <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
              <span className="material-symbols-outlined text-3xl">lock</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">Confidentiality</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Information regarding complaints is restricted to the EOB and necessary panel members to ensure privacy and institutional integrity for all parties involved.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Notice */}
      <section className="px-margin-desktop mt-stack-md max-w-container-max mx-auto">
        <div className="bg-primary shadow-2xl shadow-primary/20 text-on-primary p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between border border-primary-container relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="flex items-center gap-6 relative z-10">
            <div className="bg-secondary/20 p-4 rounded-full">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl">timer</span>
            </div>
            <div>
              <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed/90 mb-1">
                Adjudication Timeline Notice
              </p>
              <h4 className="font-headline-md text-headline-md">Strict 21-Day Resolution Window</h4>
            </div>
          </div>
          <div className="hidden md:block max-w-sm text-right relative z-10">
            <p className="font-body-md text-body-md opacity-80 leading-relaxed italic border-l-2 border-secondary/50 pl-6 ml-6">
              All formal complaints must reach a final decision within 21 working days of the panel's first seating.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Mechanism: Resolution Approaches */}
      <section className="px-margin-desktop mt-stack-lg max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-gutter">Dispute Resolution Mechanisms</h2>
        <div className="space-y-4">
          {/* Informal Approach */}
          <details className="group bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" open>
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-surface-container-low/50 transition-colors list-none">
              <div className="flex items-center gap-4">
                <span className="bg-secondary-container text-on-secondary-container w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-sm">I</span>
                <span className="font-headline-md text-headline-md text-primary">Informal Approach (Mediation)</span>
              </div>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform bg-surface-container-high p-1 rounded-full">expand_more</span>
            </summary>
            <div className="p-8 border-t border-outline-variant/50 bg-gradient-to-b from-white to-surface-container-lowest">
              <div className="policy-reading-lane">
                <p className="font-body-lg text-body-lg mb-6 text-on-surface-variant">
                  The informal process aims for resolution through dialogue, suitable for incidents that may not require disciplinary action but benefit from institutional oversight.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-xl border border-outline-variant shadow-sm">
                    <h5 className="font-label-md text-label-md text-primary mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">handshake</span>
                      Voluntary Participation
                    </h5>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Both parties must agree to mediation. It can be stopped at any point in favor of a formal procedure.
                    </p>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-outline-variant shadow-sm">
                    <h5 className="font-label-md text-label-md text-primary mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">record_voice_over</span>
                      Facilitated Discussion
                    </h5>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Mediated by a neutral officer from the Ethics and Organizational Behavior unit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </details>

          {/* Formal Approach */}
          <details className="group bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-surface-container-low/50 transition-colors list-none">
              <div className="flex items-center gap-4">
                <span className="bg-primary text-on-primary w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-sm">F</span>
                <span className="font-headline-md text-headline-md text-primary">Formal Approach (Adjudication)</span>
              </div>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform bg-surface-container-high p-1 rounded-full">expand_more</span>
            </summary>
            <div className="p-10 border-t border-outline-variant/50 bg-white overflow-x-auto">
              {/* Step-by-Step High Fidelity Timeline */}
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 px-4 min-w-max md:min-w-0 pb-4 md:pb-0">
                {/* Refined Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-[24px] left-[5%] w-[90%] h-[2px] bg-gradient-to-r from-primary via-primary/50 to-outline-variant z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center text-center group/step w-28 procedural-dot">
                  <div className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg border-4 border-white transition-transform group-hover/step:scale-110">1</div>
                  <h5 className="font-label-md text-label-md text-primary font-bold">Lodge complaint</h5>
                  <p className="text-[12px] text-on-surface-variant mt-1 leading-tight">Official report filed with EOB</p>
                </div>
                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center text-center group/step w-28 procedural-dot">
                  <div className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg border-4 border-white transition-transform group-hover/step:scale-110">2</div>
                  <h5 className="font-label-md text-label-md text-primary font-bold">Written statement</h5>
                  <p className="text-[12px] text-on-surface-variant mt-1 leading-tight">Evidence and narrative documented</p>
                </div>
                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center text-center group/step w-28 procedural-dot">
                  <div className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg border-4 border-white transition-transform group-hover/step:scale-110">3</div>
                  <h5 className="font-label-md text-label-md text-primary font-bold">Notify respondent</h5>
                  <p className="text-[12px] text-on-surface-variant mt-1 leading-tight">Due notice served within 48h</p>
                </div>
                {/* Step 4 */}
                <div className="relative z-10 flex flex-col items-center text-center group/step w-28 procedural-dot">
                  <div className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg border-4 border-white transition-transform group-hover/step:scale-110">4</div>
                  <h5 className="font-label-md text-label-md text-primary font-bold">Panel hearing</h5>
                  <p className="text-[12px] text-on-surface-variant mt-1 leading-tight">Evidence review and testimonies</p>
                </div>
                {/* Step 5 */}
                <div className="relative z-10 flex flex-col items-center text-center group/step w-28 procedural-dot">
                  <div className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg border-4 border-white transition-transform group-hover/step:scale-110">5</div>
                  <h5 className="font-label-md text-label-md text-primary font-bold">Decision</h5>
                  <p className="text-[12px] text-on-surface-variant mt-1 leading-tight">Binding verdict and sanctions</p>
                </div>
                {/* Step 6 */}
                <div className="relative z-10 flex flex-col items-center text-center group/step w-28 procedural-dot">
                  <div className="bg-secondary text-on-secondary w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg border-4 border-white transition-transform group-hover/step:scale-110">6</div>
                  <h5 className="font-label-md text-label-md text-primary font-bold">Appeal</h5>
                  <p className="text-[12px] text-on-surface-variant mt-1 leading-tight">Final recourse if contested</p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Visual Anchor: Reporting Atmosphere */}
      <section className="px-margin-desktop mt-stack-lg max-w-container-max mx-auto mb-16">
        <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 group">
          <img
            className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
            alt="Administrative office"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc3jp1RAgbkdDipLGcZx7lPO3EtsS2DS4n2KuWpLTrZuLV8ftqp2H4y9c8z3m6ovbkVEIKkLOZpkCCqCVXVxVY4EOBrVw6BHFc8d7pCyMsTmoCPNjGkGGb-KA74oIVB1Cv1A8KMGKxoUlrNdyIk9gWHApb6-OZzwKhrB53bYW8N127hPhekir8GnQM-cxtHr5KpsormsaaxTkUe4N2cusKVg5amWS_yKVhzEzJtVjHJ9jNv9gOpKc84pq2v-rjZH8Qm7FiNrBuHLA"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent">
            <h2 className="font-headline-lg text-display-lg text-on-primary mb-4 drop-shadow-lg">
              Safe. Secure. Fair.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto leading-relaxed">
              The Ethics and Organizational Behavior unit is committed to maintaining a campus environment free from all forms of gender discrimination.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
              <div className="h-1 w-12 bg-secondary/40 rounded-full"></div>
              <div className="h-1 w-12 bg-secondary/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Complaints;
