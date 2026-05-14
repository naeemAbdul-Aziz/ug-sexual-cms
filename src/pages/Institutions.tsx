import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface AccordionProps {
  id: string;
  num: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ num, title, open, onToggle, children }) => (
  <div className={`border bg-white group transition-colors overflow-hidden ${open ? 'border-primary shadow-sm' : 'border-outline-variant hover:border-primary'}`}>
    <button onClick={onToggle} className="w-full flex items-center justify-between p-8 text-left outline-none">
      <div className="flex items-center gap-6">
        <span className="text-xs font-bold text-secondary tracking-widest shrink-0">{num}</span>
        <span className="font-headline-md text-xl text-primary">{title}</span>
      </div>
      <span className={`material-symbols-outlined transition-colors shrink-0 ${open ? 'text-secondary' : 'text-outline group-hover:text-primary'}`}>
        {open ? 'remove' : 'add'}
      </span>
    </button>
    {open && (
      <div className="px-8 pb-10 pt-2 border-t border-outline-variant">
        {children}
      </div>
    )}
  </div>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3 mt-4">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
        {item}
      </li>
    ))}
  </ul>
);

const Institutions: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('6.6');
  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  const eobMembers = [
    { num: '01', role: 'Chair', note: 'Elected by Academic Board on VC\'s recommendation · 3-year term (renewable 2 yrs once)' },
    { num: '02', role: 'Registrar or Representative', note: '2-year term (renewable once)' },
    { num: '03', role: 'Legal Counsel or Representative', note: '2-year term (renewable once)' },
    { num: '04', role: 'CEGENSA Representative', note: '2-year term (renewable once)' },
    { num: '05', role: 'School of Law Representative', note: '2-year term (renewable once)' },
    { num: '06', role: 'Convocation Representative (Teaching)', note: '2-year term (renewable once)' },
    { num: '07', role: 'Convocation Representative (Non-Teaching)', note: '2-year term (renewable once)' },
    { num: '08', role: 'SRC Student Representative', note: '1-year term' },
    { num: '09', role: 'GRASAG Student Representative', note: '1-year term' },
    { num: '10', role: 'Senior Staff Representative (FUSSAG or SSA-UoG)', note: '2-year term (renewable once)' },
    { num: '11', role: 'Junior Staff Representative (TEWU)', note: '2-year term (renewable once)' },
    { num: '12', role: 'External Expert in Equal Opportunity Matters (1)', note: '2-year term (renewable once)' },
    { num: '13', role: 'External Expert in Equal Opportunity Matters (2)', note: '2-year term (renewable once)' },
    { num: 'Ex', role: 'EOB Administrator', note: 'Ex-officio · Non-voting' },
  ];

  return (
    <Layout bgClass="bg-white">
      {/* Hero */}
      <section className="bg-[#002652] text-white py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="page-lane relative z-10">
          <p className="text-secondary font-bold text-[11px] uppercase tracking-widest mb-3">Section 06</p>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">Implementation Institutions</h1>
          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">
            Roles and responsibilities of each compliance body within the University governance framework.
          </p>
        </div>
      </section>

      {/* Org Chart */}
      <section className="px-6 md:px-12 py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="page-lane">
          <h2 className="text-center font-label-md text-xs uppercase tracking-widest text-outline mb-12">Governance Hierarchy</h2>
          <div className="flex flex-col items-center">
            {/* Level 1 */}
            <div className="bg-primary text-on-primary px-6 py-4 w-64 text-center border-b-2 border-secondary">
              <p className="font-bold tracking-wide">University Council</p>
              <p className="text-[10px] uppercase text-on-primary/60 mt-1">Overall Responsibility</p>
            </div>
            <div className="w-px h-12 bg-outline-variant" />

            {/* Level 2 */}
            <div className="bg-primary text-on-primary px-6 py-4 w-64 text-center border-b-2 border-secondary">
              <p className="font-bold tracking-wide">Vice-Chancellor</p>
              <p className="text-[10px] uppercase text-on-primary/60 mt-1">Leads Compliance</p>
            </div>
            <div className="w-px h-12 bg-outline-variant" />

            {/* Horizontal connector */}
            <div className="w-full relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-outline-variant" />
              <div className="flex justify-between w-2/3 mx-auto">
                <div className="w-px h-12 bg-outline-variant" />
                <div className="w-px h-12 bg-outline-variant" />
                <div className="w-px h-12 bg-outline-variant" />
              </div>
            </div>

            {/* Level 3 */}
            <div className="flex flex-col md:flex-row justify-between gap-6 w-full max-w-4xl">
              <div className="flex-1 bg-white border border-outline-variant p-5 text-center">
                <p className="text-sm font-semibold text-primary">Academic Board</p>
                <p className="text-[9px] uppercase text-outline mt-1 tracking-widest">Elects EOB Chair</p>
              </div>
              <div className="flex-1 bg-white border-2 border-secondary p-5 text-center relative shadow-sm">
                <p className="text-sm font-bold text-primary">EOB [13 Members]</p>
                <p className="text-[9px] uppercase text-secondary font-bold mt-1 tracking-widest">Main Compliance Body</p>
              </div>
              <div className="flex-1 bg-white border border-outline-variant p-5 text-center">
                <p className="text-sm font-semibold text-primary">CEGENSA</p>
                <p className="text-[9px] uppercase text-outline mt-1 tracking-widest">Resource &amp; Support</p>
              </div>
            </div>

            {/* EOB sub-bodies */}
            <div className="w-px h-12 bg-outline-variant" />
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-2xl">
              <div className="flex-1 bg-[#EBF2FA] border border-outline-variant p-4 text-center">
                <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Anti-Sexual Harassment Cmte</p>
              </div>
              <div className="flex-1 bg-[#EBF2FA] border border-outline-variant p-4 text-center">
                <p className="text-[11px] font-bold text-primary uppercase tracking-wider">EOB Secretariat (at CEGENSA)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="py-24 px-6 md:px-12">
        <div className="page-lane">
          <div className="flex items-center justify-between mb-8 border-b border-outline-variant pb-4">
            <h2 className="font-headline-md text-2xl text-primary">Roles &amp; Responsibilities</h2>
            <span className="text-xs text-outline uppercase tracking-widest font-bold">Detailed Mandates</span>
          </div>

          <div className="space-y-4">
            <Accordion id="6.1" num="6.1" title="University Council" open={openSection === '6.1'} onToggle={() => toggle('6.1')}>
              <BulletList items={[
                'Overall responsibility for ensuring the University complies with the Gender Policy.',
                'Ensures Gender Policy principles are integrated into all key documents: Statutes, Strategic Plan, Student Handbooks, Conditions of Service, Code of Conduct, and the Sexual Harassment & Misconduct Policy.',
                'Makes the Gender Policy available to students and employees at orientation and on the University website.',
                'Ensures creation and maintenance of an environment with equal opportunity for all.',
                'Achieve balanced representation in governance structures at all decision-making levels.',
                'Ensures equal treatment in staff recruitment and employment procedures.',
                'Provides child-care facilities and strengthens reproductive health facilities and counselling.',
              ]} />
            </Accordion>

            <Accordion id="6.2" num="6.2" title="Vice-Chancellor" open={openSection === '6.2'} onToggle={() => toggle('6.2')}>
              <BulletList items={[
                'Takes the lead role in ensuring compliance with the Gender Policy.',
                'Constitutes the Equal Opportunities Board (EOB) as per the policy.',
                'Nominates external members of the EOB.',
                'Receives reports of findings and recommendations of the EOB and follows up on recommended actions (per Section 13).',
              ]} />
            </Accordion>

            <Accordion id="6.3" num="6.3" title="Academic Board" open={openSection === '6.3'} onToggle={() => toggle('6.3')}>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
                The Academic Board is responsible for electing the Chair of the EOB upon the recommendation of the Vice-Chancellor.
              </p>
            </Accordion>

            <Accordion id="6.4" num="6.4" title="The Registrar" open={openSection === '6.4'} onToggle={() => toggle('6.4')}>
              <BulletList items={[
                'Designates a staff member as the Administrator of the EOB.',
                'Ensures the Gender Policy is available to all employees.',
              ]} />
            </Accordion>

            <Accordion id="6.5" num="6.5" title="CEGENSA" open={openSection === '6.5'} onToggle={() => toggle('6.5')}>
              <BulletList items={[
                'Hosts the EOB Secretariat.',
                'Assists the EOB in its monitoring and evaluation activities.',
                'Collaborates with the EOB to outline and implement yearly gender sensitisation activities.',
              ]} />
            </Accordion>

            <Accordion id="6.6" num="6.6" title="Equal Opportunities Board (EOB)" open={openSection === '6.6'} onToggle={() => toggle('6.6')}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
                <div className="lg:col-span-5">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-secondary mb-4">Core Functions</h3>
                  <BulletList items={[
                    'Conduct periodic gender audits and make recommendations to the VC.',
                    'Prepare guidelines and recommend actions for policy implementation.',
                    'Hear individual/group complaints about non-compliance.',
                    'Organise gender sensitivity training and orientation.',
                    'Monitor and evaluate all gender policy activities.',
                  ]} />
                  <div className="mt-8 pt-8 border-t border-outline-variant grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-bold text-primary text-xl">13</p>
                      <p className="text-[10px] uppercase tracking-wider text-outline">Members</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary text-xl">≥ 1×</p>
                      <p className="text-[10px] uppercase tracking-wider text-outline">per Sem</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary text-xl">2 yrs</p>
                      <p className="text-[10px] uppercase tracking-wider text-outline">Term</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-secondary mb-4">Board Composition</h3>
                  <div className="space-y-1">
                    {eobMembers.map(({ num, role, note }) => (
                      <div key={num} className="flex items-start gap-4 py-2.5 border-b border-outline-variant/30 last:border-0">
                        <span className={`text-[10px] font-bold w-6 shrink-0 mt-1 ${num === 'Ex' ? 'text-error' : 'text-secondary'}`}>{num}</span>
                        <div>
                          <p className="text-sm font-semibold text-primary leading-tight">{role}</p>
                          <p className="text-[11px] text-on-surface-variant mt-0.5">{note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-on-primary py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl" />
        <div className="page-lane relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="font-display-lg text-3xl mb-4">Confidential Consultations</h2>
            <p className="text-on-primary/70 text-sm max-w-md leading-relaxed">
              The EOB Secretariat is available for private inquiries regarding policy compliance or reporting procedures. All consultations are strictly confidential.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/report" className="bg-secondary text-white px-10 py-4 font-bold uppercase tracking-widest text-[12px] hover:brightness-110 transition-all text-center">
              File a Complaint
            </Link>
            <a href="#" className="border border-on-primary/30 text-on-primary px-10 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-white/10 transition-all text-center">
              Download Flowchart
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Institutions;
