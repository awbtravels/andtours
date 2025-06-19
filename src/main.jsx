// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

// Temporary placeholder pages
const Home = () => <div className="p-6 text-xl">Welcome to AWB Travels</div>;
const About = () => <div className="p-6 text-xl">About Page</div>;
const Consultation = () => <div className="p-6 text-xl">Consultation Page</div>;
const Insurance = () => <div className="p-6 text-xl">Insurance Page</div>;
const Team = () => <div className="p-6 text-xl">Our Team Page</div>;
const News = () => <div className="p-6 text-xl">Immigration News Page</div>;
const Flights = () => <div className="p-6 text-xl">Flights Page</div>;
const Hotels = () => <div className="p-6 text-xl">Hotels Page</div>;
const Services = () => <div className="p-6 text-xl">Our Services Page</div>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
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
  </React.StrictMode>
);
