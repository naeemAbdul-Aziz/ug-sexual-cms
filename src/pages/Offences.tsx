import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const OFFENCES = [
  "Make sexist remarks to one or more persons in private or in public.",
  "Deny anyone a promotion, grade, or award on grounds of one's gender.",
  "Dismiss, terminate an employee's contract, apply sanctions, deny privileges, opportunities or grades, or threaten same on grounds of one's gender — or on the basis that the person has complained or reported an incident of gender discrimination or passed a fair comment on any matter, including an issue bordering on the application of this policy.",
  "Discriminate against a member of the University on the basis of pregnancy or pregnancy-related conditions.",
  "Deny an employee entitled to leave for care work (childcare/elder care) on grounds of the person's gender (e.g. denying a male entitled to leave for care work).",
  "Introduce rules that consciously or unconsciously have or are likely to have a negative impact on a person or group of persons of one gender.",
  "Subject a person to an act of gender-based violence whether physical (including assault, deprivation of liberty), psychological, emotional, economic or sexual in nature, including coercive or transactional sex, rape or sexual assault.",
  "Subject a member of the University including a subordinate or student to unfair treatment on the basis of the person's gender.",
  "Refuse, delay without just cause, or frustrate attempts to address a complaint or report of gender discrimination.",
];

const Offences: React.FC = () => {
  return (
    <Layout bgClass="bg-surface">
      {/* Hero */}
      <section className="policy-gradient text-on-primary py-20 px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5,186c0-104.1,84.4-188.5,188.5-188.5S414.5,81.9,414.5,186S330.1,374.5,226,374.5S37.5,290.1,37.5,186z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          <span className="inline-block bg-secondary/20 text-secondary-fixed border border-secondary/30 px-4 py-1 text-[11px] font-bold uppercase tracking-widest mb-6">
            Appendix · Section 11
          </span>
          <h1 className="font-display-lg text-5xl md:text-6xl mb-6 leading-tight">Offences</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Acts that constitute an offence under the University of Ghana Gender Policy. Any member of the University found responsible for any of the following may be subject to disciplinary action.
          </p>
        </div>
      </section>

      {/* Offence list */}
      <section className="py-stack-lg px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main list */}
            <div className="lg:col-span-8">
              <h2 className="font-headline-lg text-primary text-2xl mb-10 uppercase tracking-widest">
                Defined Offences
              </h2>
              <div className="space-y-4">
                {OFFENCES.map((text, i) => (
                  <div
                    key={i}
                    className="flex gap-6 p-8 bg-white border border-outline-variant hover:border-error/30 hover:shadow-sm transition-all group"
                  >
                    {/* Red badge */}
                    <div className="shrink-0 w-10 h-10 bg-error flex items-center justify-center font-bold text-white text-[13px]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {/* Text */}
                    <p className="text-on-surface leading-relaxed pt-1.5 group-hover:text-primary transition-colors">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Warning notice box */}
              <div className="mt-10 border-l-4 border-secondary bg-secondary/5 p-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-[28px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                    info
                  </span>
                  <div>
                    <p className="font-bold text-primary text-[13px] uppercase tracking-wider mb-2">Notice</p>
                    <p className="text-on-surface-variant leading-relaxed">
                      A conduct constituting an offence may be determined from time to time. Complainants of any gender-related offences provided in this policy or other gender-related discriminatory act may complain either formally or informally.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* CTA */}
              <div className="bg-primary text-on-primary p-10 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <span className="material-symbols-outlined text-secondary text-5xl mb-6 inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  report
                </span>
                <h3 className="font-headline-md text-2xl mb-3">Experienced an Offence?</h3>
                <p className="text-on-primary/70 mb-8 leading-relaxed text-sm">
                  You have the right to report any of the above through informal mediation or formal adjudication. All complaints are handled in strict confidence.
                </p>
                <Link
                  to="/report"
                  className="block w-full bg-secondary text-white py-4 text-center font-bold text-[12px] uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  File a Complaint
                </Link>
              </div>

              {/* Complaint rights summary */}
              <div className="bg-white border border-outline-variant p-8">
                <h4 className="font-bold text-primary text-[11px] uppercase tracking-widest border-b border-outline-variant pb-4 mb-6">
                  Your Protections
                </h4>
                <div className="space-y-5">
                  {[
                    { icon: 'shield_person', label: 'No retaliation', text: 'Complaints made in good faith carry full protection from victimisation.' },
                    { icon: 'lock',          label: 'Confidentiality', text: 'All parties to a complaint must maintain strict confidentiality.' },
                    { icon: 'balance',       label: 'Due process',     text: 'Respondents are presumed innocent until found responsible.' },
                    { icon: 'timer',         label: '21-day window',   text: 'Formal investigations must conclude within 21 working days.' },
                  ].map(({ icon, label, text }) => (
                    <div key={label} className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">{icon}</span>
                      <div>
                        <p className="font-bold text-primary text-[12px] uppercase tracking-wide">{label}</p>
                        <p className="text-on-surface-variant text-sm mt-0.5 leading-relaxed">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link to Complaints page */}
              <Link
                to="/complaints"
                className="block border border-primary text-primary p-6 text-center font-bold text-[12px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
              >
                View Complaints Procedure →
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Offences;
