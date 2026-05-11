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

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, principleNum, icon, description, isOpen, onToggle, children }) => (
  <article className="group bg-white border border-outline-variant hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
    <div className="p-8 flex items-start justify-between cursor-pointer" onClick={onToggle}>
      <div className="flex gap-8">
        <div className={`h-14 w-14 flex items-center justify-center shrink-0 border transition-colors duration-300 ${isOpen ? 'bg-primary border-primary' : 'bg-primary/5 border-primary/10 group-hover:bg-primary'}`}>
          <span className={`material-symbols-outlined transition-colors ${isOpen ? 'text-on-primary' : 'text-primary group-hover:text-on-primary'}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        </div>
        <div>
          <span className="text-secondary font-bold text-[11px] tracking-wider uppercase">Principle {principleNum}</span>
          <h2 className="font-headline-md text-primary mt-1 text-xl">{title}</h2>
          <p className="text-on-surface-variant text-sm mt-2 max-w-xl">{description}</p>
        </div>
      </div>
      <span className={`material-symbols-outlined text-outline group-hover:text-primary transition-all shrink-0 mt-1 ${isOpen ? 'rotate-180' : ''}`}>
        keyboard_arrow_down
      </span>
    </div>
    <div className={`px-8 pt-0 ml-[88px] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[2000px] pb-10 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
      {children}
    </div>
  </article>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
        {item}
      </li>
    ))}
  </ul>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-bold text-primary text-[11px] uppercase tracking-widest border-b-2 border-secondary w-fit pb-1 mb-4">{children}</h3>
);

const Principles: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('5.1');
  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  return (
    <Layout bgClass="bg-white">
      <div className="page-lane px-6 md:px-12 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-secondary font-bold text-[11px] uppercase tracking-widest mb-3">Section 05</p>
          <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-4 leading-tight">Policy Principles</h1>
          <p className="text-on-surface-variant text-base max-w-2xl">
            The four core principles guiding the University's gender commitments across all units and governance structures.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">

          {/* 5.1 */}
          <AccordionSection
            title="Gender-friendly, inclusive & secure environment"
            principleNum="5.1"
            icon="diversity_3"
            description="Cultivating a campus free from direct or indirect forms of gender discrimination with equal participation in decision-making."
            isOpen={openSection === '5.1'}
            onToggle={() => toggle('5.1')}
          >
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              The University is committed to creating an environment free from direct or indirect forms of gender discrimination, and one that provides a space for equal participation of men and women in decision-making bodies.
            </p>
            <BulletList items={[
              'Acknowledge equal competence of employees of both sexes.',
              'Encourage equal respect for both and discourage preference of one over the other.',
              'Exception: where the University has instituted special measures to achieve gender parity.',
            ]} />
          </AccordionSection>

          {/* 5.2 */}
          <AccordionSection
            title="Equal opportunity"
            principleNum="5.2"
            icon="balance"
            description="Ensuring fair access to recruitment, student enrolment, and career advancement for all members of the University community."
            isOpen={openSection === '5.2'}
            onToggle={() => toggle('5.2')}
          >
            <div className="space-y-8">
              <div>
                <SubHeading>Recruitments, appointments &amp; promotions</SubHeading>
                <BulletList items={[
                  'Committed to equal opportunity for male and female employees and students.',
                  'Special measures to ensure gender equality at all employee levels.',
                ]} />
              </div>
              <div>
                <SubHeading>Student enrolment &amp; retention</SubHeading>
                <BulletList items={[
                  'Special measures from the 1980s shall be continued and expanded until equality is achieved at undergraduate and postgraduate levels.',
                  'Special measures to promote enrolment for underrepresented genders.',
                  'Mentoring programme through CEGENSA and the Careers & Counselling Centre for students in disciplines dominated by one gender.',
                  'Mandatory undergraduate foundational gender course continues.',
                ]} />
              </div>
            </div>
          </AccordionSection>

          {/* 5.3 */}
          <AccordionSection
            title="Gender sensitivity"
            principleNum="5.3"
            icon="menu_book"
            description="Integrating gender awareness into the curriculum, research processes, and staff training throughout the University."
            isOpen={openSection === '5.3'}
            onToggle={() => toggle('5.3')}
          >
            <div className="space-y-8">
              <div>
                <SubHeading>Engendering curriculum</SubHeading>
                <BulletList items={[
                  'Gender courses developed and integrated into existing curricula across all faculties.',
                  'Gender-inclusive perspectives adopted in both teaching methodology and content.',
                  'Mandatory undergraduate foundational gender course continues.',
                ]} />
              </div>
              <div>
                <SubHeading>Research &amp; innovation</SubHeading>
                <BulletList items={[
                  'Promote integration of gender analyses in research processes and innovations.',
                  'Encourage staff and students to undertake gender-sensitive research, including research focused on the University itself.',
                ]} />
              </div>
              <div>
                <SubHeading>Gender training for staff</SubHeading>
                <BulletList items={[
                  'All employees sensitised to assess impacts of University policies on males and females.',
                  'Regular short training in gender sensitisation organised for staff.',
                  'Employees sensitised to recognise sex-biased stereotypes and their effects on professional conduct.',
                ]} />
              </div>
            </div>
          </AccordionSection>

          {/* 5.4 */}
          <AccordionSection
            title="Gender balance"
            principleNum="5.4"
            icon="groups"
            description="Ensuring gender parity in all spheres of university life — governance, employment, and student representation."
            isOpen={openSection === '5.4'}
            onToggle={() => toggle('5.4')}
          >
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              The University is committed to ensuring gender parity or balance in the ratio of females to males in all spheres of university life, including University and student governance structures.
            </p>
            <BulletList items={[
              'Gender balance achieved when there are approximately equal numbers of men and women present or participating in all areas of university life.',
              'Covers the University Council, Academic Board, and all standing committees.',
              'Committed to ensuring both de jure and de facto equality.',
            ]} />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { body: 'University Council', sub: 'Governance' },
                { body: 'Academic Board', sub: 'Academic governance' },
                { body: 'All Standing Committees', sub: 'Administrative' },
              ].map(({ body, sub }) => (
                <div key={body} className="border border-outline-variant p-5 text-center">
                  <p className="font-bold text-primary text-sm">{body}</p>
                  <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary text-on-primary p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display-lg text-3xl mb-3">Uphold These Principles</h2>
              <p className="text-on-primary/70 max-w-lg text-sm leading-relaxed">
                Help us maintain a campus environment that respects and celebrates diversity. Report any deviations or concerns via the EOB.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="/report" className="bg-secondary text-white font-bold px-10 py-4 text-[12px] uppercase tracking-widest hover:brightness-110 transition-all text-center">
                Report Incident
              </a>
              <a href="#" className="border-2 border-on-primary/30 text-on-primary font-bold px-10 py-4 text-[12px] uppercase tracking-widest hover:bg-white/10 transition-all text-center">
                Download Policy PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Principles;
