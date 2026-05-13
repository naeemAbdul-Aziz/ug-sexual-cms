-- Relax RLS for local development testing
-- This allows the 'anon' role to read data so the Admin demo works without complex auth setup

CREATE POLICY "Development: Allow anon to read cases" ON public.cases FOR SELECT USING (true);
CREATE POLICY "Development: Allow anon to read users" ON public.users FOR SELECT USING (true);
CREATE POLICY "Development: Allow anon to read evidence" ON public.evidence FOR SELECT USING (true);
CREATE POLICY "Development: Allow anon to read case notes" ON public.case_notes FOR SELECT USING (true);
