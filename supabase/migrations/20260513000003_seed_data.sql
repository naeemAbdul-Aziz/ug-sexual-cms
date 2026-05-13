-- Migration to ensure unique constraints and seed exhaustive policy data
-- This migration ensures the remote database matches the expected institutional setup.

-- 1. Ensure Unique Constraints for ON CONFLICT to work
ALTER TABLE public.definitions ADD CONSTRAINT definitions_term_key UNIQUE (term);
ALTER TABLE public.policy_documents ADD CONSTRAINT policy_documents_version_key UNIQUE (version_number);

-- 2. Seed Users (Officers & Admins)
INSERT INTO public.users (id, email, password_hash, full_name, role) VALUES 
('11111111-1111-1111-1111-111111111111', 'admin@ug.edu.gh', 'hashed_pw_here', 'System Admin', 'ADMIN'),
('22222222-2222-2222-2222-222222222222', 'amensah@ug.edu.gh', 'hashed_pw_here', 'Dr. Abena Mensah', 'OFFICER'),
('33333333-3333-3333-3333-333333333333', 'kowusu@ug.edu.gh', 'hashed_pw_here', 'Prof. Kwame Owusu', 'OFFICER'),
('44444444-4444-4444-4444-444444444444', 'sboateng@ug.edu.gh', 'hashed_pw_here', 'Sarah Boateng', 'OFFICER'),
('55555555-5555-5555-5555-555555555555', 'jappiah@ug.edu.gh', 'hashed_pw_here', 'John Appiah', 'OFFICER'),
('66666666-6666-6666-6666-666666666666', 'eaddo@ug.edu.gh', 'hashed_pw_here', 'Elizabeth Addo', 'OFFICER')
ON CONFLICT (id) DO NOTHING;

-- 3. Seed Definitions (33 terms + 5 acronyms)
INSERT INTO public.definitions (term, definition, type) VALUES
('Affirmative measures', 'A course of action or measure taken on a temporary basis to remedy a gendered imbalance.', 'term'),
('Complainant(s)', 'A person or group of persons who alleges they have not been treated in accordance with the Gender Policy and has filed a complaint under this policy.', 'term'),
('College', 'As defined in the University Statutes — one or more related academic departments, schools, institutes and centres established by Council.', 'term'),
('Diversity promotion', 'Recognising and making provision for differences between males and females in order to promote gender balance in promotion.', 'term'),
('Direct discrimination', 'Where a person is treated less favourably than another in a comparable situation.', 'term'),
('Indirect discrimination', 'When an apparently neutral provision, criterion or practice would disadvantage one gender.', 'term'),
('De jure equality', 'Equality under the law.', 'term'),
('De facto equality', 'Equality in practice.', 'term'),
('Employee', 'Senior members and staff of the University.', 'term'),
('Equal opportunity', 'The principle of ensuring that both males and females enjoy available benefits and/or resources equally.', 'term'),
('Equal Opportunities Board (EOB)', 'The Board established by the University to oversee the implementation of the policy and investigate complaints under this policy.', 'term'),
('Gender', 'The socially constructed roles and relations between females and males.', 'term'),
('Gender analysis', 'Analysis of roles, responsibilities, constraints, opportunities and needs of females and males in any context.', 'term'),
('Gender balance', 'A situation where there are approximately equal numbers of males and females present or participating in an event, programme or employment.', 'term'),
('Gender-based discrimination', 'Differential treatment accorded different persons attributable only or mainly to their gender whereby persons of one gender are subjected to disabilities/restrictions or privileges/advantages to which persons of another gender are not.', 'term'),
('Gender equality/parity', 'A condition where both males and females are accorded equal social value, rights, responsibilities and access to resources and opportunities.', 'term'),
('Gender equity', 'The process of being fair to males and females, typically including measures to correct historically-created imbalances, thus resulting in substantive equality.', 'term'),
('Gender gap', 'The disparity (measured quantitatively) between males and females in their access to resources such as education, health, services or power.', 'term'),
('Gender mainstreaming', 'Integration of a gender perspective and gender analysis into all stages of designing, implementing and evaluating projects, policies and programmes.', 'term'),
('Gender-neutral', 'Where policies and actions are not specifically aimed at either males or females and are assumed to affect both sexes equally.', 'term'),
('Gender sensitive', 'Taking into account the particularities pertaining to the lives of both females and males while aiming to eliminate inequalities.', 'term'),
('Gender sensitisation', 'The process of developing people''s awareness, knowledge and skills on gender issues.', 'term'),
('Gender stereotypes', 'Presumptions about the roles, abilities and attributes of males and females which may not reflect reality.', 'term'),
('Gender-based violence', 'A form of force targeted at a person because of the person''s gender, manifesting in physical, sexual, psychological harm or suffering, including threats, coercion or deprivation of liberty.', 'term'),
('Manager', 'All senior employees and other supervisors who are in charge of a unit and have people working under them.', 'term'),
('Mediator', 'A person selected by the EOB with mutual agreement of both parties to facilitate discussion and suggest alternative resolution. A mediator does not investigate or assign blame.', 'term'),
('Prospective employee', 'A person who has applied to the University for employment.', 'term'),
('Prospective student', 'A person who has applied to the University for admission to undertake a programme or course.', 'term'),
('Respondent(s)', 'A person or group of persons whose alleged conduct is the subject of a complaint.', 'term'),
('Senior member', 'Academic, administrative, professional employees and members of Convocation.', 'term'),
('Sexual harassment', 'Interaction between individuals of opposite or same gender characterised by unwelcome sexual advances, requests for sexual favours, or other verbal or physical conduct of a sexual nature.', 'term'),
('Staff', 'Persons, other than Senior Members, in the employment of the University.', 'term'),
('University community', 'All senior members, senior and junior staff and their families; interns, teaching assistants; post-docs, visiting faculty; students; and others who work in businesses within campus.', 'term'),
('CEGENSA', 'Centre for Gender Studies & Advocacy', 'acronym'),
('EOB', 'Equal Opportunities Board', 'acronym'),
('UG', 'University of Ghana', 'acronym'),
('SRC', 'Students'' Representative Council', 'acronym'),
('GRASAG', 'Graduate Students Association of Ghana', 'acronym')
ON CONFLICT (term) DO UPDATE SET definition = EXCLUDED.definition;

