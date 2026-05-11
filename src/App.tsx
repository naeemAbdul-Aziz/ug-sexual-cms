import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './pages/Overview';
import Principles from './pages/Principles';
import Complaints from './pages/Complaints';
import Institutions from './pages/Institutions';
import Offences from './pages/Offences';
import Monitoring from './pages/Monitoring';
import Definitions from './pages/Definitions';
import ReportIncident from './pages/ReportIncident';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/principles" element={<Principles />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/definitions" element={<Definitions />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/offences" element={<Offences />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/report" element={<ReportIncident />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
