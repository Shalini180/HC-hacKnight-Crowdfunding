import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardNew from './components/DashboardNew';
import DisplayNew from './components/DisplayNew';
import DonateNew from './components/DonateNew';
import AuthenticateNew from './components/AuthenticateNew';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#0a0a0f] min-h-screen flex flex-row">
      <div className="flex-1 max-sm:w-full max-w-[1440px] mx-auto sm:pr-5">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardNew />} />
          <Route path="/campaigns" element={<DisplayNew />} />
          <Route path="/donate/:id" element={<DonateNew />} />
          <Route path="/login" element={<AuthenticateNew />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;