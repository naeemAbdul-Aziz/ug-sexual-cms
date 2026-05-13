# UG Gender Policy Case Management System

## 1. Project Scope

The University of Ghana (UG) Gender Policy Case Management System is an interactive reference website and secure administrative portal built to digitize the UG Gender Policy (2023) and facilitate the reporting and tracking of gender-based grievances.

### What is In-Scope
- **Interactive Policy Reference**: Digitizing the official UG Gender Policy into an accessible, searchable, and navigable web portal covering the Overview, Principles, Definitions, Institutions, Complaints, Offences, and Monitoring & Evaluation.
- **Secure Incident Reporting**: A multi-step frontend wizard for users to submit informal mediation requests or formal adjudication complaints, including narrative input and evidence uploads. The form explicitly maps to the 9 official policy offences.
- **Administrative Case Management Registry**: A secure dashboard for the Equal Opportunities Board (EOB) to track, update, and manage the lifecycle of complaints (from Initial Review to Resolution) while strictly monitoring the 21-day adjudication window.
- **Policy & Data Management**: Admin-facing tools to manage the official definitions registry, track annual analytics (cases resolved, average resolution time, gender audits), and maintain version control of policy documents.
- **Brand Alignment**: UI/UX implementation that strictly adheres to the University of Ghana's visual identity (UG Blue `#003B7A` and UG Gold `#C9A84C`) while maintaining a premium, authoritative, and sleek design language.

### What is Out-of-Scope
- **External Legal Adjudication**: The system is strictly an internal university compliance tool. It does not replace or interface with external legal mechanisms (e.g., Police, Courts, CHRAJ).
- **Automated HR/SIS Integration**: The system currently operates as a standalone registry. It does not automatically pull from or push to the university's central Student Information System (SIS) or Human Resources databases for party lookup.
- **In-App Real-Time Communication**: While the system tracks the status of mediations and investigations, the actual communication, mediation sessions, and hearings occur offline or via official university email channels, not within a real-time chat interface on the platform.

---

## 2. User Types

The platform is designed to serve multiple distinct user groups, each with specific access levels and capabilities.

### 1. The University Community (Public Users / Complainants)
**Who they are**: Students, academic faculty, administrative staff, prospective members, interns, and campus businesses.
**Capabilities**:
- Browse, search, and read the interactive Gender Policy documentation.
- Understand their rights, protections (e.g., non-retaliation, confidentiality), and the official definitions of policy terms.
- Submit informal or formal complaints via the secure reporting portal.
- Receive a secure Reference ID (e.g., `#GBC-24-0812`) and timeline expectations for EOB Case Officer assignment.

### 2. EOB Case Officers & Investigators
**Who they are**: Dedicated personnel appointed by the EOB Secretariat to handle and investigate specific grievances.
**Capabilities**:
- Access assigned cases within the administrative registry.
- Track investigation timelines and receive alerts when cases approach the 21-day adjudication deadline.
- Update the operational status of cases (e.g., Initial Review, Investigation, Panel Hearing, Recommendation, Resolution).
- Review submitted narratives, evidence, and witness information securely.

### 3. System Administrators (EOB Secretariat / CEGENSA)
**Who they are**: High-level administrative staff overseeing the implementation of the Gender Policy.
**Capabilities**:
- Global view of the Case Management Registry with advanced filtering by Offence Type, Case Type, and Priority.
- Assign new filings to specific EOB Case Officers.
- Initiate new proceedings manually from the dashboard.
- Manage the global Definition Registry (add, edit, or delete official policy terms and acronyms).
- Access the Reporting & Analytics console to view annual metrics (e.g., cases resolved, compliance rates) for the Gender Equality Annual Report.
- Manage policy document archives and version control.

---

## 3. System Architecture

The UG Gender Policy Case Management System is built on a modern, decoupled web architecture designed for scalability, security, and institutional-grade reliability.

### Frontend Layer (Client & Admin)
- **Framework**: React / Vite (TypeScript)
- **Styling**: Tailwind CSS tailored to the UG Brand Guidelines (UG Blue, UG Gold).
- **Structure**: A monolithic Single Page Application (SPA) with distinct routing zones:
  - **Public Zone (`/`)**: Educational content, definitions, policy principles, and the reporting portal.
  - **Admin Zone (`/admin/*`)**: Secure, authenticated case registry, dashboards, and reporting metrics.

