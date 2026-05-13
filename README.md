# UG Gender Policy Case Management System

An institutional-grade portal for the University of Ghana (UG) to digitize the Gender Policy (2023) and facilitate the secure reporting and tracking of gender-based grievances.

## 🚀 Local Development

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Required for local Supabase)

### 2. Setup Database (Supabase Local)
The backend runs locally via Docker. You only need to start this once per session.

```bash
# Start local Supabase containers
npx supabase start

# If you need to reset the DB to a clean state
npx supabase db reset
```

### 3. Setup Environment Variables
Copy the `anon key` printed by the command above into your `.env.local` file:

```env
VITE_SUPABASE_URL=http://127.0.0.1:54321
VITE_SUPABASE_ANON_KEY=your-local-anon-key
```

### 4. Start Frontend
```bash
npm install
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## 🏗️ Architecture & Features

### Core Modules
- **Public Policy Portal**: Searchable definitions and policy overview.
- **Incident Reporting**: Secure, multi-step wizard for filing complaints.
- **Admin Dashboard**: Case management registry for EOB Officers with SLA tracking.

### Tech Stack
- **Frontend**: React, TypeScript, Vite, Tailwind CSS.
- **Backend**: Supabase (PostgreSQL, Auth, Storage).
- **Security**: Row Level Security (RLS) and Role-Based Access Control (RBAC).

---

## 🌍 Deployment

### 1. Database Migration
To deploy your local schema to a production Supabase project:
```bash
# Link to your production project
npx supabase link --project-ref your-project-id

# Push migrations to the cloud
npx supabase db push
```

### 2. Frontend Deployment
Deploy to Vercel/Netlify and configure the Production Environment Variables:
- `VITE_SUPABASE_URL`: Your Supabase Project URL.
- `VITE_SUPABASE_ANON_KEY`: Your Supabase Project Anon Key.

---

## 📄 Documentation
Detailed technical documentation can be found in the `/docs` directory:
- [DB Schema](docs/DB_SCHEMA.md)
- [API Documentation](docs/API_DOCUMENTATION.md)
- [System Features](docs/FEATURES.md)
