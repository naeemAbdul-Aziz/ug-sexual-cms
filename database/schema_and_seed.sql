-- ==============================================================================
-- Schema and Seed for UG Gender Policy Case Management System
-- Database: PostgreSQL
-- ==============================================================================

-- 1. Create Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. CREATE TABLES
-- ==============================================================================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('ADMIN', 'OFFICER')),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id VARCHAR(50) UNIQUE NOT NULL,
    path VARCHAR(50) NOT NULL CHECK (path IN ('formal', 'informal')),
    incident_type VARCHAR(100) NOT NULL,
    incident_date DATE,
    location VARCHAR(255),
    involved_parties TEXT,
    narrative TEXT,
    witness_names TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'Initial Review' CHECK (status IN ('Initial Review', 'Investigation', 'Panel Hearing', 'Recommendation', 'Resolved')),
    priority VARCHAR(50) NOT NULL DEFAULT 'Low' CHECK (priority IN ('Low', 'Medium', 'High', 'Critical')),
    assigned_officer_id UUID REFERENCES users(id) ON DELETE RESTRICT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE case_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    case_id UUID NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    content TEXT NOT NULL,
    visibility VARCHAR(50) NOT NULL DEFAULT 'internal' CHECK (visibility IN ('internal', 'panel')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE evidence (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    case_id UUID NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    storage_uri VARCHAR(500) NOT NULL,
    file_size_bytes INTEGER,
    uploaded_by_id UUID REFERENCES users(id) ON DELETE SET NULL, -- Null if uploaded by complainant
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE definitions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    term VARCHAR(255) NOT NULL,
    definition TEXT NOT NULL,
    type VARCHAR(50) NOT NULL DEFAULT 'term' CHECK (type IN ('term', 'acronym')),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE policy_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    version_number VARCHAR(50) NOT NULL,
    effective_date DATE NOT NULL,
    storage_uri VARCHAR(500) NOT NULL,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==============================================================================
-- 3. SEED DATA
-- ==============================================================================

-- 3.1 Seed Users (RBAC)
-- Note: UUIDs generated deterministically for seed relations
INSERT INTO users (id, email, password_hash, full_name, role) VALUES 
('11111111-1111-1111-1111-111111111111', 'admin@ug.edu.gh', 'hashed_pw_here', 'System Admin', 'ADMIN'),
('22222222-2222-2222-2222-222222222222', 'amensah@ug.edu.gh', 'hashed_pw_here', 'Dr. Abena Mensah', 'OFFICER'),
('33333333-3333-3333-3333-333333333333', 'kowusu@ug.edu.gh', 'hashed_pw_here', 'Prof. Kwame Owusu', 'OFFICER'),
('44444444-4444-4444-4444-444444444444', 'sboateng@ug.edu.gh', 'hashed_pw_here', 'Sarah Boateng', 'OFFICER');

-- 3.2 Seed Cases (Sourced from AdminCases.tsx)
INSERT INTO cases (id, reference_id, path, incident_type, incident_date, location, involved_parties, narrative, status, priority, assigned_officer_id, submitted_at) VALUES
('aaaaa111-1111-1111-1111-111111111111', '#GBC-24-0812', 'formal', 'sexist_remarks', '2024-10-14', 'Main Campus Library', 'Student Body', 'Complainant reported inappropriate sexist remarks made during group study.', 'Investigation', 'High', '22222222-2222-2222-2222-222222222222', '2024-10-14 09:00:00+00'),
('aaaaa222-2222-2222-2222-222222222222', '#GBC-24-0809', 'formal', 'gbv', '2024-10-12', 'Staff Office Block', 'Staff (Admin)', 'Complainant reported severe incident of GBV by a superior.', 'Panel Hearing', 'Medium', '33333333-3333-3333-3333-333333333333', '2024-10-12 11:30:00+00'),
('aaaaa333-3333-3333-3333-333333333333', '#GBC-24-0795', 'informal', 'unfair_treatment', '2024-10-05', 'Science Lab', 'Student Body', 'Complainant felt unfairly treated during laboratory practicals.', 'Initial Review', 'Low', '44444444-4444-4444-4444-444444444444', '2024-10-05 14:15:00+00'),
('aaaaa444-4444-4444-4444-444444444444', '#GBC-24-0782', 'formal', 'promotion_denial', '2024-09-28', 'Faculty Lounge', 'Faculty Member', 'Complainant alleges denial of promotion strictly based on gender prejudice.', 'Recommendation', 'Critical', '22222222-2222-2222-2222-222222222222', '2024-09-28 10:00:00+00');

-- 3.3 Seed Case Notes (Mock data respecting RBAC roles)
INSERT INTO case_notes (case_id, author_id, content, visibility) VALUES
('aaaaa111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', 'Contacted complainant via secure channel. They agreed to provide additional statements tomorrow.', 'internal'),
('aaaaa222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Panel hearing scheduled for next Tuesday. All parties have been formally notified.', 'panel');

-- 3.4 Seed Evidence (Mock file pointers)
INSERT INTO evidence (case_id, file_name, mime_type, storage_uri, file_size_bytes, uploaded_by_id) VALUES
('aaaaa111-1111-1111-1111-111111111111', 'whatsapp_screenshots.zip', 'application/zip', 's3://ug-gbv-bucket/evidence/111_whatsapp.zip', 2048000, NULL), -- Uploaded anonymously by complainant
('aaaaa222-2222-2222-2222-222222222222', 'officer_interview_notes.pdf', 'application/pdf', 's3://ug-gbv-bucket/evidence/222_notes.pdf', 154000, '33333333-3333-3333-3333-333333333333'); -- Uploaded by investigating officer

-- 3.5 Seed Definitions (Sample sourced directly from AdminDefinitions.tsx)
INSERT INTO definitions (term, definition, type) VALUES
('Affirmative measures', 'A course of action or measure taken on a temporary basis to remedy a gendered imbalance.', 'term'),
('Complainant(s)', 'A person or group of persons who alleges they have not been treated in accordance with the Gender Policy and has filed a complaint under this policy.', 'term'),
('Equal Opportunities Board (EOB)', 'The Board established by the University to oversee the implementation of the policy and investigate complaints under this policy.', 'term'),
('Gender mainstreaming', 'Integration of a gender perspective and gender analysis into all stages of designing, implementing and evaluating projects, policies and programmes.', 'term'),
('Gender-based violence', 'A form of force targeted at a person because of the person''s gender, manifesting in physical, sexual, psychological harm or suffering, including threats, coercion or deprivation of liberty.', 'term'),
('CEGENSA', 'Centre for Gender Studies & Advocacy', 'acronym'),
('SRC', 'Students'' Representative Council', 'acronym'),
('GRASAG', 'Graduate Students Association of Ghana', 'acronym');
