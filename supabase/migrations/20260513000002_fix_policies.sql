-- Catch-up migration to ensure policies are applied on remote
-- 1. Enable RLS on all tables (idempotent)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.definitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.policy_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evidence ENABLE ROW LEVEL SECURITY;

-- 2. Basic RLS Policies
DROP POLICY IF EXISTS "Public definitions are viewable by everyone" ON public.definitions;
CREATE POLICY "Public definitions are viewable by everyone" ON public.definitions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public policy docs are viewable by everyone" ON public.policy_documents;
CREATE POLICY "Public policy docs are viewable by everyone" ON public.policy_documents FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can insert cases" ON public.cases;
CREATE POLICY "Public can insert cases" ON public.cases FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public can insert evidence" ON public.evidence;
CREATE POLICY "Public can insert evidence" ON public.evidence FOR INSERT WITH CHECK (true);

-- 3. Development: Allow anon to read for demo
DROP POLICY IF EXISTS "Development: Allow anon to read cases" ON public.cases;
CREATE POLICY "Development: Allow anon to read cases" ON public.cases FOR SELECT USING (true);

DROP POLICY IF EXISTS "Development: Allow anon to read users" ON public.users;
CREATE POLICY "Development: Allow anon to read users" ON public.users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Development: Allow anon to read evidence" ON public.evidence;
CREATE POLICY "Development: Allow anon to read evidence" ON public.evidence FOR SELECT USING (true);

DROP POLICY IF EXISTS "Development: Allow anon to read case notes" ON public.case_notes;
CREATE POLICY "Development: Allow anon to read case notes" ON public.case_notes FOR SELECT USING (true);
