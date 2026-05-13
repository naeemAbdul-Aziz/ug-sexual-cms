# UG Gender Policy CMS — Core Features & Functionality

This document details the core features of the UG Gender Policy Case Management System, broken down by the Public Client Portal and the Secure Administrative Dashboard.

---

## 1. Client-Side Features (Public Portal)

The public portal is designed to educate the university community on the Gender Policy and provide a frictionless, secure way to report grievances.

### 1.1 Interactive Policy Reference
- **Digitized Policy Document**: The entire UG Gender Policy (2023) is broken down into digestible, navigable tabs (Overview, Policy Principles, Institutions & EOB, Complaints, Offences, Monitoring & Evaluation).
- **Accordion UI**: Complex sections (like the 4 core Policy Principles and Institutional roles) use collapsible accordions to prevent information overload.
- **Brand Consistency**: Adheres strictly to the UG visual identity (UG Blue `#003B7A` and UG Gold `#C9A84C`) to maintain institutional authority.

### 1.2 Live Definition Search (`/definitions`)
- **Real-Time Filtering**: Users can search through the 33 official policy terms and 5 acronyms.
- **Instant Feedback**: The list filters instantly as the user types, ensuring they understand complex policy terminology (e.g., "De facto equality", "Gender mainstreaming") without reading a massive PDF.

### 1.3 Secure Incident Reporting Wizard (`/report`)
- **Multi-Step Form**: A secure 5-step reporting wizard:
  1. **Choose Path**: Select between Informal (Mediation) or Formal (Adjudication). The system warns users that severe cases (like sexual harassment) must use the Formal route.
  2. **Details**: Select the exact Offence Type (mapped to the 9 official offences), Date, and Location.
  3. **Narrative**: Open text field to describe the incident and list potential witnesses.
  4. **Evidence Upload**: Users can attach multiple evidentiary files (Video/Audio, Emails, SMS, WhatsApp, Documents).
  5. **Review**: A final summary screen before secure submission.
- **Anonymous Reference ID**: Upon submission, the system generates a pseudo-anonymous Reference ID (e.g., `#GBC-24-0812`) for the user to keep as a receipt.
- **SLA Guarantee**: The confirmation screen explicitly informs the user that a dedicated EOB Case Officer will contact them within **7 working days**.

---

## 2. Admin-Side Features (EOB Dashboard)

The administrative portal (`/admin`) is a secure environment for the Equal Opportunities Board (EOB) Secretariat and assigned investigators to manage the lifecycle of grievances.

### 2.1 Case Management Registry (`/admin/cases`)
- **Centralized Data Grid**: A comprehensive table listing all active filings, showing Reference ID, Case Type (Formal/Informal), Party/Offence, Process Status, and the Assigned Officer.
- **Advanced Filtering**: Admins can filter the registry by *Offence Type* (the 10 incident types), *Case Type*, and *Priority* (Low, Medium, High, Critical).
- **SLA Timeline Tracking**: Visual progress bars track the **21-day adjudication deadline**. Cases reaching the deadline trigger a red sticky warning banner ("Take Immediate Action") at the top of the registry.

### 2.2 Operational Dashboard (`/admin/dashboard`)
- **High-Level Metrics**: Live counters showing current operational load:
  - *Active Filings* (Initial Review)
  - *Open Enquiries* (Investigation)
  - *Scheduled Proceedings* (Panel Hearing)
  - *Awaiting Outcome* (Resolution)
- **Quick Actions**: Shortcuts to initiate proceedings manually, export data, and view recent filings directly from the home screen.

### 2.3 Policy Terminology Manager (`/admin/definitions`)
- **CRUD Operations**: EOB Administrators can Add, Edit, or Delete official policy definitions and acronyms directly from the dashboard.
- **Single Source of Truth**: Changes made here immediately reflect on the public Client Portal's Definition Search, ensuring policy terminology is always up-to-date without needing a developer to deploy code.

### 2.4 Reporting & Analytics Engine (`/admin/reporting`)
- **Annual Metrics Aggregation**: Aggregates data required for the Vice-Chancellor's Gender Equality Annual Report.
  - *Cases Resolved* (per academic year)
  - *Average Resolution Time* (tracking adherence to the 21-day window)
  - *Gender Audits Completed*
  - *Policy Compliance Rates*
- **Version Control Archive**: A table tracking the official publication versions, release dates, effective dates, and amendments of the core Gender Policy.

### 2.5 Investigation & Note-Taking (Feature Deep-Dive)
- **Internal Audit Trail**: When an EOB Case Officer opens a specific case, they can log internal notes. 
- **Visibility Toggles**: Notes can be flagged as `Internal` (only for investigators) or `Panel` (to be included in the official dossier presented to the 3-member Adjudication Panel).
- **Evidence Management**: Officers can securely download the complainant's initial evidence and upload new evidence gathered during official interviews.
