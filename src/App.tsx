import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Client pages
import Overview from './pages/Overview';
import Principles from './pages/Principles';
import Complaints from './pages/Complaints';
import Institutions from './pages/Institutions';
import Offences from './pages/Offences';
import Monitoring from './pages/Monitoring';
import Definitions from './pages/Definitions';
import ReportIncident from './pages/ReportIncident';
import SearchResults from './pages/SearchResults';

// Admin pages
import AdminDashboard from './pages/AdminDashboard';
import AdminCases from './pages/AdminCases';
import AdminDocuments from './pages/AdminDocuments';
import AdminReporting from './pages/AdminReporting';
import AdminAudits from './pages/AdminAudits';
import AdminSettings from './pages/AdminSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public / Client */}
        <Route path="/"            element={<Overview />} />
        <Route path="/principles"  element={<Principles />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/definitions" element={<Definitions />} />
        <Route path="/complaints"  element={<Complaints />} />
        <Route path="/offences"    element={<Offences />} />
        <Route path="/monitoring"  element={<Monitoring />} />
        <Route path="/report"      element={<ReportIncident />} />
        <Route path="/search"      element={<SearchResults />} />

        {/* Admin */}
        <Route path="/admin"              element={<AdminDashboard />} />
        <Route path="/admin/cases"        element={<AdminCases />} />
        <Route path="/admin/documents"    element={<AdminDocuments />} />
        <Route path="/admin/reporting"    element={<AdminReporting />} />
        <Route path="/admin/audits"       element={<AdminAudits />} />
        <Route path="/admin/settings"     element={<AdminSettings />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
