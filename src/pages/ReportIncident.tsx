import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

type Path = 'informal' | 'formal' | null;

interface FormData {
  path: Path;
  incidentType: string;
  incidentDate: string;
  incidentLocation: string;
  involvedParties: string;
  narrative: string;
  witnessNames: string;
  evidenceTypes: string[];
  evidenceNotes: string;
}

const STEPS = ['Choose Path', 'Details', 'Narrative', 'Evidence', 'Review'];

const EVIDENCE_OPTIONS = [
  { id: 'video', label: 'Video/Audio recording' },
  { id: 'email', label: 'Emails' },
  { id: 'sms', label: 'SMS messages' },
  { id: 'whatsapp', label: 'WhatsApp messages' },
  { id: 'social', label: 'Social media content' },
  { id: 'written', label: 'Written statements' },
  { id: 'other', label: 'Other documentary evidence' },
];

// Aligned 1:1 with the 9 official offences defined in src/pages/Offences.tsx
const INCIDENT_TYPES = [
  { value: 'sexist_remarks',    label: 'Make sexist remarks to one or more persons in private or in public.' },
  { value: 'promotion_denial',  label: "Deny anyone a promotion, grade, or award on grounds of one's gender." },
  { value: 'dismissal',         label: "Dismiss, terminate an employee's contract, apply sanctions, deny privileges, opportunities or grades, or threaten same on grounds of one's gender — or on the basis that the person has complained or reported an incident of gender discrimination or passed a fair comment on any matter, including an issue bordering on the application of this policy." },
  { value: 'pregnancy',         label: 'Discriminate against a member of the University on the basis of pregnancy or pregnancy-related conditions.' },
  { value: 'care_leave',        label: "Deny an employee entitled to leave for care work (childcare/elder care) on grounds of the person's gender (e.g. denying a male entitled to leave for care work)." },
  { value: 'gender_rules',      label: 'Introduce rules that consciously or unconsciously have or are likely to have a negative impact on a person or group of persons of one gender.' },
  { value: 'gbv',               label: 'Subject a person to an act of gender-based violence whether physical (including assault, deprivation of liberty), psychological, emotional, economic or sexual in nature, including coercive or transactional sex, rape or sexual assault.' },
  { value: 'unfair_treatment',  label: "Subject a member of the University including a subordinate or student to unfair treatment on the basis of the person's gender." },
  { value: 'frustrating',       label: 'Refuse, delay without just cause, or frustrate attempts to address a complaint or report of gender discrimination.' },
  { value: 'other',             label: 'Other / Unsure' },
];

const genRef = () => {
  const y = new Date().getFullYear().toString().slice(2);
  const n = String(Math.floor(Math.random() * 9000) + 1000);
  return `#GBC-${y}-${n}`;
};

