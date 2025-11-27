import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardNew from './components/DashboardNew';
import DisplayNew from './components/DisplayNew';
import DonateNew from './components/DonateNew';
import AuthenticateNew from './components/AuthenticateNew';
import CreateFundNew from './components/CreateFundNew';

const App = () => {
  return (
    <div className="p-4 bg-[#13131a] min-h-screen text-white">
      <Routes>
        <Route path="/" element={<DashboardNew />} />
        <Route path="/dashboard" element={<DashboardNew />} />
        <Route path="/campaigns" element={<DisplayNew />} />
        <Route path="/donate/:id" element={<DonateNew />} />
        <Route path="/login" element={<AuthenticateNew />} />
        <Route path="/create-campaign" element={<CreateFundNew />} />
      </Routes>
    </div>
  );
};

export default App;