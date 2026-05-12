# Cross-System Data Flow Audit
## Gender Policy Portal — Client ↔ Admin Consistency Report

---

## ✅ CONSISTENT — No Action Needed

| Data Point | Client Source | Admin Mirror | Status |
|---|---|---|---|
| **21-day adjudication window** | `Complaints.tsx` L61, `ReportIncident.tsx` L90, `Offences.tsx` L108 | `AdminCases.tsx` deadline bar, `AdminReporting.tsx` stat card, `AdminSettings.tsx` | ✅ Aligned |
| **7 working days notice** | `ReportIncident.tsx` L90, `Complaints.tsx` L61 | `AdminSettings.tsx` | ✅ Aligned |
| **Informal vs Formal path** | `ReportIncident.tsx` Step 1 (path selector), `Complaints.tsx` Mechanisms accordion | `AdminCases.tsx` `type` column (Formal/Informal) | ✅ Aligned |
| **Reference ID format `#GBC-YY-NNNN`** | `ReportIncident.tsx` `genRef()` L43–47 | `AdminCases.tsx` + `AdminDashboard.tsx` mock IDs | ✅ Aligned |
| **EOB as complaint body** | `Complaints.tsx`, `Offences.tsx`, `ReportIncident.tsx` | `AdminSettings.tsx` EOB roster, `AdminLayout.tsx` brand | ✅ Aligned |
| **Policy Version 1, March 2023** | `Overview.tsx` TAGS, `Monitoring.tsx` version table | `AdminReporting.tsx` version table, `AdminSettings.tsx` | ✅ Aligned |
| **Confidentiality & Protections** | `Complaints.tsx` Rights Cards, `Offences.tsx` sidebar | No admin-facing note needed (internal) | ✅ N/A |

---

## ⚠️ INCONSISTENCIES FOUND — Fixes Required

### 1. Incident Types: Client form vs. Admin filter categories
- **Client** (`ReportIncident.tsx`): 10 specific incident types (e.g. `sexist_remarks`, `gbv`, `pregnancy`)
- **Admin** (`AdminCases.tsx`): Filter uses `Student Cases / Administrative Staff / Academic Faculty` — **party-based, not type-based**
- **Fix**: Admin Case filter should add an "Offence Type" filter matching the client's 10 `INCIDENT_TYPES`.

### 2. Case Officer field: Missing on client confirmation
- **Client** (`ReportIncident.tsx` L84–91): Confirmation screen shows Reference ID, 7-day acknowledgement, 21-day window — but **no assigned Case Officer**.
- **Admin** (`AdminCases.tsx`): Has an `officer` field per case.
- **Fix**: Confirmation screen should say "You will be notified of your assigned EOB Case Officer within 7 working days."

### 3. Offences list vs. `INCIDENT_TYPES` in ReportIncident
- **`Offences.tsx`**: 9 defined offences (spec-verbatim).
- **`ReportIncident.tsx` `INCIDENT_TYPES`**: 10 items — adds "Frustrating/refusing to address a complaint" and "Other/Unsure" but maps differently (e.g. `care_leave` ≠ offence #5 label).
- **Fix**: Align `INCIDENT_TYPES` labels 1-to-1 with the 9 offences from `Offences.tsx`, plus an "Other / Unsure" option.

### 4. Admin Dashboard metrics vs. AdminReporting metrics
- **`AdminDashboard.tsx`**: Shows `12 Active Filings`, `28 Open Enquiries`, `08 Scheduled Proceedings`, `05 Awaiting Outcome` = **53 total active**.
- **`AdminReporting.tsx`**: Shows `47 Cases Resolved` for Academic Year 24/25.
- **`AdminCases.tsx`**: Header says `{rows.length} Active Records` = **4 records** (just the displayed mock rows).
- **Fix**: Standardize mock numbers. Dashboard should reflect 53 active + 47 resolved = 100 total. Cases page should say "Showing 4 of 53 Active Records."

### 5. `AdminDefinitions.tsx`: Only 11 of 33 terms loaded
- **`Definitions.tsx`** (client): 33 official terms.
- **`AdminDefinitions.tsx`**: Only 11 terms in `INITIAL_TERMS`.
- **Fix**: Populate `INITIAL_TERMS` with all 33 spec-verbatim terms.

### 6. Reporting "Cases Resolved" academic year label mismatch
- **`AdminReporting.tsx`**: Stat card says "Academic Year **24/25**" for 47 resolved.
- **`AdminDashboard.tsx`**: Header says "Academic Year **2024/2025**" — consistent in content but inconsistent in format.
- **Fix**: Standardize label format to "Academic Year 2024/2025" across all admin pages.

---

## 🔧 FIXES TO IMPLEMENT

| Priority | File | Change |
|---|---|---|
| High | `AdminCases.tsx` | Add "Offence Type" filter mapped to `INCIDENT_TYPES` |
| High | `AdminDefinitions.tsx` | Load all 33 policy terms |
| Medium | `ReportIncident.tsx` | Fix `INCIDENT_TYPES` to align 1:1 with `Offences.tsx` labels |
| Medium | `AdminCases.tsx` header | Show "Showing X of 53 Active Records" |
| Low | `ReportIncident.tsx` confirmation | Add Case Officer acknowledgement copy |
| Low | `AdminReporting.tsx` | Standardize academic year label format |
