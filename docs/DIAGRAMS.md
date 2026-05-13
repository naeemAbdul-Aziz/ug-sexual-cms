# UG Gender Policy CMS — Architecture Diagrams

This document contains the visual blueprints for the system's architecture. 

*Note: The **Entity-Relationship Diagram (ERD)** is located in the [`DB_SCHEMA.md`](./DB_SCHEMA.md) file.*

---

## 1. Data Flow Diagram (DFD)
**Purpose**: Illustrates how information moves through the system from the initial user input to permanent storage and administrative retrieval.

```mermaid
graph TD
    C((Complainant))
    EOB((EOB Officer))
    ADMIN((System Admin))
    
    FE[React Frontend Portal]
    API[RESTful API Backend]
    
    DB[(PostgreSQL Database)]
    S3[(Secure Blob Storage)]
    
    C -->|1. Submits grievance + evidence| FE
    FE -->|2. Sanitizes & sends JSON/Multipart| API
    
    API -->|3a. Saves evidence files| S3
    S3 -->|3b. Returns Secure URI| API
    
    API -->|4. Commits case data + URIs| DB
    API -->|5. Returns Reference ID| FE
    FE -->|6. Displays success receipt| C
    
    ADMIN -->|7. Views unassigned cases| API
    API -->|Fetches from DB| DB
    ADMIN -->|8. Assigns case to Officer| API
    
    EOB -->|9. Accesses assigned case| API
    API -->|Retrieves case + evidence| DB
    API -->|Fetches media| S3
    EOB -->|10. Updates status & adds notes| API
```

---

## 2. Sequence Diagram: Case Submission & 7-Day SLA
**Purpose**: Shows the step-by-step chronological interactions between the actors and the system, highlighting the critical 7-day notification SLA.

```mermaid
sequenceDiagram
    participant C as Complainant
    participant Sys as System
    participant SA as System Admin
    participant Off as EOB Case Officer

    C->>Sys: Submit Formal Complaint
    activate Sys
    Sys->>Sys: Generate Reference ID & Save
    Sys-->>C: Return Success (Ref ID + 7-Day SLA)
    deactivate Sys
    
    Sys->>SA: Dashboard Alert - New Initial Review
    
    SA->>Sys: Review Case details
    activate Sys
    SA->>Sys: Assign EOB Case Officer
    Sys->>Sys: Start 21-Day Adjudication Timer
    Sys-->>Off: Notification - New Case Assigned
    deactivate Sys
    
    Note over Off, C: Must happen within 7 working days
    Off->>C: Formal Contact & Acknowledgement
    
    Off->>Sys: Update Case Status to Investigation
    Sys-->>Sys: Log Timestamp (Audit Trail)
```

---

## 3. Use Case Diagram
**Purpose**: Defines the various actors in the system and the specific features (use cases) they are permitted to interact with based on their roles.

```mermaid
graph LR
    Public((University Community))
    Officer((EOB Case Officer))
    Admin((System Administrator))

    subgraph System Boundary
        UC1(Read Policy Definitions)
        UC2(Submit Grievance)
        UC3(View Assigned Cases)
        UC4(Update Case Status)
        UC5(Add Internal Notes / Evidence)
        UC6(Assign Officers to Cases)
        UC7(Manage Policy Terminology)
        UC8(View Annual Analytics)
        UC9(Manage User Accounts)
    end

    Public --> UC1
    Public --> UC2

    Officer --> UC3
    Officer --> UC4
    Officer --> UC5
    
    Admin --> UC3
    Admin --> UC4
    Admin --> UC5
    Admin --> UC6
    Admin --> UC7
    Admin --> UC8
    Admin --> UC9
    
    classDef publicClass fill:#EBF2FA,stroke:#003B7A,stroke-width:2px,color:#003B7A;
    classDef officerClass fill:#C9A84C,stroke:#003B7A,stroke-width:2px,color:#000000;
    classDef adminClass fill:#003B7A,stroke:#C9A84C,stroke-width:2px,color:#ffffff;
    
    class Public publicClass
    class Officer officerClass
    class Admin adminClass
```
