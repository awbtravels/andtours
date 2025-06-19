// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ConsultationPage from "./pages/ConsultationPage";
import NewsPage from "./pages/NewsPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
