import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Complaints: React.FC = () => {
  return (
    <Layout bgClass="bg-white">
      {/* Hero */}
      <section className="px-margin-desktop py-20 bg-white">
        <div className="policy-reading-lane text-center">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] mb-4 block">Institutional Protocol</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Complaints Mechanism</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            How to raise concerns and the grievance procedures available — for all members of the University community.
          </p>
        </div>
      </section>

      {/* Rights Cards */}
      <section className="px-margin-desktop pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant pt-16">
          {/* Rights of Complainant */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">shield_person</span>
              <h3 className="font-headline-md text-primary uppercase tracking-wide text-xl">Rights of Complainant</h3>
            </div>
            <div className="text-on-surface-variant text-sm leading-relaxed border-l border-outline-variant pl-4 py-1">
              <p>No reprimand, victimisation, or adverse consequences for complaints made in good faith.</p>
              <p className="mt-3">Fabricated or malicious reports are subject to disciplinary action.</p>
            </div>
          </div>

          {/* Rights of Respondent */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">gavel</span>
              <h3 className="font-headline-md text-primary uppercase tracking-wide text-xl">Rights of Respondent</h3>
            </div>
            <div className="text-on-surface-variant text-sm leading-relaxed border-l border-outline-variant pl-4 py-1">
              <p>Presumed innocent until found responsible by the EOB after due process or following an admission of culpability.</p>
            </div>
          </div>

          {/* Confidentiality */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">lock</span>
              <h3 className="font-headline-md text-primary uppercase tracking-wide text-xl">Confidentiality</h3>
            </div>
            <div className="border-l-2 border-secondary pl-6">
              <p className="text-on-surface-variant text-sm leading-relaxed">
                All parties to an investigation, including their representatives, shall maintain confidentiality to protect the integrity of proceedings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 21-day notice banner */}
      <section className="border-y border-outline-variant bg-surface-container-low">
        <div className="px-margin-desktop py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-primary text-white">
              <span className="material-symbols-outlined text-2xl">timer</span>
            </div>
            <div>
              <span className="text-secondary font-label-md text-[11px] uppercase tracking-widest block mb-1">Adjudication Notice</span>
              <h4 className="font-headline-md text-xl text-primary font-bold">Strict 21-Day Resolution Window</h4>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm md:max-w-md text-right border-l border-outline-variant pl-8 md:block hidden">
            Investigations must be completed as promptly as possible, and in most cases within <strong className="text-primary">21 working days</strong>. Notice of hearing must be given no less than <strong className="text-primary">7 working days</strong> in advance.
          </p>
        </div>
      </section>

      {/* Accordion Mechanisms */}
      <section className="px-margin-desktop py-stack-lg bg-white">
        <h2 className="font-headline-lg text-display-lg text-primary mb-12 text-center md:text-left">Dispute Resolution Mechanisms</h2>
        <div className="space-y-px bg-outline-variant border border-outline-variant">

          {/* i — Informal */}
          <details className="group bg-white" open>
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
              <div className="flex items-center gap-8">
                <span className="text-secondary font-display-lg text-3xl opacity-30 group-open:opacity-100 transition-opacity">i</span>
                <span className="font-headline-md text-primary uppercase tracking-wider">
                  Informal Approach <span className="text-on-surface-variant font-normal normal-case opacity-60 ml-2">(Direct resolution or mediation)</span>
                </span>
              </div>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
            </summary>
            <div className="px-8 pb-12 pt-4">
              <div className="policy-reading-lane">
                <p className="text-on-surface-variant mb-8 border-b border-outline-variant pb-8 text-sm leading-relaxed">
                  A member may attempt to resolve the matter directly with the alleged offender by pointing out the wrongful or unfair act — or may choose to ask a superior or trusted person to intervene on a strictly confidential basis.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-3">
                    <h5 className="font-label-md text-primary uppercase tracking-widest border-b-2 border-secondary w-fit pb-1 text-[11px]">Mediation Option</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Complainant may request through the Administrator that an attempt be made to resolve by way of mediation. A mediator shall be selected by mutual agreement of both parties. A mediator does not investigate or assign blame.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-label-md text-primary uppercase tracking-widest border-b-2 border-secondary w-fit pb-1 text-[11px]">Escalation</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      If the matter is not resolved informally, the EOB shall advise the Complainant to file a formal complaint.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <p className="text-amber-900 text-sm font-medium">
                    <strong>Important:</strong> In cases of sexual harassment or acts of a grievous nature that may result in loss of employment or irreparable harm, the informal mechanism shall not apply — a formal complaint shall be lodged directly.
                  </p>
                </div>
              </div>
            </div>
          </details>

          {/* ii — Formal individual */}
          <details className="group bg-white">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
              <div className="flex items-center gap-8">
                <span className="text-secondary font-display-lg text-3xl opacity-30 group-open:opacity-100 transition-opacity">ii</span>
                <span className="font-headline-md text-primary uppercase tracking-wider">
                  Formal Approach 1 <span className="text-on-surface-variant font-normal normal-case opacity-60 ml-2">(Individual / group complaints)</span>
                </span>
              </div>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
            </summary>
            <div className="px-8 pb-12 pt-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-0 border border-outline-variant mb-8">
                  {[
                    { n: '01', title: 'Lodge complaint', body: 'Complainant presents grievance orally or in writing to the Administrator.' },
                    { n: '02', title: 'Written statement', body: 'Details, dates, places, names and any evidence (emails, SMS, WhatsApp, video/audio, social media).' },
                    { n: '03', title: 'Notify respondent', body: 'EOB notifies the Respondent and requests a written statement within seven days.' },
                    { n: '04', title: 'Panel hearing', body: 'EOB panel hears the matter; complainant heard first, respondent may cross-examine.' },
                    { n: '05', title: 'Decision', body: 'EOB submits recommendations to the Vice-Chancellor for appropriate action.' },
                    { n: '06', title: 'Appeal', body: 'Dissatisfied party may appeal to the University\'s Appeals Board (UG Act, 2010).' },
                  ].map(({ n, title, body }, idx) => (
                    <div key={n} className={`p-6 border-r border-b md:border-b-0 border-outline-variant hover:bg-primary group/step transition-colors cursor-default last:border-r-0 ${idx === 5 ? 'bg-surface-container-low' : ''}`}>
                      <span className="text-sm font-bold text-secondary mb-4 block group-hover/step:text-secondary-fixed">{n}</span>
                      <h5 className="font-label-md text-[13px] text-primary uppercase tracking-wider mb-2 group-hover/step:text-white">{title}</h5>
                      <p className="text-[11px] text-on-surface-variant group-hover/step:text-white/70 leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </details>

          {/* iii — Formal against University */}
          <details className="group bg-white">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
              <div className="flex items-center gap-8">
                <span className="text-secondary font-display-lg text-3xl opacity-30 group-open:opacity-100 transition-opacity">iii</span>
                <span className="font-headline-md text-primary uppercase tracking-wider">
                  Formal Approach 2 <span className="text-on-surface-variant font-normal normal-case opacity-60 ml-2">(Complaints against the University generally)</span>
                </span>
              </div>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
            </summary>
            <div className="px-8 pb-12 pt-4">
              <div className="policy-reading-lane">
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Any individual who has a complaint of non-compliance against the University in general shall lodge a written complaint with the Administrator. If oral, the complaint shall be reduced to writing by the Administrator or recorded and transcribed.
                </p>
                <ul className="space-y-4">
                  {[
                    'Administrator reviews and seeks clarification, discusses all options, and explains the processes involved in the formal grievance procedure.',
                    'EOB notifies the Respondent and requests a written statement within seven days.',
                    'EOB conducts its own investigations, taking evidence from relevant officers.',
                    'All proceedings recorded in writing.',
                    'EOB makes recommendations to the Vice-Chancellor for action.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
                      <span className="w-5 h-5 border border-secondary text-secondary text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>

          {/* ★ — Non-retaliation & external redress */}
          <details className="group bg-white">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
              <div className="flex items-center gap-8">
                <span className="text-secondary font-display-lg text-3xl opacity-30 group-open:opacity-100 transition-opacity">★</span>
                <span className="font-headline-md text-primary uppercase tracking-wider">
                  Non-retaliation &amp; External Redress
                </span>
              </div>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
            </summary>
            <div className="px-8 pb-12 pt-4">
              <div className="policy-reading-lane space-y-8">
                <div>
                  <h5 className="font-bold text-primary text-[11px] uppercase tracking-widest border-b-2 border-secondary w-fit pb-1 mb-4">Non-Retaliation</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Retaliation from either party during investigation is strictly monitored by the Board. Acts of retaliation — including threats, intimidation, and actions adversely affecting employment or education prospects — shall be treated as a report of non-compliance with the policy.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-primary text-[11px] uppercase tracking-widest border-b-2 border-secondary w-fit pb-1 mb-4">External Redress</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                    No aspect of this policy shall operate to prejudice the rights of the parties to use other available legal mechanisms, including:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['The Police', 'The Courts', 'National Labour Commission', 'Commission on Human Rights &amp; Administrative Justice (CHRAJ)'].map((body) => (
                      <div key={body} className="border border-outline-variant p-4 text-center">
                        <p className="text-primary font-bold text-[12px]" dangerouslySetInnerHTML={{ __html: body }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-primary/5 border-l-4 border-primary p-6">
                  <h5 className="font-bold text-primary text-[11px] uppercase tracking-widest mb-3">Complaint Against the Vice-Chancellor</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Where the Vice-Chancellor is alleged to be in violation of any provision of this policy, the matter shall be referred to the University Council for appropriate action.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Visual anchor */}
      <section className="px-margin-desktop py-stack-lg border-t border-outline-variant bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] bg-primary group overflow-hidden">
            <img
              alt="University of Ghana setting"
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc3jp1RAgbkdDipLGcZx7lPO3EtsS2DS4n2KuWpLTrZuLV8ftqp2H4y9c8z3m6ovbkVEIKkLOZpkCCqCVXVxVY4EOBrVw6BHFc8d7pCyMsTmoCPNjGkGGb-KA74oIVB1Cv1A8KMGKxoUlrNdyIk9gWHApb6-OZzwKhrB53bYW8N127hPhekir8GnQM-cxtHr5KpsormsaaxTkUe4N2cusKVg5amWS_yKVhzEzJtVjHJ9jNv9gOpKc84pq2v-rjZH8Qm7FiNrBuHLA"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-px bg-white/50" />
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.3em]">Commitment</span>
            <h2 className="font-display-lg text-4xl text-primary leading-tight">Safe. Secure. Fair.</h2>
            <p className="text-on-surface-variant leading-relaxed">
              The Equal Opportunities Board is committed to maintaining a campus environment free from all forms of gender discrimination. Every voice is heard, and every case is handled with the highest level of professional integrity.
            </p>
            <div className="pt-4 flex gap-4">
              <Link to="/institutions" className="border border-primary text-primary px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-white transition-all text-[12px]">
                Learn more about EOB
              </Link>
              <Link to="/report" className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all text-[12px]">
                File a Complaint
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Complaints;
