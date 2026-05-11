import React, { useState } from 'react';
import AdminLayout from '../components/layout/AdminLayout';

const INITIAL_TERMS = [
  { term: 'Adjudication Panel', definition: 'A three-member panel appointed to hear and determine a formal complaint of sexual harassment or gender-based misconduct.' },
  { term: 'Affirmative Action', definition: 'Temporary special measures aimed at accelerating de facto equality between men and women.' },
  { term: 'Complainant', definition: 'An individual who has witnessed or experienced an incident that violates this policy and brings it to the attention of the EOB.' },
  { term: 'Discrimination', definition: 'Any distinction, exclusion or restriction made on the basis of gender which has the effect of nullifying the recognition or enjoyment of human rights.' },
  { term: 'EOB', definition: 'The Equal Opportunities Board, the main body responsible for the implementation and monitoring of the Gender Policy.' },
  { term: 'Gender Audit', definition: 'A periodic assessment of the University\'s performance in achieving gender equality goals.' },
  { term: 'Gender Mainstreaming', definition: 'The process of assessing the implications for women and men of any planned action, including legislation, policies or programmes.' },
  { term: 'Mediation', definition: 'An informal process where a neutral third party assists the parties to a dispute to reach a voluntary agreement.' },
  { term: 'Quid Pro Quo', definition: 'Sexual harassment that occurs when a person in a position of authority demands sexual favours in exchange for a benefit.' },
  { term: 'Respondent', definition: 'An individual against whom a complaint of sexual harassment or gender-based misconduct has been made.' },
  { term: 'Sexual Harassment', definition: 'Unwelcome conduct of a sexual nature that creates a hostile, intimidating or offensive environment.' },
];

const AdminDefinitions: React.FC = () => {
  const [terms, setTerms] = useState(INITIAL_TERMS);
  const [search, setSearch] = useState('');

  const filtered = terms.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) || 
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout pageTitle="Policy Definitions">
      <div className="p-10">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="font-display-lg text-4xl text-primary mb-1 uppercase tracking-tight">Definition Registry</h2>
            <p className="text-on-surface-variant text-sm">Manage the official terminology and acronyms used across the Gender Policy Portal.</p>
          </div>
          <button className="bg-primary text-on-primary px-6 py-3 font-bold text-xs tracking-widest flex items-center gap-3 hover:brightness-125 transition-all uppercase outline-none border-none shadow-none">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Add New Term
          </button>
        </div>

        {/* Search & Stats */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-outline-variant pb-8">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              type="text"
              placeholder="Search definitions..."
              className="w-full pl-10 pr-4 py-3 border border-outline-variant bg-white focus:border-primary outline-none text-sm transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest">
            Total Terms: <span className="text-primary">{terms.length}</span>
          </div>
        </div>

        {/* Grid of Definitions */}
        <div className="grid grid-cols-1 gap-4">
          {filtered.map((item) => (
            <div key={item.term} className="bg-white border border-outline-variant p-6 hover:border-primary transition-all group flex justify-between items-start gap-8">
              <div className="max-w-3xl">
                <h3 className="font-bold text-primary text-lg mb-2">{item.term}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.definition}</p>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container smooth-transition outline-none">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 smooth-transition outline-none">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed border-outline-variant text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl mb-4">search_off</span>
              <p className="font-bold uppercase tracking-widest text-xs">No definitions found for "{search}"</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDefinitions;
