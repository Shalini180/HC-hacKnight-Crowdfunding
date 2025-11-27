import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/dashboard";
import CreateFund from "./pages/createfund/createfund";
// import Display from "./pages/Display/displayfunds";
// import Authenticate from "./pages/Authenticate/Authenticate";
// import Donate from "./pages/Donate/donate";
// import Reactcards from "./pages/Reactcards/reactcards";
// import Crustcreate from "./pages/Crustcreate/crustcreate";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";

// Binary Search: Minimal Imports
function App() {
  return (
    <HashRouter>
      <main className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createfund" element={<CreateFund />} />
          {/* <Route path="/displayfunds" element={<Display />} /> */}
          {/* <Route path="/donate" element={<Donate />} /> */}
          {/* <Route path="/reactcards" element={<Reactcards />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/crustcreate" element={<Crustcreate />} /> */}
          {/* <Route path="/Authenticate" element={<Authenticate />} /> */}
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;