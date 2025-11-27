import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateFund from "./pages/createfund/createfund";
import Home from "./pages/Home/Home";

// Safe Mode App Component
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <main className="min-h-screen bg-slate-950">
          <Navbar />
          <div className="pt-4 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createfund" element={<CreateFund />} />
            </Routes>
          </div>
        </main>
      </HashRouter>
    );
  }
}

export default App;