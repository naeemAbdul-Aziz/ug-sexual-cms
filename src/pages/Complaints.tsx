import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Complaints: React.FC = () => {
  return (
    <Layout bgClass="bg-white">
      {/* Hero */}
      <section className="px-6 md:px-12 py-16 bg-white border-b border-outline-variant">
        <div className="page-lane">
          <p className="text-secondary font-bold text-[11px] uppercase tracking-widest mb-3">Institutional Protocol</p>
          <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-4">Complaints Mechanism</h1>
          <p className="text-on-surface-variant text-base max-w-2xl">
            How to raise concerns and the grievance procedures available — for all members of the University community.
          </p>
        </div>
      </section>

      {/* Rights Cards */}
      <section className="px-6 md:px-12 py-12 border-b border-outline-variant bg-surface-container-low">
        <div className="page-lane grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: 'shield_person',
              title: 'Rights of Complainant',
              body: 'No reprimand, victimisation, or adverse consequences for complaints made in good faith. Fabricated or malicious reports are subject to disciplinary action.',
            },
            {
              icon: 'gavel',
              title: 'Rights of Respondent',
              body: 'Presumed innocent until found responsible by the EOB after due process or following an admission of culpability.',
            },
            {
              icon: 'lock',
              title: 'Confidentiality',
              body: 'All parties to an investigation, including their representatives, shall maintain confidentiality to protect the integrity of proceedings.',
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="bg-white border border-outline-variant p-7 hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-secondary text-[28px] mb-4 block">{icon}</span>
              <h3 className="font-bold text-primary text-[13px] uppercase tracking-wider mb-3">{title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 21-day notice */}
      <section className="px-6 md:px-12 py-5 border-b border-outline-variant bg-primary/[0.03]">
        <div className="page-lane flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">timer</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Adjudication Timeline</p>
              <p className="font-bold text-primary text-sm">21-Working-Day Resolution Window</p>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed md:border-l md:border-outline-variant md:pl-6">
            The investigation procedure shall be completed as promptly as possible and in most cases within <strong className="text-primary">21 working days</strong> from the date the formal investigation was filed. Notice of hearing shall not be less than <strong className="text-primary">7 working days</strong> from the date of the notice.
          </p>
        </div>
      </section>

      {/* Accordion Mechanisms */}
      <section className="px-6 md:px-12 py-12 bg-white">
        <div className="page-lane">
          <h2 className="font-bold text-primary text-[11px] uppercase tracking-widest mb-6">Dispute Resolution Mechanisms</h2>

          <div className="space-y-px border border-outline-variant divide-y divide-outline-variant">

            {/* i — Informal */}
            <details className="group bg-white" open>
              <summary className="flex items-center justify-between px-7 py-5 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
                <div className="flex items-center gap-6">
                  <span className="text-secondary font-bold text-xl opacity-50 group-open:opacity-100 transition-opacity w-5">i</span>
                  <div>
                    <span className="font-bold text-primary text-sm uppercase tracking-wider">Informal Approach</span>
                    <span className="text-on-surface-variant text-xs ml-2 normal-case font-normal">— Direct resolution or mediation</span>
                  </div>
                </div>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-outline shrink-0">expand_more</span>
              </summary>
              <div className="px-7 pb-8 pt-4 border-t border-outline-variant bg-surface-container-low/30">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-bold text-primary text-[11px] uppercase tracking-widest border-b-2 border-secondary inline-block pb-1 mb-4">Direct Resolution</h5>
                    <ul className="space-y-2">
                      {[
                        'A member may attempt to resolve the matter directly with the alleged offender by pointing out the wrongful or unfair act.',
                        'Complainant may choose to ask a superior or trusted person to intervene on their behalf — on a strictly confidential basis.',
                        'If the matter is not resolved, the EOB shall advise the Complainant to file a formal complaint.',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-[11px] uppercase tracking-widest border-b-2 border-secondary inline-block pb-1 mb-4">Mediation Option</h5>
                    <ul className="space-y-2">
                      {[
                        'Complainant may request through the Administrator that an attempt be made to resolve by way of mediation.',
                        'A mediator shall be selected by mutual agreement of both parties. A mediator does not investigate or assign blame.',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-5 text-sm text-amber-900">
                  <strong>Important:</strong> In cases of sexual harassment or acts of a grievous nature that may result in loss of employment or irreparable harm, the informal mechanism shall not apply — a formal complaint shall be lodged directly.
                </div>
              </div>
            </details>

            {/* ii — Formal individual */}
            <details className="group bg-white">
              <summary className="flex items-center justify-between px-7 py-5 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
                <div className="flex items-center gap-6">
                  <span className="text-secondary font-bold text-xl opacity-50 group-open:opacity-100 transition-opacity w-5">ii</span>
                  <div>
                    <span className="font-bold text-primary text-sm uppercase tracking-wider">Formal Approach 1</span>
                    <span className="text-on-surface-variant text-xs ml-2 normal-case font-normal">— Individual / group complaints</span>
                  </div>
                </div>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-outline shrink-0">expand_more</span>
              </summary>
              <div className="px-7 pb-8 pt-4 border-t border-outline-variant bg-surface-container-low/30">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-px bg-outline-variant border border-outline-variant mb-6">
                  {[
                    { n: '01', title: 'Lodge complaint', body: 'Complainant presents grievance orally or in writing to the Administrator. Oral complaints are documented, read back, and signed.' },
                    { n: '02', title: 'Written statement', body: 'Details, dates, places, names of those connected with the incident; any documentary evidence: video/audio, emails, SMS, WhatsApp, social media.' },
                    { n: '03', title: 'Notify respondent', body: 'EOB notifies the Respondent and requests a written statement within seven days.' },
                    { n: '04', title: 'Panel hearing', body: 'EOB panel hears the matter. Complainant heard first. Respondent may cross-examine. Proceedings recorded in writing.' },
                    { n: '05', title: 'Decision', body: 'After reviewing all evidence, EOB submits recommendations to the Vice-Chancellor per Section 13.' },
                    { n: '06', title: 'Appeal', body: "Dissatisfied party may appeal to the University's Appeals Board (UG Act, 2010 — Act 806)." },
                  ].map(({ n, title, body }) => (
                    <div key={n} className="bg-white p-5 hover:bg-primary hover:text-white transition-colors cursor-default group/step">
                      <span className="font-bold text-secondary text-xs mb-3 block group-hover/step:text-secondary-fixed">{n}</span>
                      <h5 className="font-bold text-primary text-[12px] uppercase tracking-wider mb-2 group-hover/step:text-white">{title}</h5>
                      <p className="text-[11px] text-on-surface-variant leading-relaxed group-hover/step:text-white/70">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </details>

            {/* iii — Formal against University */}
            <details className="group bg-white">
              <summary className="flex items-center justify-between px-7 py-5 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
                <div className="flex items-center gap-6">
                  <span className="text-secondary font-bold text-xl opacity-50 group-open:opacity-100 transition-opacity w-5">iii</span>
                  <div>
                    <span className="font-bold text-primary text-sm uppercase tracking-wider">Formal Approach 2</span>
                    <span className="text-on-surface-variant text-xs ml-2 normal-case font-normal">— Complaints against the University generally</span>
                  </div>
                </div>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-outline shrink-0">expand_more</span>
              </summary>
              <div className="px-7 pb-8 pt-4 border-t border-outline-variant bg-surface-container-low/30">
                <ul className="space-y-3">
                  {[
                    'Any individual who has a complaint of non-compliance against the University in general shall lodge a written complaint with the Administrator.',
                    'If oral, the complaint shall be reduced to writing by the Administrator or recorded and transcribed.',
                    'Administrator reviews and seeks clarification, discusses all options, and explains the processes involved in the formal grievance procedure.',
                    'EOB notifies the Respondent and requests a written statement within seven days.',
                    'EOB conducts its own investigations, taking evidence from relevant officers.',
                    'All proceedings recorded in writing.',
                    'EOB makes recommendations to the Vice-Chancellor for action.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-on-surface-variant text-sm leading-relaxed">
                      <span className="w-5 h-5 border border-secondary text-secondary text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {/* ★ Non-retaliation */}
            <details className="group bg-white">
              <summary className="flex items-center justify-between px-7 py-5 cursor-pointer hover:bg-surface-container-low transition-colors list-none">
                <div className="flex items-center gap-6">
                  <span className="text-secondary font-bold text-xl opacity-50 group-open:opacity-100 transition-opacity w-5">★</span>
                  <div>
                    <span className="font-bold text-primary text-sm uppercase tracking-wider">Non-Retaliation &amp; External Redress</span>
                  </div>
                </div>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-outline shrink-0">expand_more</span>
              </summary>
              <div className="px-7 pb-8 pt-4 border-t border-outline-variant bg-surface-container-low/30 space-y-7">
                <div>
                  <h5 className="font-bold text-primary text-[11px] uppercase tracking-widest border-b-2 border-secondary inline-block pb-1 mb-4">Non-Retaliation</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Retaliation from either party during investigation is strictly monitored by the Board. Acts of retaliation — including threats, intimidation, and actions adversely affecting employment or education prospects — shall be treated as a report of non-compliance with the policy.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-primary text-[11px] uppercase tracking-widest border-b-2 border-secondary inline-block pb-1 mb-4">External Redress</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                    No aspect of this policy shall operate to prejudice the rights of the parties to use other available legal mechanisms, including:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {['The Police', 'The Courts', 'National Labour Commission', 'Commission on Human Rights & Administrative Justice (CHRAJ)'].map((body) => (
                      <div key={body} className="border border-outline-variant p-4 text-center hover:border-primary/30 transition-colors">
                        <p className="text-primary font-bold text-[12px] leading-snug">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-primary/5 border-l-4 border-primary p-5">
                  <h5 className="font-bold text-primary text-[11px] uppercase tracking-widest mb-2">Complaint Against the Vice-Chancellor</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Where the Vice-Chancellor is alleged to be in violation of any provision of this policy, the matter shall be referred to the University Council for appropriate action.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 py-12 border-t border-outline-variant bg-white">
        <div className="page-lane flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-bold text-primary text-2xl mb-2">Ready to file a complaint?</h2>
            <p className="text-on-surface-variant text-sm max-w-lg">
              You may file informally or formally. All complaints are handled with strict confidentiality. The EOB will acknowledge within 7 working days.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link to="/institutions" className="border border-primary text-primary px-7 py-3 font-bold text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
              About the EOB
            </Link>
            <Link to="/report" className="bg-primary text-on-primary px-7 py-3 font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
              File a Report
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Complaints;
