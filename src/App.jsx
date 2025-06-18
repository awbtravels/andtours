// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

// Placeholder pages – You can create these files later in ./pages folder
const FlightsPage = () => <div className="p-8 text-charcoal">Flights Page Coming Soon</div>;
const HotelsPage = () => <div className="p-8 text-charcoal">Hotels Page Coming Soon</div>;
const InsurancePage = () => <div className="p-8 text-charcoal">Insurance Page Coming Soon</div>;
const ConsultationPage = () => <div className="p-8 text-charcoal">Consultation Page Coming Soon</div>;
const ServicesPage = () => <div className="p-8 text-charcoal">Services Page Coming Soon</div>;
const NewsPage = () => <div className="p-8 text-charcoal">News & Travel Tips Coming Soon</div>;
const ContactPage = () => <div className="p-8 text-charcoal">Contact Page Coming Soon</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
