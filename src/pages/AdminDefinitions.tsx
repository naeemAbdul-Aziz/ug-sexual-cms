import React, { useState, useMemo } from 'react';
import AdminLayout from '../components/layout/AdminLayout';

// Mirrored exactly from src/pages/Definitions.tsx — single source of truth
const ALL_TERMS = [
  { term: 'Affirmative measures', definition: 'A course of action or measure taken on a temporary basis to remedy a gendered imbalance.' },
  { term: 'Complainant(s)', definition: 'A person or group of persons who alleges they have not been treated in accordance with the Gender Policy and has filed a complaint under this policy.' },
  { term: 'College', definition: 'As defined in the University Statutes — one or more related academic departments, schools, institutes and centres established by Council.' },
  { term: 'Diversity promotion', definition: 'Recognising and making provision for differences between males and females in order to promote gender balance in promotion.' },
  { term: 'Direct discrimination', definition: 'Where a person is treated less favourably than another in a comparable situation.' },
  { term: 'Indirect discrimination', definition: 'When an apparently neutral provision, criterion or practice would disadvantage one gender.' },
  { term: 'De jure equality', definition: 'Equality under the law.' },
  { term: 'De facto equality', definition: 'Equality in practice.' },
  { term: 'Employee', definition: 'Senior members and staff of the University.' },
  { term: 'Equal opportunity', definition: 'The principle of ensuring that both males and females enjoy available benefits and/or resources equally.' },
  { term: 'Equal Opportunities Board (EOB)', definition: 'The Board established by the University to oversee the implementation of the policy and investigate complaints under this policy.' },
  { term: 'Gender', definition: 'The socially constructed roles and relations between females and males.' },
  { term: 'Gender analysis', definition: 'Analysis of roles, responsibilities, constraints, opportunities and needs of females and males in any context.' },
  { term: 'Gender balance', definition: 'A situation where there are approximately equal numbers of males and females present or participating in an event, programme or employment.' },
  { term: 'Gender-based discrimination', definition: 'Differential treatment accorded different persons attributable only or mainly to their gender whereby persons of one gender are subjected to disabilities/restrictions or privileges/advantages to which persons of another gender are not.' },
  { term: 'Gender equality/parity', definition: 'A condition where both males and females are accorded equal social value, rights, responsibilities and access to resources and opportunities.' },
  { term: 'Gender equity', definition: 'The process of being fair to males and females, typically including measures to correct historically-created imbalances, thus resulting in substantive equality.' },
  { term: 'Gender gap', definition: 'The disparity (measured quantitatively) between males and females in their access to resources such as education, health, services or power.' },
  { term: 'Gender mainstreaming', definition: 'Integration of a gender perspective and gender analysis into all stages of designing, implementing and evaluating projects, policies and programmes.' },
  { term: 'Gender-neutral', definition: 'Where policies and actions are not specifically aimed at either males or females and are assumed to affect both sexes equally.' },
  { term: 'Gender sensitive', definition: 'Taking into account the particularities pertaining to the lives of both females and males while aiming to eliminate inequalities.' },
  { term: 'Gender sensitisation', definition: "The process of developing people's awareness, knowledge and skills on gender issues." },
  { term: 'Gender stereotypes', definition: 'Presumptions about the roles, abilities and attributes of males and females which may not reflect reality.' },
  { term: 'Gender-based violence', definition: "A form of force targeted at a person because of the person's gender, manifesting in physical, sexual, psychological harm or suffering, including threats, coercion or deprivation of liberty." },
  { term: 'Manager', definition: 'All senior employees and other supervisors who are in charge of a unit and have people working under them.' },
  { term: 'Mediator', definition: 'A person selected by the EOB with mutual agreement of both parties to facilitate discussion and suggest alternative resolution. A mediator does not investigate or assign blame.' },
  { term: 'Prospective employee', definition: 'A person who has applied to the University for employment.' },
  { term: 'Prospective student', definition: 'A person who has applied to the University for admission to undertake a programme or course.' },
  { term: 'Respondent(s)', definition: 'A person or group of persons whose alleged conduct is the subject of a complaint.' },
  { term: 'Senior member', definition: 'Academic, administrative, professional employees and members of Convocation.' },
  { term: 'Sexual harassment', definition: 'Interaction between individuals of opposite or same gender characterised by unwelcome sexual advances, requests for sexual favours, or other verbal or physical conduct of a sexual nature.' },
  { term: 'Staff', definition: 'Persons, other than Senior Members, in the employment of the University.' },
  { term: 'University community', definition: 'All senior members, senior and junior staff and their families; interns, teaching assistants; post-docs, visiting faculty; students; and others who work in businesses within campus.' },
];

