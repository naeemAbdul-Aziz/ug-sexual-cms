# UG Gender Policy CMS — API Documentation (Supabase)

The system utilizes the auto-generated **Supabase PostgREST API** for data management. This document outlines how the frontend should interact with the backend using the Supabase JS SDK.

## 1. Public Content & Policy Reference
Endpoints serving the public-facing educational portals. No authentication required.

| Feature | Supabase Table | SDK Method | Description |
|---|---|---|---|
| Definitions | `definitions` | `.from('definitions').select('*')` | Retrieves all official terms and acronyms. |
| Offences | `offences` | `.from('offences').select('*')` | Retrieves the official policy offences. |
| Documents | `policy_documents` | `.from('policy_documents').select('*')` | Retrieves archived policy versions and PDFs. |

---

## 2. Complaint Intake & Reporting (Public)
Handles the ingestion of grievances from the university community.

| Feature | SDK Method | Description |
|---|---|---|
| New Complaint | `.from('cases').insert(payload)` | Submits a new formal or informal grievance. |
| Evidence Upload | `storage.from('evidence').upload(path, file)` | Uploads evidence files to the secure bucket. |
| Case Status | `.from('cases').select('status').eq('ref_id', id)` | Allows complainants to check status via Reference ID. |

---

## 3. Authentication & Authorization
Powered by **Supabase Auth (GoTrue)**.

| Feature | SDK Method | Description |
|---|---|---|
| Login | `auth.signInWithPassword()` | Authenticates staff and issues secure JWTs. |
| Logout | `auth.signOut()` | Invalidates the current session. |
| Session | `auth.getSession()` | Retrieves the active user session and RBAC role. |

---

## 4. Case Management (Admin & Officers)
Lifecycle management of submitted cases. Access is governed by **PostgreSQL Row Level Security (RLS)**.

| Feature | SDK Method | Access Level |
|---|---|---|
| List Cases | `.from('cases').select('*')` | Admin (Global), Officer (Assigned Only) |
| Update Status | `.from('cases').update({ status: '...' }).eq('id', id)` | Admin/Officer |
| Assign Officer | `.from('cases').update({ assigned_officer_id: id }).eq('id', caseId)` | Admin Only |
| Internal Notes | `.from('case_notes').insert(payload)` | Officer |

---

## 5. Reporting & Analytics
Aggregated metrics for the EOB Secretariat.

| Feature | SDK Method | Access Level |
|---|---|---|
| Dashboard Metrics | `.rpc('get_dashboard_stats')` | Admin Only |
| Annual Export | `.from('cases').select('*').csv()` | Admin Only |

---

## Security Implementation
- **Row Level Security (RLS)**: All data access is filtered at the database level based on the JWT `auth.uid()`.
- **Audit Logging**: Every update to a case is automatically timestamped and tracked.
- **Storage Protection**: Evidence buckets are private; signed URLs are required for viewing media.
