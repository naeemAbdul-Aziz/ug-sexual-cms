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

const Accordion: React.FC<AccordionProps> = ({ id, num, title, open, onToggle, children }) => (
  <div className={`border bg-white group transition-colors overflow-hidden ${open ? 'border-primary' : 'border-outline-variant hover:border-primary'}`}>
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
  const [openSection, setOpenSection] = useState<string | null>('06.6');
  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  // Spec-accurate EOB members
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
    <Layout bgClass="bg-surface-bright">
      <main className="pb-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="policy-reading-lane">
          <header className="mb-16 text-center pt-10">
            <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Section 06</p>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">Implementation Institutions</h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Roles and responsibilities of each compliance body established under the University of Ghana Gender Policy.
            </p>
          </header>

          {/* Governance Hierarchy */}
          <section className="mb-20">
            <h2 className="text-center font-label-md text-xs uppercase tracking-widest text-outline mb-12">Governance Hierarchy</h2>
            <div className="flex flex-col items-center">
              {/* Level 1 */}
              <div className="bg-primary text-on-primary px-6 py-4 w-64 text-center border-b-2 border-secondary">
                <p className="font-bold tracking-wide">University Council</p>
                <p className="text-[10px] uppercase text-on-primary/60 mt-1">Overall Responsibility</p>
              </div>
              <div className="hierarchy-line-v" />

              {/* Level 2 */}
              <div className="bg-primary text-on-primary px-6 py-4 w-64 text-center border-b-2 border-secondary">
                <p className="font-bold tracking-wide">Vice-Chancellor</p>
                <p className="text-[10px] uppercase text-on-primary/60 mt-1">Leads Compliance</p>
              </div>
              <div className="hierarchy-line-v" />

              {/* Horizontal connector */}
              <div className="w-full relative mb-0">
                <div className="hierarchy-line-h" />
                <div className="flex justify-between w-2/3 mx-auto">
                  <div className="hierarchy-line-v" />
                  <div className="hierarchy-line-v" />
                  <div className="hierarchy-line-v" />
                </div>
              </div>

              {/* Level 3 */}
              <div className="flex flex-col md:flex-row justify-between gap-6 w-full mb-2">
                <div className="flex-1 bg-[#EBF2FA] border border-outline-variant p-5 text-center">
                  <p className="text-sm font-semibold text-primary">Academic Board</p>
                  <p className="text-[9px] uppercase text-outline mt-1">Elects EOB Chair</p>
                </div>
                <div className="flex-1 bg-[#EBF2FA] border-2 border-secondary p-5 text-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
                  <p className="text-sm font-bold text-primary">EOB [13 Members]</p>
                  <p className="text-[9px] uppercase text-secondary font-bold mt-1">Main Compliance Body</p>
                </div>
                <div className="flex-1 bg-[#EBF2FA] border border-outline-variant p-5 text-center">
                  <p className="text-sm font-semibold text-primary">CEGENSA</p>
                  <p className="text-[9px] uppercase text-outline mt-1">Resource & Support</p>
                </div>
              </div>

              {/* EOB sub-bodies */}
              <div className="flex justify-center w-full mt-0">
                <div className="hierarchy-line-v" />
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-6 w-2/3">
                <div className="flex-1 bg-white border border-outline-variant p-4 text-center">
                  <p className="text-xs font-semibold text-primary">Anti-Sexual Harassment Cmte</p>
                </div>
                <div className="flex-1 bg-white border border-outline-variant p-4 text-center">
                  <p className="text-xs font-semibold text-primary">EOB Secretariat (at CEGENSA)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Accordions */}
          <section className="mb-20 space-y-4">
            <div className="flex items-center justify-between mb-8 border-b border-outline-variant pb-4">
              <h2 className="font-headline-md text-primary">Roles and Responsibilities</h2>
              <span className="text-xs text-outline uppercase tracking-widest font-label-md">Detailed Mandates</span>
            </div>

            {/* 6.1 University Council */}
            <Accordion id="06.1" num="6.1" title="University Council" open={openSection === '06.1'} onToggle={() => toggle('06.1')}>
              <BulletList items={[
                'Overall responsibility for ensuring the University complies with the Gender Policy.',
                'Ensures Gender Policy principles are integrated into all key documents: Statutes, Strategic Plan, Student Handbooks, Conditions of Service, Code of Conduct, and the Sexual Harassment & Misconduct Policy.',
                'Makes the Gender Policy available to students and employees at orientation and on the University website.',
                'Ensures creation and maintenance of an environment with equal opportunity for all.',
                'Takes steps to achieve balanced representation in governance structures at all decision-making levels.',
                'Ensures equal treatment in staff recruitment and employment procedures.',
                'Provides child-care facilities and strengthens reproductive health facilities and counselling.',
              ]} />
            </Accordion>

            {/* 6.2 Vice-Chancellor */}
            <Accordion id="06.2" num="6.2" title="Vice-Chancellor" open={openSection === '06.2'} onToggle={() => toggle('06.2')}>
              <BulletList items={[
                'Takes the lead role in ensuring compliance with the Gender Policy.',
                'Constitutes the Equal Opportunities Board (EOB) as per the policy.',
                'Nominates external members of the EOB.',
                'Receives reports of findings and recommendations of the EOB and follows up on recommended actions (per Section 13).',
              ]} />
            </Accordion>

            {/* 6.3 Academic Board */}
            <Accordion id="06.3" num="6.3" title="Academic Board" open={openSection === '06.3'} onToggle={() => toggle('06.3')}>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
                Members of the Academic Board are responsible for electing the Chair of the EOB upon the recommendation of the Vice-Chancellor.
              </p>
            </Accordion>

            {/* 6.4 CEGENSA */}
            <Accordion id="06.4" num="6.4" title="CEGENSA — Centre for Gender Studies & Advocacy" open={openSection === '06.4'} onToggle={() => toggle('06.4')}>
              <BulletList items={[
                'Facilitate and support the EOB in implementing the Gender Policy.',
                'Academic planning and curriculum development to promote and support the teaching and learning of gender within faculties and departments.',
                'Serve as a Resource Centre.',
                'Conduct policy planning, reform and monitoring.',
                'Facilitate mentoring support for junior faculty and students.',
                'Houses the EOB Secretariat.',
              ]} />
            </Accordion>

            {/* 6.6 EOB */}
            <div className={`border bg-white transition-colors overflow-hidden relative ${openSection === '06.6' ? 'border-primary' : 'border-outline-variant hover:border-primary'}`}>
              {openSection === '06.6' && <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />}
              <button onClick={() => toggle('06.6')} className="w-full flex items-center justify-between p-8 text-left outline-none">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-secondary tracking-widest shrink-0">6.6</span>
                  <span className="font-headline-md text-xl text-primary">Equal Opportunities Board (EOB)</span>
                </div>
                <span className={`material-symbols-outlined transition-colors shrink-0 ${openSection === '06.6' ? 'text-secondary' : 'text-outline group-hover:text-primary'}`}>
                  {openSection === '06.6' ? 'remove' : 'add'}
                </span>
              </button>
              {openSection === '06.6' && (
                <div className="px-8 pb-10 pt-2 border-t border-outline-variant">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Mandate */}
                    <div className="lg:col-span-5">
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-secondary mb-4">Responsibilities</h3>
                      <BulletList items={[
                        'Conduct periodic gender audits and make recommendations to the Vice-Chancellor.',
                        'Prepare guidelines and recommend actions for implementing the Gender Policy.',
                        'Hear individual/group complaints about non-compliance.',
                        'Design and organise training and orientation programmes on gender sensitivity.',
                        'Monitor and evaluate all activities related to the Gender Policy.',
                      ]} />
                      <div className="mt-6 grid grid-cols-3 gap-4 text-center border-t border-outline-variant pt-6">
                        {[
                          { val: '≥ 1×', sub: 'per semester' },
                          { val: '2 yrs', sub: 'member term' },
                          { val: '13', sub: 'total members' },
                        ].map(({ val, sub }) => (
                          <div key={sub}>
                            <p className="font-bold text-primary text-xl">{val}</p>
                            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mt-1">{sub}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs text-on-surface-variant border-l-2 border-secondary pl-4 py-1">
                        Gender parity must be maintained in EOB composition. Annual Report submitted to University Council via Academic Board and VC.
                      </p>
                    </div>

                    {/* Right: Membership */}
                    <div className="lg:col-span-7">
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-secondary mb-4">Membership (13 persons)</h3>
                      <div className="space-y-2">
                        {eobMembers.map(({ num, role, note }) => (
                          <div key={num} className="flex items-start gap-4 py-3 border-b border-outline-variant/40 last:border-0">
                            <span className={`text-[10px] font-bold w-6 shrink-0 mt-0.5 ${num === 'Ex' ? 'text-error' : 'text-secondary'}`}>{num}</span>
                            <div>
                              <p className="text-sm font-semibold text-primary">{role}</p>
                              <p className="text-[11px] text-on-surface-variant mt-0.5">{note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary text-on-primary p-12 border-t-8 border-secondary">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Immediate Assistance</p>
                <h3 className="font-headline-lg text-3xl mb-4">Confidential Consultations</h3>
                <p className="text-on-primary/70 text-body-md max-w-md">
                  The EOB Secretariat is available for private inquiries regarding policy compliance or reporting procedures.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link to="/report" className="bg-secondary text-primary px-10 py-4 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-colors outline-none border-none text-center">
                  File a Complaint
                </Link>
                <button className="border border-on-primary/30 text-on-primary px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-on-primary/10 transition-all outline-none">
                  Download Flowchart
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Institutions;
