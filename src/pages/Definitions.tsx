import React, { useState, useMemo, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { supabase } from '../lib/supabase';

interface Term {
  term: string;
  def: string;
}

interface Acronym {
  abbr: string;
  full: string;
}

const Definitions: React.FC = () => {
  const [query, setQuery] = useState('');
  const [terms, setTerms] = useState<Term[]>([]);
  const [acronyms, setAcronyms] = useState<Acronym[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDefinitions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('definitions')
      .select('*')
      .order('term', { ascending: true });

    if (!error && data) {
      setTerms(data.filter(d => d.type === 'term').map(d => ({ term: d.term, def: d.definition })));
      setAcronyms(data.filter(d => d.type === 'acronym').map(d => ({ abbr: d.term, full: d.definition })));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDefinitions();

    const channel = supabase
      .channel('public-definitions')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'definitions' },
        () => fetchDefinitions()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return terms;
    return terms.filter(({ term, def }) =>
      term.toLowerCase().includes(q) || def.toLowerCase().includes(q)
    );
  }, [query, terms]);

  return (
    <Layout bgClass="bg-white">
      {/* Hero */}
      <section className="bg-surface-container-low py-16 border-b border-outline-variant px-6 md:px-12">
        <div className="page-lane">
          <p className="text-secondary font-bold text-[11px] uppercase tracking-widest mb-3">Section 03</p>
          <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-4">Definitions</h1>
          <p className="text-on-surface-variant text-base max-w-2xl mb-8">
            Key terms used throughout the Gender Policy — {terms.length} defined terms.
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
          <div className="border border-outline-variant bg-white overflow-hidden overflow-x-auto min-h-[300px]">
            {loading ? (
              <div className="py-32 text-center">
                 <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Accessing secure registry...</p>
              </div>
            ) : (
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
            )}
          </div>

          {/* Acronyms */}
          <div className="mt-12">
            <h2 className="font-bold text-primary text-[11px] uppercase tracking-widest mb-6 pb-3 border-b border-outline-variant">
              Acronyms
            </h2>
            <div className="flex flex-wrap gap-4">
              {acronyms.map(({ abbr, full }) => (
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
