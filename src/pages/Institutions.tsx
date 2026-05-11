import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Institutions: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('06.4');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <Layout bgClass="bg-surface-bright">
      <main className="pb-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="policy-reading-lane">
          <header className="mb-16 text-center pt-10">
            <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Section 06</p>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">Institutional Framework</h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              The governance structure ensures comprehensive oversight and effective implementation of the University Gender Policy across all constituent colleges and administrative units.
            </p>
          </header>

          {/* Modern Governance Hierarchy */}
          <section className="mb-20">
            <h2 className="text-center font-label-md text-xs uppercase tracking-widest text-outline mb-12">Governance Hierarchy</h2>

            <div className="flex flex-col items-center">
              {/* Top Level */}
              <div className="group relative">
                <div className="bg-white border border-outline-variant p-5 w-64 text-center transition-all hover:border-secondary hover:shadow-md">
                  <p className="font-bold text-primary tracking-wide">University Council</p>
                  <p className="text-[10px] uppercase text-outline mt-1">Supreme Governing Body</p>
                </div>
                <div className="hierarchy-line-v"></div>
              </div>

              {/* Second Level */}
              <div className="group relative">
                <div className="bg-white border border-outline-variant p-5 w-64 text-center transition-all hover:border-secondary hover:shadow-md">
                  <p className="font-bold text-primary tracking-wide">Vice-Chancellor</p>
                  <p className="text-[10px] uppercase text-outline mt-1">Chief Executive Officer</p>
                </div>
                <div className="hierarchy-line-v"></div>
              </div>

              {/* Third Level Connectors */}
              <div className="w-full relative mb-4">
                <div className="hierarchy-line-h"></div>
                <div className="flex justify-between w-2/3 mx-auto">
                  <div className="hierarchy-line-v"></div>
                  <div className="hierarchy-line-v"></div>
                  <div className="hierarchy-line-v"></div>
                </div>
              </div>

              {/* Third Level Grid */}
              <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
                <div className="flex-1 bg-white border border-outline-variant p-5 text-center transition-all hover:border-secondary hover:shadow-md">
                  <p className="text-sm font-semibold text-primary">Academic Board</p>
                  <p className="text-[9px] uppercase text-outline mt-1">Policy Approval</p>
                </div>
                <div className="flex-1 bg-surface-container border border-secondary p-5 text-center transition-all hover:shadow-md relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
                  <p className="text-sm font-bold text-primary">Enforcement & Oversight Body</p>
                  <p className="text-[9px] uppercase text-secondary font-bold mt-1">Investigation & Compliance</p>
                </div>
                <div className="flex-1 bg-white border border-outline-variant p-5 text-center transition-all hover:border-secondary hover:shadow-md">
                  <p className="text-sm font-semibold text-primary">CEGENSA</p>
                  <p className="text-[9px] uppercase text-outline mt-1">Research & Support</p>
                </div>
              </div>
            </div>
          </section>

          {/* Modernized Roles and Responsibilities Accordions */}
          <section className="mb-20 space-y-6">
            <div className="flex items-center justify-between mb-8 border-b border-outline-variant pb-4">
              <h2 className="font-headline-md text-primary">Roles and Responsibilities</h2>
              <span className="text-xs text-outline uppercase tracking-widest font-label-md">Detailed Mandates</span>
            </div>

            {/* 6.1 University Council */}
            <div className={`border bg-white group transition-colors overflow-hidden ${openSection === '06.1' ? 'border-primary' : 'border-outline-variant hover:border-primary'}`}>
              <button onClick={() => toggleSection('06.1')} className="w-full flex items-center justify-between p-8 text-left outline-none">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-secondary tracking-widest">06.1</span>
                  <span className="font-headline-md text-xl text-primary">University Council</span>
                </div>
                <span className={`material-symbols-outlined text-outline group-hover:text-primary transition-colors ${openSection === '06.1' ? 'text-secondary' : ''}`}>
                  {openSection === '06.1' ? 'remove' : 'add'}
                </span>
              </button>
            </div>

            {/* 6.2 Vice-Chancellor */}
            <div className={`border bg-white group transition-colors overflow-hidden ${openSection === '06.2' ? 'border-primary' : 'border-outline-variant hover:border-primary'}`}>
              <button onClick={() => toggleSection('06.2')} className="w-full flex items-center justify-between p-8 text-left outline-none">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-secondary tracking-widest">06.2</span>
                  <span className="font-headline-md text-xl text-primary">Vice-Chancellor</span>
                </div>
                <span className={`material-symbols-outlined text-outline group-hover:text-primary transition-colors ${openSection === '06.2' ? 'text-secondary' : ''}`}>
                  {openSection === '06.2' ? 'remove' : 'add'}
                </span>
              </button>
            </div>

            {/* 6.4 EOB (Expanded View Default) */}
            <div className={`border bg-white shadow-sm relative overflow-hidden ${openSection === '06.4' ? 'border-primary' : 'border-outline-variant hover:border-primary'}`}>
              {openSection === '06.4' && <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>}
              <button onClick={() => toggleSection('06.4')} className="w-full flex items-center justify-between p-8 text-left outline-none">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-secondary tracking-widest">06.4</span>
                  <span className="font-headline-md text-xl text-primary">Enforcement & Oversight Body (EOB)</span>
                </div>
                <span className={`material-symbols-outlined transition-colors ${openSection === '06.4' ? 'text-secondary' : 'text-outline group-hover:text-primary'}`}>
                  {openSection === '06.4' ? 'remove' : 'add'}
                </span>
              </button>

              {openSection === '06.4' && (
                <div className="px-8 pb-12 pt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Mandate */}
                    <div className="lg:col-span-5">
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-secondary mb-6">Mandate & Responsibility</h3>
                      <p className="text-body-md text-on-surface-variant leading-relaxed mb-8">
                        The EOB is a specialized administrative body established to investigate and manage gender-related offences, ensuring institutional accountability.
                      </p>

                      <div className="space-y-4">
                        <div className="flex gap-4 p-4 border border-outline-variant hover:border-primary transition-colors">
                          <span className="material-symbols-outlined text-primary">search</span>
                          <div>
                            <p className="font-bold text-primary text-sm uppercase tracking-wide">Investigation</p>
                            <p className="text-xs text-on-surface-variant mt-1">Management of formal complaints and objective evidence gathering.</p>
                          </div>
                        </div>
                        <div className="flex gap-4 p-4 border border-outline-variant hover:border-primary transition-colors">
                          <span className="material-symbols-outlined text-primary">gavel</span>
                          <div>
                            <p className="font-bold text-primary text-sm uppercase tracking-wide">Due Process</p>
                            <p className="text-xs text-on-surface-variant mt-1">Ensuring fair hearings in accordance with University statutes.</p>
                          </div>
                        </div>
                        <div className="flex gap-4 p-4 border border-outline-variant hover:border-primary transition-colors">
                          <span className="material-symbols-outlined text-primary">security</span>
                          <div>
                            <p className="font-bold text-primary text-sm uppercase tracking-wide">Protection</p>
                            <p className="text-xs text-on-surface-variant mt-1">Implementation of interim safety measures for complainants.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Composition */}
                    <div className="lg:col-span-7">
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-secondary mb-6">EOB Composition (13 Members)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
                          <span className="text-[10px] font-bold text-outline w-4">01</span>
                          <p className="text-sm font-medium">Chairperson (Appointed by VC)</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
                          <span className="text-[10px] font-bold text-outline w-4">02</span>
                          <p className="text-sm font-medium">Director, CEGENSA (Ex-Officio)</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
                          <span className="text-[10px] font-bold text-outline w-4">03</span>
                          <p className="text-sm font-medium">Legal Counsel of the University</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
                          <span className="text-[10px] font-bold text-outline w-4">04</span>
                          <p className="text-sm font-medium">Director of HR</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
                          <span className="text-[10px] font-bold text-outline w-4">05</span>
                          <p className="text-sm font-medium">Dean of Student Affairs</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
                          <span className="text-[10px] font-bold text-outline w-4">06+</span>
                          <p className="text-sm font-medium">3 Senior Members (Colleges)</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
                          <span className="text-[10px] font-bold text-outline w-4">09+</span>
                          <p className="text-sm font-medium">2 Staff Union Reps (UTAG/GAUA)</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
                          <span className="text-[10px] font-bold text-outline w-4">11+</span>
                          <p className="text-sm font-medium">2 Student Reps (SRC/GRASAG)</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-outline-variant/30 col-span-full">
                          <span className="text-[10px] font-bold text-outline w-4">13</span>
                          <p className="text-sm font-medium">Registrar's Representative (Secretary)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 6.5 CEGENSA */}
            <div className={`border bg-white group transition-colors overflow-hidden ${openSection === '06.5' ? 'border-primary' : 'border-outline-variant hover:border-primary'}`}>
              <button onClick={() => toggleSection('06.5')} className="w-full flex items-center justify-between p-8 text-left outline-none">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-secondary tracking-widest">06.5</span>
                  <span className="font-headline-md text-xl text-primary">CEGENSA</span>
                </div>
                <span className={`material-symbols-outlined text-outline group-hover:text-primary transition-colors ${openSection === '06.5' ? 'text-secondary' : ''}`}>
                  {openSection === '06.5' ? 'remove' : 'add'}
                </span>
              </button>
            </div>
          </section>

          {/* Modernized Call to Action */}
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
                <button className="bg-secondary text-primary px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-secondary-fixed transition-colors outline-none border-none">
                  Contact EOB Secretariat
                </button>
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
