-- 3. SEED DATA

-- 3.1 Seed Users (Officers & Admins)
INSERT INTO users (id, email, password_hash, full_name, role) VALUES 
('11111111-1111-1111-1111-111111111111', 'admin@ug.edu.gh', 'hashed_pw_here', 'System Admin', 'ADMIN'),
('22222222-2222-2222-2222-222222222222', 'amensah@ug.edu.gh', 'hashed_pw_here', 'Dr. Abena Mensah', 'OFFICER'),
('33333333-3333-3333-3333-333333333333', 'kowusu@ug.edu.gh', 'hashed_pw_here', 'Prof. Kwame Owusu', 'OFFICER'),
('44444444-4444-4444-4444-444444444444', 'sboateng@ug.edu.gh', 'hashed_pw_here', 'Sarah Boateng', 'OFFICER'),
('55555555-5555-5555-5555-555555555555', 'jappiah@ug.edu.gh', 'hashed_pw_here', 'John Appiah', 'OFFICER'),
('66666666-6666-6666-6666-666666666666', 'eaddo@ug.edu.gh', 'hashed_pw_here', 'Elizabeth Addo', 'OFFICER');

-- 3.2 Seed Cases (30+ Diverse Records)
INSERT INTO cases (id, reference_id, path, incident_type, incident_date, location, involved_parties, narrative, status, priority, assigned_officer_id, submitted_at) VALUES
-- Recent / Critical
('aaaaa001-1111-1111-1111-111111111111', '#GBC-25-0001', 'formal', 'gbv', '2025-05-10', 'Legon Hall', 'Student Body', 'Severe GBV incident reported in residence.', 'Initial Review', 'Critical', NULL, NOW() - INTERVAL '1 day'),
('aaaaa002-1111-1111-1111-111111111111', '#GBC-25-0002', 'formal', 'sexist_remarks', '2025-05-08', 'N-Block', 'Faculty Member', 'Verbal harassment during lecture.', 'Investigation', 'High', '22222222-2222-2222-2222-222222222222', NOW() - INTERVAL '3 days'),
('aaaaa003-1111-1111-1111-111111111111', '#GBC-25-0003', 'informal', 'unfair_treatment', '2025-05-05', 'Admin Block', 'Staff (Admin)', 'Unfair treatment in project assignment.', 'Initial Review', 'Medium', NULL, NOW() - INTERVAL '5 days'),

-- Reaching Deadline (21 days)
('aaaaa010-1111-1111-1111-111111111111', '#GBC-24-0990', 'formal', 'promotion_denial', '2025-04-20', 'Science Faculty', 'Staff (Admin)', 'Delayed promotion based on gender bias.', 'Panel Hearing', 'High', '33333333-3333-3333-3333-333333333333', NOW() - INTERVAL '20 days'),

-- Historical / Resolved
('aaaaa020-1111-1111-1111-111111111111', '#GBC-24-0800', 'formal', 'gbv', '2024-12-10', 'Main Gate', 'Unknown', 'Harassment at university entrance.', 'Resolved', 'Low', '22222222-2222-2222-2222-222222222222', '2024-12-11 10:00:00+00'),
('aaaaa021-1111-1111-1111-111111111111', '#GBC-24-0750', 'informal', 'other', '2024-11-15', 'Central Cafeteria', 'Student Body', 'Inappropriate behavior in dining area.', 'Resolved', 'Low', '44444444-4444-4444-4444-444444444444', '2024-11-16 14:00:00+00');

-- Bulk insertion for pagination test (IDs generated for demo)
DO $$
BEGIN
    FOR i IN 1..25 LOOP
        INSERT INTO cases (reference_id, path, incident_type, status, priority, submitted_at)
        VALUES (
            '#GBC-24-PAG' || LPAD(i::text, 3, '0'),
            CASE WHEN i % 2 = 0 THEN 'formal' ELSE 'informal' END,
            CASE WHEN i % 3 = 0 THEN 'sexist_remarks' ELSE 'unfair_treatment' END,
            (CASE WHEN i % 5 = 0 THEN 'Resolved' ELSE 'Investigation' END)::case_status,
            (CASE WHEN i % 4 = 0 THEN 'Critical' WHEN i % 4 = 1 THEN 'High' ELSE 'Medium' END)::case_priority,
            NOW() - (i || ' days')::interval
        );
    END LOOP;
END $$;

-- 3.3 Seed Definitions
INSERT INTO definitions (term, definition, type) VALUES
('Affirmative measures', 'A course of action or measure taken on a temporary basis to remedy a gendered imbalance.', 'term'),
('Complainant(s)', 'A person or group of persons who alleges they have not been treated in accordance with the Gender Policy and has filed a complaint under this policy.', 'term'),
('Equal Opportunities Board (EOB)', 'The Board established by the University to oversee the implementation of the policy and investigate complaints under this policy.', 'term'),
('Gender mainstreaming', 'Integration of a gender perspective and gender analysis into all stages of designing, implementing and evaluating projects, policies and programmes.', 'term'),
('Gender-based violence', 'A form of force targeted at a person because of the person''s gender, manifesting in physical, sexual, psychological harm or suffering, including threats, coercion or deprivation of liberty.', 'term'),
('CEGENSA', 'Centre for Gender Studies & Advocacy', 'acronym'),
('SRC', 'Students'' Representative Council', 'acronym'),
('GRASAG', 'Graduate Students Association of Ghana', 'acronym');

-- 3.4 Seed Documents
INSERT INTO policy_documents (version_number, effective_date, storage_uri) VALUES
('3.0', '2023-10-12', 'https://example.com/docs/ug_gender_policy_v3.pdf'),
('2.1', '2021-05-20', 'https://example.com/docs/ug_gender_policy_v2.pdf');
