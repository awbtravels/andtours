// src/App.jsx import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"; import AboutPage from "./pages/AboutPage"; // When ready, import other pages like this: // import ContactPage from "./pages/ContactPage"; // import FlightsPage from "./pages/FlightsPage"; // import HotelsPage from "./pages/HotelsPage"; // import InsurancePage from "./pages/InsurancePage"; // import ServicesPage from "./pages/ServicesPage"; // import NewsPage from "./pages/NewsPage"; // import ConsultationPage from "./pages/ConsultationPage";

export default function App() { return ( <Router> <Routes> <Route path="/" element={<HomePage />} /> <Route path="/about" element={<AboutPage />} />

{/* Uncomment and add these when the pages are ready */}
    {/* <Route path="/contact" element={<ContactPage />} /> */}
    {/* <Route path="/flights" element={<FlightsPage />} /> */}
    {/* <Route path="/hotels" element={<HotelsPage />} /> */}
    {/* <Route path="/insurance" element={<InsurancePage />} /> */}
    {/* <Route path="/services" element={<ServicesPage />} /> */}
    {/* <Route path="/news" element={<NewsPage />} /> */}
    {/* <Route path="/consultation" element={<ConsultationPage />} /> */}
  </Routes>
</Router>

); }
