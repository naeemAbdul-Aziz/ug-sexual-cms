import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

interface AccordionSectionProps {
  title: string;
  principleNum: string;
  icon: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, principleNum, icon, description, isOpen, onToggle, children }) => {
  return (
    <article className="group bg-white/50 backdrop-blur-sm rounded-2xl border border-outline-variant/30 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
      <div className="p-8 flex items-start justify-between cursor-pointer" onClick={onToggle}>
        <div className="flex gap-8">
          <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary transition-colors duration-300">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
          </div>
          <div>
            <span className="text-secondary font-bold text-[12px] tracking-wider uppercase">Principle {principleNum}</span>
            <h2 className="font-headline-md text-primary mt-1">{title}</h2>
            <p className="text-body-md text-on-surface-variant mt-2 max-w-xl">{description}</p>
          </div>
        </div>
        <span className={`material-symbols-outlined text-outline group-hover:text-primary transition-all ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
          keyboard_arrow_down
        </span>
      </div>
      <div className={`px-8 pt-0 ml-[88px] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
        {children}
      </div>
    </article>
  );
};

const Principles: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('5.1');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <Layout bgClass="bg-mesh">
      <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-0 py-stack-lg">
        {/* Header Section */}
        <div className="mb-stack-lg text-center max-w-2xl mx-auto">
          <span className="inline-block text-secondary font-bold tracking-[0.2em] uppercase text-[12px] mb-4">
            Institutional Framework
          </span>
          <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
            Core Policy Principles
          </h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed opacity-90">
            The University of Ghana is committed to fostering an academic environment anchored in equity, safety, and mutual respect. Our four core principles guide every aspect of university life.
          </p>
        </div>

        {/* Enhanced Accordion Principles Layout */}
        <div className="space-y-6">
          {/* 5.1 Gender-friendly environment */}
          <AccordionSection
            title="Gender-friendly environment"
            principleNum="5.1"
            icon="diversity_3"
            description="Cultivating a safe, secure, and inclusive campus for all staff and students regardless of gender."
            isOpen={openSection === '5.1'}
            onToggle={() => toggleSection('5.1')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl border border-outline-variant/20 hover:bg-white transition-colors">
                <h3 className="font-label-md text-primary flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
                  Physical Safety
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Implementation of well-lit walkways, secure residential facilities, and emergency protocols tailored to gender-specific needs.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-outline-variant/20 hover:bg-white transition-colors">
                <h3 className="font-label-md text-primary flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">school</span>
                  Academic Safety
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Zero-tolerance for harassment in lecture halls, laboratories, and examination centers to ensure focused learning.
                </p>
              </div>
            </div>
          </AccordionSection>

          {/* 5.2 Equal opportunity */}
          <AccordionSection
            title="Equal opportunity"
            principleNum="5.2"
            icon="balance"
            description="Ensuring fair access to recruitment, student enrollment, and career advancement."
            isOpen={openSection === '5.2'}
            onToggle={() => toggleSection('5.2')}
          >
            <div className="bg-white/80 p-8 rounded-xl border border-outline-variant/20 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary text-[24px]">person_add</span>
                <h4 className="font-headline-md text-primary">Recruitment & Promotion</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">done_all</span>
                  <p className="text-body-md text-on-surface-variant">
                    Proactive search for qualified female candidates for senior management and academic roles.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">done_all</span>
                  <p className="text-body-md text-on-surface-variant">
                    Gender-neutral performance metrics that account for career breaks due to family responsibilities.
                  </p>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* 5.3 Gender sensitivity */}
          <AccordionSection
            title="Gender sensitivity"
            principleNum="5.3"
            icon="menu_book"
            description="Integrating gender awareness into the curriculum and administrative processes."
            isOpen={openSection === '5.3'}
            onToggle={() => toggleSection('5.3')}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-label-md text-primary mb-3">Mandatory Gender Courses</h4>
                  <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                    Undergraduate students are required to complete foundational modules on gender dynamics, legal frameworks, and ethical conduct.
                  </p>
                </div>
                {/* Enhanced Impact Goal Callout */}
                <div className="relative overflow-hidden bg-primary p-6 rounded-2xl group/callout">
                  <div className="absolute top-0 right-0 p-2 opacity-10 scale-150 rotate-12 group-hover/callout:rotate-0 transition-transform duration-500">
                    <span className="material-symbols-outlined text-on-primary text-[80px]">format_quote</span>
                  </div>
                  <span className="relative z-10 text-secondary-fixed-dim font-bold text-[10px] tracking-widest uppercase mb-2 block">
                    Impact Goal
                  </span>
                  <p className="relative z-10 text-on-primary text-body-lg italic font-display-lg leading-snug">
                    "To produce graduates who are conscious of gender biases and equipped to challenge them in professional settings."
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-72 shrink-0 rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="University classroom seminar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVHmwoRafiKPFDfP-R0eokBBXrMLakyCnl4LetFlehXmN5KAhxvxQ7kQmC4MazCUPEUHnteUMT_Q5JjYy34Q18ZM1sTnMLa10Qykn1W7jMgzDtaIEOaggbiufetrr2nQh6kU0IFUewc6UISE55LOMHCtZHVkCzBUvUkWV4p9ihCx1ZK1rCTV5DDUtHUyGQvFhLa8xUhrEgFTq33d61v8OBxOsEV1_tK41onWmP8iWQlp9SVw5PmwOZg1FGHyVBOu_Qno6StBUxngc"
                />
              </div>
            </div>
          </AccordionSection>

          {/* 5.4 Gender balance */}
          <AccordionSection
            title="Gender balance"
            principleNum="5.4"
            icon="groups"
            description="Achieving equitable representation across all student enrollment and governance tiers."
            isOpen={openSection === '5.4'}
            onToggle={() => toggleSection('5.4')}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/40 p-8 rounded-xl border border-outline-variant/20">
              <div className="md:col-span-4 flex flex-col justify-center items-center text-center p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                <span className="text-display-lg text-primary leading-none mb-1 font-bold">50:50</span>
                <span className="font-label-md text-secondary uppercase tracking-widest text-[10px]">Enrollment Target</span>
              </div>
              <div className="md:col-span-8 space-y-4">
                <h4 className="font-label-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">moving</span>
                  Strategic Measures
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  Implementation of lower cut-off points and dedicated scholarship schemes for underrepresented genders in STEM and professional fields.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary/5 px-4 py-1.5 rounded-full text-[11px] font-bold text-primary border border-primary/10">STEM Focus</span>
                  <span className="bg-primary/5 px-4 py-1.5 rounded-full text-[11px] font-bold text-primary border border-primary/10">Leadership Grants</span>
                  <span className="bg-primary/5 px-4 py-1.5 rounded-full text-[11px] font-bold text-primary border border-primary/10">Faculty Mentorship</span>
                </div>
              </div>
            </div>
          </AccordionSection>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-20 relative rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-primary"></div>
          {/* Abstract branding element */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute -left-10 -top-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>

          <div className="relative z-10 px-8 py-16 text-center">
            <h2 className="font-display-lg text-display-lg text-on-primary mb-4">Uphold These Principles</h2>
            <p className="text-on-primary/70 mb-10 max-w-lg mx-auto text-body-lg">
              Help us maintain a campus environment that respects and celebrates diversity. Report any deviations or concerns via the EOB.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-secondary text-primary font-bold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-secondary/20 transition-all hover:-translate-y-1 active:scale-95">
                Report Incident
              </button>
              <button className="border-2 border-on-primary/30 text-on-primary font-bold px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all active:scale-95">
                Download Policy PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Principles;