-- 4. Seed Sample Cases
INSERT INTO public.cases (id, reference_id, path, incident_type, incident_date, location, involved_parties, narrative, status, priority, assigned_officer_id, submitted_at) VALUES
('aaaaa001-1111-1111-1111-111111111111', '#GBC-25-0001', 'formal', 'gbv', '2025-05-10', 'Legon Hall', 'Student Body', 'Severe GBV incident reported in residence.', 'Initial Review', 'Critical', NULL, NOW() - INTERVAL '1 day'),
('aaaaa002-1111-1111-1111-111111111111', '#GBC-25-0002', 'formal', 'sexist_remarks', '2025-05-08', 'N-Block', 'Faculty Member', 'Verbal harassment during lecture.', 'Investigation', 'High', '22222222-2222-2222-2222-222222222222', NOW() - INTERVAL '3 days'),
('aaaaa003-1111-1111-1111-111111111111', '#GBC-25-0003', 'informal', 'unfair_treatment', '2025-05-05', 'Admin Block', 'Staff (Admin)', 'Unfair treatment in project assignment.', 'Initial Review', 'Medium', NULL, NOW() - INTERVAL '5 days'),
('aaaaa020-1111-1111-1111-111111111111', '#GBC-24-0800', 'formal', 'gbv', '2024-12-10', 'Main Gate', 'Unknown', 'Harassment at university entrance.', 'Resolved', 'Low', '22222222-2222-2222-2222-222222222222', '2024-12-11 10:00:00+00'),
('aaaaa021-1111-1111-1111-111111111111', '#GBC-24-0750', 'informal', 'other', '2024-11-15', 'Central Cafeteria', 'Student Body', 'Inappropriate behavior in dining area.', 'Resolved', 'Low', '44444444-4444-4444-4444-444444444444', '2024-11-16 14:00:00+00')
ON CONFLICT (id) DO NOTHING;

-- 5. Seed Policy Documents
INSERT INTO public.policy_documents (version_number, effective_date, storage_uri) VALUES
('3.0', '2023-10-12', 'https://example.com/docs/ug_gender_policy_v3.pdf'),
('2.1', '2021-05-20', 'https://example.com/docs/ug_gender_policy_v2.pdf')
ON CONFLICT (version_number) DO NOTHING;
