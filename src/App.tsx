import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Trophy, DollarSign, Calendar, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Players from './components/Players';
import Payments from './components/Payments';
import Schedule from './components/Schedule';
import Reports from './components/Reports';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/players" element={<Players />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;