// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ConsultationPage from "./pages/ConsultationPage"; // Placeholder if needed

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}