const ReportIncident: React.FC = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [ref] = useState(genRef);
  const [form, setForm] = useState<FormData>({
    path: null,
    incidentType: '',
    incidentDate: '',
    incidentLocation: '',
    involvedParties: '',
    narrative: '',
    witnessNames: '',
    evidenceTypes: [],
    evidenceNotes: '',
  });

  const set = (key: keyof FormData, val: string | string[]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const toggleEvidence = (id: string) =>
    set('evidenceTypes', form.evidenceTypes.includes(id)
      ? form.evidenceTypes.filter((x) => x !== id)
      : [...form.evidenceTypes, id]);

  const progressPct = Math.round((step / (STEPS.length - 1)) * 100);

  if (submitted) {
    return (
      <Layout bgClass="bg-surface">
        <div className="max-w-2xl mx-auto px-margin-mobile md:px-0 py-24 text-center">
          <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="font-display-lg text-4xl text-primary mb-4">Complaint Submitted</h1>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Your complaint has been received and will be handled with strict confidentiality by the EOB Secretariat.
          </p>
          <div className="bg-white border-2 border-secondary p-8 mb-6 text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Reference Number</p>
            <p className="font-display-lg text-3xl text-primary font-bold">{ref}</p>
            <p className="text-on-surface-variant text-sm mt-3">
              Keep this reference number for your records. You will be notified of your assigned EOB Case Officer within <strong className="text-primary">7 working days</strong> and the investigation will be completed within <strong className="text-primary">21 working days</strong>.
            </p>
          </div>
          {/* What happens next — mirrors Admin Case lifecycle */}
          <div className="bg-surface-container-low border border-outline-variant p-6 mb-8 text-left space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4">What Happens Next</p>
            {[
              { icon: 'person_search',    label: 'Case Officer Assigned',   desc: 'A dedicated EOB Case Officer will be assigned to your case and will contact you within 7 working days.' },
              { icon: 'gavel',            label: 'Investigation Opened',     desc: 'If your complaint proceeds to formal adjudication, a 3-member Adjudication Panel will be constituted.' },
              { icon: 'timer',            label: '21-Day Resolution Window', desc: 'The formal investigation will be concluded within 21 working days. You will receive notice of any hearing at least 7 working days in advance.' },
              { icon: 'lock',             label: 'Strict Confidentiality',   desc: 'All parties — including you, the respondent, and any witnesses — are bound by confidentiality throughout proceedings.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className="font-bold text-primary text-[12px] uppercase tracking-wide">{label}</p>
                  <p className="text-on-surface-variant text-sm mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.print()}
              className="border border-primary text-primary px-8 py-3 font-bold text-[12px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              Download Receipt
            </button>
            <a href="/" className="bg-primary text-on-primary px-8 py-3 font-bold text-[12px] uppercase tracking-widest hover:brightness-110 transition-all">
              Return to Home
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout bgClass="bg-surface">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-0 py-16">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-display-lg text-4xl text-primary mb-2">File a Formal Report</h1>
          <p className="text-on-surface-variant text-sm">
            Use this secure portal to report incidents of gender discrimination or related offences. Handled with strict confidentiality by the EOB.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-3">
            {STEPS.map((s, i) => (
              <span key={s} className={`text-[10px] font-bold uppercase tracking-wider ${i === step ? 'text-primary' : i < step ? 'text-secondary' : 'text-on-surface-variant'}`}>
                {s}
              </span>
            ))}
          </div>
          <div className="h-1.5 bg-outline-variant/40 w-full">
            <div className="h-1.5 bg-secondary transition-all duration-500" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* Confidentiality banner */}
        <div className="bg-primary/5 border border-primary/20 p-5 flex items-start gap-4 mb-10">
          <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          <div>
            <p className="font-bold text-primary text-[12px] uppercase tracking-wider mb-1">Strict Confidentiality Protocol Active</p>
            <p className="text-on-surface-variant text-sm">All information is accessible only to authorised EOB personnel. Your identity is protected throughout the process.</p>
          </div>
        </div>

        {/* ── STEP 0: Choose path ── */}
        {step === 0 && (
          <div>
            <h2 className="font-headline-md text-2xl text-primary mb-3">How would you like to proceed?</h2>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
              The University offers two resolution mechanisms. For sexual harassment or grievous acts, the informal route does not apply — choose Formal directly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => { set('path', 'informal'); setStep(1); }}
                className="text-left border-2 border-outline-variant hover:border-secondary p-8 bg-white transition-all group"
              >
                <span className="material-symbols-outlined text-secondary text-[32px] mb-4 block group-hover:scale-110 transition-transform">handshake</span>
                <h3 className="font-bold text-primary text-[15px] uppercase tracking-wide mb-2">Informal / Mediation</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Suitable for disputes that may be resolved through direct discussion or mediation. Both parties must agree to participate.
                </p>
                <span className="inline-block mt-6 text-secondary font-bold text-[11px] uppercase tracking-widest border-b border-secondary pb-0.5">Select this path →</span>
              </button>

              <button
                onClick={() => { set('path', 'formal'); setStep(1); }}
                className="text-left border-2 border-primary p-8 bg-primary/[0.02] hover:bg-primary/5 transition-all group"
              >
                <span className="material-symbols-outlined text-primary text-[32px] mb-4 block group-hover:scale-110 transition-transform">gavel</span>
                <h3 className="font-bold text-primary text-[15px] uppercase tracking-wide mb-2">Formal / Adjudication</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Full EOB investigation, panel hearing and binding recommendation to the Vice-Chancellor. Required for sexual harassment.
                </p>
                <span className="inline-block mt-6 text-primary font-bold text-[11px] uppercase tracking-widest border-b border-primary pb-0.5">Select this path →</span>
              </button>
            </div>
            {form.path === 'informal' && (
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-5 text-sm text-amber-900">
                <strong>Note:</strong> If your matter involves sexual harassment or could result in loss of employment or irreparable harm, you must use the Formal route.
              </div>
            )}
          </div>
        )}

        {/* ── STEP 1: Details ── */}
        {step === 1 && (
          <div>
            <h2 className="font-headline-md text-2xl text-primary mb-2">Incident Details</h2>
            <p className="text-on-surface-variant text-sm mb-8">
              Proceeding as: <strong className="text-primary capitalize">{form.path} complaint</strong>.
            </p>
            <form className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[12px] uppercase tracking-wider text-on-surface" htmlFor="incident-type">Nature of Incident <span className="text-error">*</span></label>
                <div className="relative">
                  <select
                    id="incident-type"
                    value={form.incidentType}
                    onChange={(e) => set('incidentType', e.target.value)}
                    className="w-full appearance-none bg-white border border-outline-variant text-on-surface rounded-none px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 outline-none"
                  >
                    <option value="">Select the primary category</option>
                    {INCIDENT_TYPES.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[12px] uppercase tracking-wider text-on-surface" htmlFor="incident-date">Date of Incident <span className="text-error">*</span></label>
                  <input
                    id="incident-date"
                    type="date"
                    value={form.incidentDate}
                    onChange={(e) => set('incidentDate', e.target.value)}
                    className="bg-white border border-outline-variant text-on-surface px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 outline-none rounded-none"
                  />
                  <span className="text-xs text-on-surface-variant">If unsure, provide an approximate date.</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[12px] uppercase tracking-wider text-on-surface" htmlFor="incident-location">Location <span className="text-error">*</span></label>
                  <input
                    id="incident-location"
                    type="text"
                    value={form.incidentLocation}
                    onChange={(e) => set('incidentLocation', e.target.value)}
                    placeholder="e.g. Balme Library, Main Campus"
                    className="bg-white border border-outline-variant text-on-surface px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 outline-none rounded-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-[12px] uppercase tracking-wider text-on-surface" htmlFor="involved-parties">Other Parties Involved (Optional)</label>
                <textarea
                  id="involved-parties"
                  value={form.involvedParties}
                  onChange={(e) => set('involvedParties', e.target.value)}
                  placeholder="Names, roles (e.g. student, faculty), or descriptions if names are unknown."
                  rows={3}
                  className="bg-white border border-outline-variant text-on-surface px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 outline-none resize-y rounded-none"
                />
              </div>
            </form>
          </div>
        )}

        {/* ── STEP 2: Narrative ── */}
        {step === 2 && (
          <div>
            <h2 className="font-headline-md text-2xl text-primary mb-2">Written Statement</h2>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
              Describe the alleged discriminatory behaviour in detail. Include dates, places, and the names of those connected with the incident.
            </p>
            <form className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[12px] uppercase tracking-wider text-on-surface" htmlFor="narrative">Full Narrative <span className="text-error">*</span></label>
                <textarea
                  id="narrative"
                  value={form.narrative}
                  onChange={(e) => set('narrative', e.target.value)}
                  placeholder="Describe what happened in your own words. Be as specific as possible about dates, times, locations, and what was said or done."
                  rows={10}
                  className="bg-white border border-outline-variant text-on-surface px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 outline-none resize-y rounded-none text-sm leading-relaxed"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[12px] uppercase tracking-wider text-on-surface" htmlFor="witnesses">Witnesses (Optional)</label>
                <textarea
                  id="witnesses"
                  value={form.witnessNames}
                  onChange={(e) => set('witnessNames', e.target.value)}
                  placeholder="Names or descriptions of any persons who witnessed the incident."
                  rows={3}
                  className="bg-white border border-outline-variant text-on-surface px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 outline-none resize-y rounded-none"
                />
              </div>
            </form>
          </div>
        )}

        {/* ── STEP 3: Evidence ── */}
        {step === 3 && (
          <div>
            <h2 className="font-headline-md text-2xl text-primary mb-2">Evidence</h2>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
              Select all types of evidence you have available. Attach files or note where evidence can be retrieved.
            </p>
            <div className="mb-8">
              <p className="font-bold text-[12px] uppercase tracking-wider text-on-surface mb-4">Types of Evidence Available</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {EVIDENCE_OPTIONS.map(({ id, label }) => (
                  <label key={id} className={`flex items-center gap-4 p-4 border cursor-pointer transition-all ${form.evidenceTypes.includes(id) ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/40'}`}>
                    <input
                      type="checkbox"
                      checked={form.evidenceTypes.includes(id)}
                      onChange={() => toggleEvidence(id)}
                      className="accent-primary w-4 h-4 shrink-0"
                    />
                    <span className="text-sm text-on-surface font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* File upload area */}
            <div className="border-2 border-dashed border-outline-variant hover:border-primary/40 transition-colors p-10 flex flex-col items-center text-center mb-6">
              <span className="material-symbols-outlined text-primary/40 text-5xl mb-3">upload_file</span>
              <p className="font-bold text-on-surface text-[13px] mb-1">Attach Files</p>
              <p className="text-on-surface-variant text-xs">PDF, DOCX, JPG, PNG, MP4 — max 25 MB per file</p>
              <input type="file" multiple className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="mt-4 border border-primary text-primary px-6 py-2 font-bold text-[11px] uppercase tracking-widest cursor-pointer hover:bg-primary hover:text-white transition-all">
                Browse Files
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-[12px] uppercase tracking-wider text-on-surface" htmlFor="evidence-notes">Evidence Notes (Optional)</label>
              <textarea
                id="evidence-notes"
                value={form.evidenceNotes}
                onChange={(e) => set('evidenceNotes', e.target.value)}
                placeholder="Describe any evidence you have that cannot be uploaded (e.g. original documents, physical evidence). Note where it can be retrieved."
                rows={4}
                className="bg-white border border-outline-variant text-on-surface px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 outline-none resize-y rounded-none"
              />
            </div>
          </div>
        )}

        {/* ── STEP 4: Review ── */}
        {step === 4 && (
          <div>
            <h2 className="font-headline-md text-2xl text-primary mb-2">Review Your Submission</h2>
            <p className="text-on-surface-variant text-sm mb-8">Please review all details below before submitting. You may go back to make changes.</p>

            <div className="space-y-0 border border-outline-variant divide-y divide-outline-variant mb-10">
              {[
                { label: 'Complaint Type', val: form.path ? `${form.path.charAt(0).toUpperCase() + form.path.slice(1)} Complaint` : '—' },
                { label: 'Nature of Incident', val: INCIDENT_TYPES.find(t => t.value === form.incidentType)?.label || '—' },
                { label: 'Date', val: form.incidentDate || '—' },
                { label: 'Location', val: form.incidentLocation || '—' },
                { label: 'Parties Involved', val: form.involvedParties || 'None stated' },
                { label: 'Narrative', val: form.narrative ? `${form.narrative.slice(0, 120)}${form.narrative.length > 120 ? '…' : ''}` : '—' },
                { label: 'Witnesses', val: form.witnessNames || 'None stated' },
                { label: 'Evidence Types', val: form.evidenceTypes.length ? form.evidenceTypes.map(id => EVIDENCE_OPTIONS.find(e => e.id === id)?.label).join(', ') : 'None selected' },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-6 px-6 py-4 hover:bg-surface-container-low">
                  <span className="font-bold text-[11px] uppercase tracking-widest text-on-surface-variant w-36 shrink-0 pt-0.5">{label}</span>
                  <span className="text-on-surface text-sm leading-relaxed">{val}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 p-6 mb-8">
              <p className="text-on-surface-variant text-sm leading-relaxed">
                By submitting, you confirm that the information provided is truthful and accurate to the best of your knowledge. Fabricated or malicious reports are subject to disciplinary action under the Gender Policy.
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-outline-variant">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="flex items-center gap-2 font-bold text-[12px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed outline-none"
          >
            <span className="material-symbols-outlined text-[16px]">west</span>
            Back
          </button>

          {step < 4 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={step === 0 && !form.path}
              className="bg-primary text-on-primary px-8 py-3 font-bold text-[12px] uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed outline-none border-none"
            >
              Continue
              <span className="material-symbols-outlined text-[16px]">east</span>
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              className="bg-secondary text-white px-8 py-3 font-bold text-[12px] uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 outline-none border-none"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
              Submit Complaint
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ReportIncident;
