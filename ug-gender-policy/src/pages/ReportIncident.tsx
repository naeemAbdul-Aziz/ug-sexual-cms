import React from 'react';
import Layout from '../components/layout/Layout';

const ReportIncident: React.FC = () => {
  return (
    <Layout bgClass="bg-background">
      <main className="flex-grow pt-12 pb-stack-lg px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-stack-md">
            <h1 className="font-display-lg text-display-lg text-primary mb-unit">File a Formal Report</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Use this secure portal to report incidents of sexual harassment, discrimination, or related offences. Your submission will be handled with strict confidentiality by the Equal Opportunity Board (EOB).
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-stack-lg">
            <div className="flex items-center justify-between relative">
              {/* Background Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-outline-variant/30 z-0"></div>
              {/* Active Progress Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1 bg-secondary z-0"></div>

              {/* Steps */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary-container flex items-center justify-center font-label-md text-label-md border-2 border-surface">1</div>
                <span className="font-label-md text-label-md text-primary">Details</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md border-2 border-surface">2</div>
                <span className="font-label-md text-label-md text-on-surface-variant">Narrative</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md border-2 border-surface">3</div>
                <span className="font-label-md text-label-md text-on-surface-variant">Evidence</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md border-2 border-surface">4</div>
                <span className="font-label-md text-label-md text-on-surface-variant">Review</span>
              </div>
            </div>
          </div>

          {/* Confidentiality Banner */}
          <div className="bg-surface-variant border border-outline-variant rounded-xl p-stack-sm flex items-start gap-gutter mb-stack-md">
            <span className="material-symbols-outlined text-primary-container text-[32px] mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary-container mb-1">Strict Confidentiality Protocol Active</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Information provided in this form is encrypted and accessible only to authorized EOB personnel. Submitting a draft will securely store your progress locally until you choose to finalize.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="bg-surface-container-low rounded-xl border-t-4 border-secondary p-stack-md md:p-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Incident Details</h2>
            <form className="flex flex-col gap-gutter">
              {/* Field Group: Type */}
              <div className="flex flex-col gap-unit">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="incident-type">Nature of Incident <span className="text-error">*</span></label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md rounded-lg px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 transition-all shadow-none outline-none"
                    id="incident-type"
                    name="incident-type"
                    defaultValue=""
                  >
                    <option disabled value="">Select the primary category</option>
                    <option value="sexual_harassment">Sexual Harassment</option>
                    <option value="discrimination">Discrimination based on Gender</option>
                    <option value="retaliation">Retaliation</option>
                    <option value="assault">Sexual Assault</option>
                    <option value="other">Other / Unsure</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Field Group: Date */}
                <div className="flex flex-col gap-unit">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="incident-date">Date of Incident <span className="text-error">*</span></label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md rounded-lg px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 transition-all shadow-none outline-none"
                    id="incident-date"
                    name="incident-date"
                    type="date"
                  />
                  <span className="text-xs text-on-surface-variant mt-1">If unsure, provide an approximate date.</span>
                </div>

                {/* Field Group: Location */}
                <div className="flex flex-col gap-unit">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="incident-location">Location <span className="text-error">*</span></label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md rounded-lg px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 transition-all shadow-none outline-none"
                    id="incident-location"
                    name="incident-location"
                    placeholder="e.g., Balme Library, Main Campus"
                    type="text"
                  />
                </div>
              </div>

              {/* Field Group: Involved Parties */}
              <div className="flex flex-col gap-unit mt-stack-sm">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="involved-parties">Other Parties Involved (Optional)</label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md rounded-lg px-4 py-3 focus:border-primary focus:border-2 focus:ring-0 transition-all resize-y shadow-none outline-none"
                  id="involved-parties"
                  name="involved-parties"
                  placeholder="Names, roles (e.g., student, faculty), or descriptions if names are unknown."
                  rows={2}
                ></textarea>
              </div>

              {/* Divider */}
              <hr className="border-outline-variant my-stack-sm" />

              {/* Actions */}
              <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-gutter pt-unit">
                <button
                  className="w-full md:w-auto font-label-md text-label-md text-primary border border-primary px-6 py-3 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  Save Draft
                </button>
                <button
                  className="w-full md:w-auto font-label-md text-label-md text-on-primary bg-primary px-8 py-3 rounded-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-sm"
                  type="button"
                >
                  Continue to Narrative
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ReportIncident;