const ACRONYMS = [
  { abbr: 'CEGENSA', full: 'Centre for Gender Studies & Advocacy' },
  { abbr: 'EOB',     full: 'Equal Opportunities Board' },
  { abbr: 'UG',      full: 'University of Ghana' },
  { abbr: 'SRC',     full: "Students' Representative Council" },
  { abbr: 'GRASAG',  full: 'Graduate Students Association of Ghana' },
];

const AdminDefinitions: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'terms' | 'acronyms'>('terms');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return ALL_TERMS;
    return ALL_TERMS.filter(t =>
      t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <AdminLayout pageTitle="Policy Definitions">
      <div className="p-10">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">Definition Registry</h2>
            <p className="text-on-surface-variant text-sm">
              {ALL_TERMS.length} official policy terms · {ACRONYMS.length} acronyms — mirrored from the public portal.
            </p>
          </div>
          <button className="bg-primary text-on-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Add New Term
          </button>
        </div>

        {/* Search + Tabs */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-outline-variant pb-6">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              type="text"
              placeholder="Filter terms or definitions…"
              className="w-full pl-10 pr-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-0 border border-outline-variant">
            {(['terms', 'acronyms'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 font-bold text-[11px] uppercase tracking-widest transition-colors ${activeTab === tab ? 'bg-primary text-on-primary' : 'bg-white text-on-surface-variant hover:bg-surface-container-low'}`}
              >
                {tab === 'terms' ? `Terms (${ALL_TERMS.length})` : `Acronyms (${ACRONYMS.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Terms tab */}
        {activeTab === 'terms' && (
          <div className="border border-outline-variant bg-white overflow-hidden">
            <div className="px-8 py-4 bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                {search ? `${filtered.length} of ${ALL_TERMS.length} terms` : `${ALL_TERMS.length} terms`}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Actions</span>
            </div>
            <div className="divide-y divide-outline-variant">
              {filtered.map((item) => (
                <div key={item.term} className="flex justify-between items-start gap-8 px-8 py-5 hover:bg-surface-container-low transition-colors group">
                  <div className="min-w-[220px]">
                    <p className="font-bold text-primary text-sm leading-snug">{item.term}</p>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed flex-1">{item.definition}</p>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors outline-none">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error/5 transition-colors outline-none">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="py-16 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl block mb-3 opacity-30">search_off</span>
                  <p className="font-bold uppercase tracking-widest text-xs">No results for "{search}"</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Acronyms tab */}
        {activeTab === 'acronyms' && (
          <div className="border border-outline-variant bg-white overflow-hidden">
            <div className="divide-y divide-outline-variant">
              {ACRONYMS.map(({ abbr, full }) => (
                <div key={abbr} className="flex justify-between items-center px-8 py-5 hover:bg-surface-container-low transition-colors group">
                  <div className="flex items-center gap-6">
                    <span className="font-bold text-primary text-lg w-24">{abbr}</span>
                    <span className="text-outline">—</span>
                    <span className="text-on-surface-variant text-sm">{full}</span>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors outline-none">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default AdminDefinitions;