### Backend Layer (Supabase)
The system leverages **Supabase** for a unified backend-as-a-service:
- **API Architecture**: Auto-generated RESTful API via PostgREST.
- **Authentication**: Supabase Auth (GoTrue) with Row Level Security (RLS).
- **Core Services**:
  - **Case Management**: Handled via PostgreSQL with RLS policies.
  - **Storage**: Supabase Storage for encrypted evidentiary documents (PDFs, images, videos).
  - **Email**: Integrated via Supabase Auth (local testing via Mailpit).

---

## 4. Data Lifeline & Pipeline

The system's data lifeline ensures strict confidentiality, integrity, and timely processing of sensitive grievance information.

### 4.1 Data Ingestion (The Pipeline)
1. **Intake**: A complainant fills out the secure multi-step wizard (`/report`).
2. **Sanitization**: The frontend sanitizes inputs before transmitting the JSON payload via HTTPS to the API.
3. **Storage**: Textual grievance data is written to the relational database. Evidentiary media files are streamed securely to cloud blob storage, saving a reference URI in the database.
4. **Referencing**: The system generates a randomized, anonymous Reference ID (e.g., `#GBC-24-0812`) sent back to the client as their receipt.

### 4.2 Data Processing (The Lifeline)
- **SLA Tracking**: The moment a record enters the database, a background process initiates the 21-day adjudication timer.
- **Routing**: The case appears in the "Initial Review" queue on the `AdminDashboard`. A System Administrator assigns an EOB Case Officer.
- **State Machine**: The case moves strictly through operational states governed by the policy: `Initial Review` -> `Investigation` -> `Panel Hearing` -> `Recommendation` -> `Resolution`.

### 4.3 Data Egress & Retention
- **Exporting**: Administrators can export anonymized aggregate data for the annual Gender Equality Report.
- **Retention Policy**: Data is held securely based on university retention policies, with highly restricted database access isolated from standard university data networks.

---

## 5. Complete End-to-End Flow of Data

The following represents the complete lifecycle of a single grievance through the UG Gender Policy Case Management System.

### Phase 1: Initiation & Triage
1. **Complainant Action**: The complainant reads their rights in the public portal and initiates a **Formal** or **Informal** complaint.
2. **Data Submission**: The complainant submits details (Offence Type, Date, Location, Narrative, Witnesses) and attaches evidence files.
3. **System Acknowledgement**: The system commits the data, generates a Reference ID (`#GBC-24-0812`), and returns a confirmation screen guaranteeing a 7-working-day contact window.

### Phase 2: Assignment & Review
4. **Admin Notification**: The new filing appears on the EOB Administrator's dashboard under "Initial Review".
5. **Officer Assignment**: The EOB Administrator assigns a dedicated EOB Case Officer to the grievance.
6. **Complainant Contact**: The Case Officer reaches out to the complainant (via official offline channels/email) within 7 working days, satisfying the first SLA. The case status updates to `Investigation`.

### Phase 3: Investigation & Hearing
7. **Respondent Notification**: The system/Officer formally notifies the respondent, requesting a written statement within 7 days.
8. **Evidence Gathering**: The Case Officer updates internal notes on the dashboard and uploads any additional evidence gathered during interviews.
9. **Panel Constitution**: If the case requires it (Formal path), an Adjudication Panel is formed. The case status updates to `Panel Hearing`. The dashboard tracks the hearing schedule and the 21-day deadline.

### Phase 4: Resolution & Archival
10. **Recommendation**: Post-hearing, the EOB submits recommendations to the Vice-Chancellor. Case status shifts to `Awaiting Outcome` or `Recommendation`.
11. **Final Decision**: The Vice-Chancellor acts on the recommendation. The case is marked as `Resolved` in the system.
12. **Analytics Aggregation**: The resolved case data strips personally identifiable information (PII) to feed into the aggregated Annual Reporting Dashboard metrics (e.g., total cases resolved, average resolution days).
