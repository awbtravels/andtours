// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Page Components (You can create these files under /pages if missing)
import Home from "./pages/Home";
import About from "./pages/About";
import Consultation from "./pages/Consultation";
import Insurance from "./pages/Insurance";
import Team from "./pages/Team";
import News from "./pages/News";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="team" element={<Team />} />
          <Route path="news" element={<News />} />
          <Route path="flights" element={<Flights />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
