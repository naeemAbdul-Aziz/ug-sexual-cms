import React from 'react';
import Layout from '../components/layout/Layout';

const Definitions: React.FC = () => {
  return (
    <Layout bgClass="bg-background">
      <main className="min-h-screen">
        {/* Hero / Header Section */}
        <section className="bg-surface-container-low py-stack-lg border-b border-outline-variant">
          <div className="policy-reading-lane px-margin-mobile md:px-0">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm">Glossary & Definitions</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Standardized terminology used within the University of Ghana Gender Policy framework to ensure institutional clarity and legal precision.
            </p>
            {/* Search/Filter Input */}
            <div className="mt-stack-md relative max-w-xl">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all font-body-md text-on-surface shadow-none"
                placeholder="Filter terms (e.g., 'Harassment', 'Board')..."
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Definition Table */}
        <section className="py-stack-lg bg-background">
          <div className="policy-reading-lane px-margin-mobile md:px-0">
            <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface shadow-sm overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container-high border-b border-outline-variant">
                    <th className="text-left py-4 px-6 font-label-md text-primary uppercase tracking-wider w-1/3">Term</th>
                    <th className="text-left py-4 px-6 font-label-md text-primary uppercase tracking-wider">Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-6 px-6 font-headline-md text-primary align-top">Affirmative measures</td>
                    <td className="py-6 px-6 font-body-md text-on-surface-variant leading-relaxed">
                      Strategic interventions and temporary special measures designed to correct historical imbalances and systemic inequalities within the university environment.
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-6 px-6 font-headline-md text-primary align-top">Complainant(s)</td>
                    <td className="py-6 px-6 font-body-md text-on-surface-variant leading-relaxed">
                      Any member of the University community—student, faculty, or staff—who reports an incident of gender-based misconduct or policy violation.
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-6 px-6 font-headline-md text-primary align-top">Equal Opportunities Board (EOB)</td>
                    <td className="py-6 px-6 font-body-md text-on-surface-variant leading-relaxed">
                      The statutory body responsible for monitoring policy implementation, hearing appeals, and ensuring fair treatment across all university demographics.
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-6 px-6 font-headline-md text-primary align-top">Gender equality/parity</td>
                    <td className="py-6 px-6 font-body-md text-on-surface-variant leading-relaxed">
                      The state in which access to rights or opportunities is unaffected by gender; specifically targeting a 50/50 representation in key decision-making bodies.
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-6 px-6 font-headline-md text-primary align-top">Sexual harassment</td>
                    <td className="py-6 px-6 font-body-md text-on-surface-variant leading-relaxed">
                      Unwelcome sexual advances, requests for sexual favors, and other verbal or physical conduct of a sexual nature that interferes with an individual's work or academic performance.
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-6 px-6 font-headline-md text-primary align-top">Mainstreaming</td>
                    <td className="py-6 px-6 font-body-md text-on-surface-variant leading-relaxed">
                      The process of assessing the implications for women and men of any planned action, including legislation, policies, or programs, in all areas and at all levels.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bento-style informative cards for acronyms */}
            <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container p-6 rounded-xl border-t-2 border-secondary">
                <span className="font-label-md text-secondary block mb-2">Institutional Anchor</span>
                <h3 className="font-headline-md text-primary mb-2">CEGENSA</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Centre for Gender Studies and Advocacy: The primary implementation unit for policy research and training.
                </p>
              </div>
              <div className="bg-surface-container-highest p-6 rounded-xl border-t-2 border-secondary">
                <span className="font-label-md text-secondary block mb-2">Statutory Body</span>
                <h3 className="font-headline-md text-primary mb-2">EOB</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Equal Opportunities Board: The oversight mechanism ensuring equity in recruitment and promotion.
                </p>
              </div>
              <div className="bg-surface-container p-6 rounded-xl border-t-2 border-secondary">
                <span className="font-label-md text-secondary block mb-2">Student Representation</span>
                <h3 className="font-headline-md text-primary mb-2">SRC / GRASAG</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Undergraduate and Graduate student bodies ensuring the student voice in gender advocacy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Definitions;
