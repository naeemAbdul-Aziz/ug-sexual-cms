# UG Gender Policy CMS — API Documentation

This document outlines the exhaustive list of RESTful API endpoints required to power the end-to-end data flow of the UG Gender Policy Case Management System. The API is versioned (v1) and segmented by functional domains.

## 1. Public Content & Policy Reference
Endpoints serving the public-facing educational portals. No authentication required.

| Method | Endpoint | Description | Query Parameters / Payload |
|---|---|---|---|
| `GET` | `/api/v1/policy/definitions` | Retrieves all official policy terms and acronyms. | `?type=term\|acronym`, `?search=query` |
| `GET` | `/api/v1/policy/offences` | Retrieves the 9 official policy offences. | - |
| `GET` | `/api/v1/policy/documents` | Retrieves archived policy versions and PDFs. | - |

---

## 2. Complaint Intake & Reporting (Public)
Endpoints handling the ingestion of grievances from the university community.

| Method | Endpoint | Description | Payload / Response |
|---|---|---|---|
| `POST` | `/api/v1/complaints` | Submits a new formal or informal grievance. | **Body**: `{ path, incidentType, incidentDate, location, parties, narrative, witnesses, evidenceUris[] }`<br>**Returns**: `{ referenceId: "#GBC-24-0812" }` |
| `POST` | `/api/v1/complaints/evidence` | Handles multipart/form-data for evidence uploads. Streams to secure blob storage. | **Form-Data**: `file`<br>**Returns**: `{ uri: "s3://...", type: "video/mp4" }` |
| `GET` | `/api/v1/complaints/status/:refId` | (Optional) Allows complainants to securely check the high-level status of their case using their Reference ID. | **Returns**: `{ status: "Investigation", daysRemaining: 14 }` |

---

## 3. Authentication & Authorization
Endpoints handling Role-Based Access Control (RBAC) for EOB Officers and Administrators.

| Method | Endpoint | Description | Payload |
|---|---|---|---|
| `POST` | `/api/v1/auth/login` | Authenticates staff and issues secure HTTP-only JWTs. | **Body**: `{ email, password }` |
| `POST` | `/api/v1/auth/refresh` | Refreshes short-lived access tokens. | - |
| `POST` | `/api/v1/auth/logout` | Invalidates the current session token. | - |
| `GET` | `/api/v1/auth/me` | Retrieves the authenticated user's profile and RBAC role (`ADMIN`, `OFFICER`). | - |

---

## 4. Case Management (Admin & Officers)
Endpoints for the lifecycle management of submitted cases. Requires `Bearer <Token>`.

| Method | Endpoint | Description | Query Parameters / Payload |
|---|---|---|---|
| `GET` | `/api/v1/admin/cases` | Lists cases based on access level. Admins see all; Officers see assigned cases. | `?status=open`, `?type=informal`, `?offenceType=gbv`, `?priority=high`, `?page=1` |
| `POST` | `/api/v1/admin/cases` | Manually initiates a proceeding (used when EOB identifies an issue independently). | **Body**: `{ type, offenceType, parties, description }` |
| `GET` | `/api/v1/admin/cases/:id` | Retrieves full secure details of a specific grievance, including evidence URIs. | - |
| `PATCH` | `/api/v1/admin/cases/:id` | Updates operational properties of a case. | **Body**: `{ status, priority }`<br>*Statuses: Initial Review, Investigation, Panel Hearing, Recommendation, Resolved* |
| `POST` | `/api/v1/admin/cases/:id/assign` | Assigns an EOB Case Officer to a case. Triggers the 7-day contact notification. | **Body**: `{ officerId }` (Requires `ADMIN` role) |
| `GET` | `/api/v1/admin/cases/:id/notes` | Retrieves internal investigation notes for a case. | - |
| `POST` | `/api/v1/admin/cases/:id/notes` | Appends a new internal investigation note/log to the case timeline. | **Body**: `{ noteText, visibility: "internal\|panel" }` |
| `POST` | `/api/v1/admin/cases/:id/evidence` | Allows an investigating officer to upload new evidence discovered during the investigation. | **Form-Data**: `file` |

---

## 5. Global Policy Management (Admin Only)
Endpoints for managing the underlying taxonomies of the policy. Requires `ADMIN` role.

| Method | Endpoint | Description | Payload |
|---|---|---|---|
| `POST` | `/api/v1/admin/definitions` | Creates a new policy term or acronym. | **Body**: `{ term, definition, type }` |
| `PUT` | `/api/v1/admin/definitions/:id` | Updates an existing definition. | **Body**: `{ term, definition }` |
| `DELETE`| `/api/v1/admin/definitions/:id` | Removes a definition from the registry. | - |
| `POST` | `/api/v1/admin/documents` | Uploads a new policy version/PDF archive. | **Form-Data**: `file`, `versionNumber`, `effectiveDate` |

---

## 6. Reporting & Analytics (Admin Only)
Endpoints supporting the dashboard metrics and annual reporting requirements. Requires `ADMIN` role.

| Method | Endpoint | Description | Query Parameters |
|---|---|---|---|
| `GET` | `/api/v1/admin/analytics/dashboard` | Fetches real-time counts for active filings, open enquiries, and panel hearings. | - |
| `GET` | `/api/v1/admin/analytics/annual` | Fetches aggregated, anonymized metrics for the Gender Equality Annual Report. | `?academicYear=2024-2025` |
| `GET` | `/api/v1/admin/analytics/export` | Generates a CSV/PDF export of case resolution times, offence trends, and audit completions. | `?format=csv\|pdf` |

---

## 7. System & User Management (Admin Only)
Endpoints for managing EOB staff access. Requires `ADMIN` role.

| Method | Endpoint | Description | Payload |
|---|---|---|---|
| `GET` | `/api/v1/admin/users` | Lists all registered EOB Secretariat staff, Administrators, and Case Officers. | - |
| `POST` | `/api/v1/admin/users` | Provisions a new account for an EOB staff member. | **Body**: `{ name, email, role, department }` |
| `PUT` | `/api/v1/admin/users/:id` | Updates user details or role. | **Body**: `{ name, role, isActive }` |
| `DELETE`| `/api/v1/admin/users/:id` | Revokes access to the system for an offboarded staff member. | - |

---

## Technical Considerations

- **Idempotency**: `POST /api/v1/complaints/evidence` should support idempotent uploads to handle interrupted connections from mobile networks.
- **Security**: All `/admin/*` and `POST /api/v1/complaints` endpoints must enforce strict CSRF protection and rate limiting.
- **Data Obfuscation**: The `GET /api/v1/admin/analytics/*` endpoints must explicitly exclude all Personally Identifiable Information (PII) before returning data.
