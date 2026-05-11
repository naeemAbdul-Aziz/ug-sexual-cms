import React, { useState, useMemo } from 'react';
import Layout from '../components/layout/Layout';

const TERMS = [
  { term: 'Affirmative measures', def: 'A course of action or measure taken on a temporary basis to remedy a gendered imbalance.' },
  { term: 'Complainant(s)', def: 'A person or group of persons who alleges they have not been treated in accordance with the Gender Policy and has filed a complaint under this policy.' },
  { term: 'College', def: 'As defined in the University Statutes — one or more related academic departments, schools, institutes and centres established by Council.' },
  { term: 'Diversity promotion', def: 'Recognising and making provision for differences between males and females in order to promote gender balance in promotion.' },
  { term: 'Direct discrimination', def: 'Where a person is treated less favourably than another in a comparable situation.' },
  { term: 'Indirect discrimination', def: 'When an apparently neutral provision, criterion or practice would disadvantage one gender.' },
  { term: 'De jure equality', def: 'Equality under the law.' },
  { term: 'De facto equality', def: 'Equality in practice.' },
  { term: 'Employee', def: 'Senior members and staff of the University.' },
  { term: 'Equal opportunity', def: 'The principle of ensuring that both males and females enjoy available benefits and/or resources equally.' },
  { term: 'Equal Opportunities Board (EOB)', def: 'The Board established by the University to oversee the implementation of the policy and investigate complaints under this policy.' },
  { term: 'Gender', def: 'The socially constructed roles and relations between females and males.' },
  { term: 'Gender analysis', def: 'Analysis of roles, responsibilities, constraints, opportunities and needs of females and males in any context.' },
  { term: 'Gender balance', def: 'A situation where there are approximately equal numbers of males and females present or participating in an event, programme or employment.' },
  { term: 'Gender-based discrimination', def: 'Differential treatment accorded different persons attributable only or mainly to their gender whereby persons of one gender are subjected to disabilities/restrictions or privileges/advantages to which persons of another gender are not.' },
  { term: 'Gender equality/parity', def: 'A condition where both males and females are accorded equal social value, rights, responsibilities and access to resources and opportunities.' },
  { term: 'Gender equity', def: 'The process of being fair to males and females, typically including measures to correct historically-created imbalances, thus resulting in substantive equality.' },
  { term: 'Gender gap', def: 'The disparity (measured quantitatively) between males and females in their access to resources such as education, health, services or power.' },
  { term: 'Gender mainstreaming', def: 'Integration of a gender perspective and gender analysis into all stages of designing, implementing and evaluating projects, policies and programmes.' },
  { term: 'Gender-neutral', def: 'Where policies and actions are not specifically aimed at either males or females and are assumed to affect both sexes equally.' },
  { term: 'Gender sensitive', def: 'Taking into account the particularities pertaining to the lives of both females and males while aiming to eliminate inequalities.' },
  { term: 'Gender sensitisation', def: "The process of developing people's awareness, knowledge and skills on gender issues." },
  { term: 'Gender stereotypes', def: 'Presumptions about the roles, abilities and attributes of males and females which may not reflect reality.' },
  { term: 'Gender-based violence', def: "A form of force targeted at a person because of the person's gender, manifesting in physical, sexual, psychological harm or suffering, including threats, coercion or deprivation of liberty." },
  { term: 'Manager', def: 'All senior employees and other supervisors who are in charge of a unit and have people working under them.' },
  { term: 'Mediator', def: 'A person selected by the EOB with mutual agreement of both parties to facilitate discussion and suggest alternative resolution. A mediator does not investigate or assign blame.' },
  { term: 'Prospective employee', def: 'A person who has applied to the University for employment.' },
  { term: 'Prospective student', def: 'A person who has applied to the University for admission to undertake a programme or course.' },
  { term: 'Respondent(s)', def: 'A person or group of persons whose alleged conduct is the subject of a complaint.' },
  { term: 'Senior member', def: 'Academic, administrative, professional employees and members of Convocation.' },
  { term: 'Sexual harassment', def: 'Interaction between individuals of opposite or same gender characterised by unwelcome sexual advances, requests for sexual favours, or other verbal or physical conduct of a sexual nature.' },
  { term: 'Staff', def: 'Persons, other than Senior Members, in the employment of the University.' },
  { term: 'University community', def: 'All senior members, senior and junior staff and their families; interns, teaching assistants; post-docs, visiting faculty; students; and others who work in businesses within campus.' },
];

const ACRONYMS = [
  { abbr: 'CEGENSA', full: 'Centre for Gender Studies & Advocacy' },
  { abbr: 'EOB',     full: 'Equal Opportunities Board' },
  { abbr: 'UG',      full: 'University of Ghana' },
  { abbr: 'SRC',     full: "Students' Representative Council" },
  { abbr: 'GRASAG',  full: 'Graduate Students Association of Ghana' },
];

const Definitions: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return TERMS;
    return TERMS.filter(({ term, def }) =>
      term.toLowerCase().includes(q) || def.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Layout bgClass="bg-white">
      {/* Hero */}
      <section className="bg-surface-container-low py-16 border-b border-outline-variant px-6 md:px-12">
        <div className="page-lane">
          <p className="text-secondary font-bold text-[11px] uppercase tracking-widest mb-3">Section 03</p>
          <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-4">Definitions</h1>
          <p className="text-on-surface-variant text-base max-w-2xl mb-8">
            Key terms used throughout the Gender Policy — {TERMS.length} defined terms.
          </p>
          {/* Live search */}
          <div className="relative max-w-lg">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant focus:border-primary focus:border-2 focus:ring-0 outline-none transition-all text-sm text-on-surface"
              placeholder="Filter terms — e.g. 'gender', 'EOB', 'harassment'…"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
          {query && (
            <p className="text-on-surface-variant text-xs mt-2">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </section>

      {/* Table */}
      <section className="py-12 px-6 md:px-12">
        <div className="page-lane">
          <div className="border border-outline-variant bg-white overflow-hidden overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-primary bg-surface-container-low">
                  <th className="text-left py-4 px-8 font-bold text-[11px] uppercase tracking-widest text-primary w-[30%]">Term</th>
                  <th className="text-left py-4 px-8 font-bold text-[11px] uppercase tracking-widest text-primary">Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {filtered.length > 0 ? filtered.map(({ term, def }) => (
                  <tr key={term} className="hover:bg-surface-container-low transition-colors">
                    <td className="py-5 px-8 font-bold text-primary align-top text-sm leading-snug">{term}</td>
                    <td className="py-5 px-8 text-on-surface-variant align-top text-sm leading-relaxed">{def}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={2} className="py-16 px-8 text-center text-on-surface-variant text-sm">
                      No terms match &ldquo;{query}&rdquo;. Try a different search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Acronyms */}
          <div className="mt-12">
            <h2 className="font-bold text-primary text-[11px] uppercase tracking-widest mb-6 pb-3 border-b border-outline-variant">
              Acronyms
            </h2>
            <div className="flex flex-wrap gap-4">
              {ACRONYMS.map(({ abbr, full }) => (
                <div key={abbr} className="flex items-center gap-3 border border-outline-variant px-6 py-3 bg-white hover:border-primary/40 transition-colors">
                  <span className="font-bold text-primary text-[13px]">{abbr}</span>
                  <span className="text-outline">—</span>
                  <span className="text-on-surface-variant text-sm">{full}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Definitions;
