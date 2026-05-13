-- 1. Create Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE user_role AS ENUM ('ADMIN', 'OFFICER');
CREATE TYPE case_status AS ENUM ('Initial Review', 'Investigation', 'Panel Hearing', 'Recommendation', 'Resolved');
CREATE TYPE case_priority AS ENUM ('Low', 'Medium', 'High', 'Critical');
CREATE TYPE note_visibility AS ENUM ('internal', 'panel');

-- Create users table
CREATE TABLE public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT,
    full_name TEXT NOT NULL,
    role user_role DEFAULT 'OFFICER',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create definitions table
CREATE TABLE public.definitions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    term TEXT NOT NULL,
    definition TEXT NOT NULL,
    type TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create policy_documents table
CREATE TABLE public.policy_documents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    version_number TEXT NOT NULL,
    effective_date DATE NOT NULL,
    storage_uri TEXT NOT NULL,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create cases table
CREATE TABLE public.cases (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    reference_id TEXT UNIQUE NOT NULL,
    path TEXT,
    incident_type TEXT NOT NULL,
    incident_date DATE,
    location TEXT,
    involved_parties TEXT,
    narrative TEXT,
    witness_names TEXT,
    status case_status DEFAULT 'Initial Review',
    priority case_priority DEFAULT 'Medium',
    assigned_officer_id UUID REFERENCES public.users(id) ON DELETE RESTRICT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    resolved_at TIMESTAMP WITH TIME ZONE
);

-- Create case_notes table
CREATE TABLE public.case_notes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,
    author_id UUID REFERENCES public.users(id) ON DELETE RESTRICT NOT NULL,
    content TEXT NOT NULL,
    visibility note_visibility DEFAULT 'internal',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create evidence table
CREATE TABLE public.evidence (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,
    file_name TEXT NOT NULL,
    mime_type TEXT,
    storage_uri TEXT NOT NULL,
    file_size_bytes INTEGER,
    uploaded_by_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.definitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.policy_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evidence ENABLE ROW LEVEL SECURITY;

-- Basic RLS Policies

-- Definitions and Policy Documents are readable by anyone
CREATE POLICY "Public definitions are viewable by everyone" ON public.definitions FOR SELECT USING (true);
CREATE POLICY "Public policy docs are viewable by everyone" ON public.policy_documents FOR SELECT USING (true);

-- Admins can manage definitions and documents
CREATE POLICY "Admins can manage definitions" ON public.definitions
    USING (EXISTS (SELECT 1 FROM public.users WHERE users.id = auth.uid() AND users.role = 'ADMIN'));

CREATE POLICY "Admins can manage policy documents" ON public.policy_documents
    USING (EXISTS (SELECT 1 FROM public.users WHERE users.id = auth.uid() AND users.role = 'ADMIN'));

-- Users can read their own profile, and admins can read all
CREATE POLICY "Users can read own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Admins can read all profiles" ON public.users FOR SELECT 
    USING (EXISTS (SELECT 1 FROM public.users AS u WHERE u.id = auth.uid() AND u.role = 'ADMIN'));

-- Cases: Admins see all, Officers see assigned
CREATE POLICY "Admins can view all cases" ON public.cases FOR SELECT
    USING (EXISTS (SELECT 1 FROM public.users WHERE users.id = auth.uid() AND users.role = 'ADMIN'));

CREATE POLICY "Officers can view assigned cases" ON public.cases FOR SELECT
    USING (assigned_officer_id = auth.uid());

-- Cases insertion (Public can insert anonymously, so we need an insert policy for anon users)
CREATE POLICY "Public can insert cases" ON public.cases FOR INSERT WITH CHECK (true);

-- Similar for Evidence inserted by public
CREATE POLICY "Public can insert evidence" ON public.evidence FOR INSERT WITH CHECK (true);

-- Evidence viewing: matching case viewing logic
CREATE POLICY "Admins can view all evidence" ON public.evidence FOR SELECT
    USING (EXISTS (SELECT 1 FROM public.users WHERE users.id = auth.uid() AND users.role = 'ADMIN'));

CREATE POLICY "Officers can view case evidence" ON public.evidence FOR SELECT
    USING (EXISTS (SELECT 1 FROM public.cases c WHERE c.id = evidence.case_id AND c.assigned_officer_id = auth.uid()));

-- Notes: Officers see all notes for their cases, admins see all
CREATE POLICY "Admins can view all notes" ON public.case_notes FOR SELECT
    USING (EXISTS (SELECT 1 FROM public.users WHERE users.id = auth.uid() AND users.role = 'ADMIN'));

CREATE POLICY "Officers can view notes on assigned cases" ON public.case_notes FOR SELECT
    USING (EXISTS (SELECT 1 FROM public.cases c WHERE c.id = case_notes.case_id AND c.assigned_officer_id = auth.uid()));

-- Inserting notes: Officers can insert notes to their cases
CREATE POLICY "Officers can insert notes on assigned cases" ON public.case_notes FOR INSERT
    WITH CHECK (
        author_id = auth.uid() AND
        EXISTS (SELECT 1 FROM public.cases c WHERE c.id = case_id AND c.assigned_officer_id = auth.uid())
    );
