// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// TEMPORARY PAGE ROUTES
const Home = () => <div className="p-6 text-xl">Welcome to AWB Travels and Tours</div>;
const Consultation = () => <div className="p-6 text-xl">Consultation Page</div>;
const Flights = () => <div className="p-6 text-xl">Flights Page</div>;
const Hotels = () => <div className="p-6 text-xl">Hotels Page</div>;
const Insurance = () => <div className="p-6 text-xl">Insurance Page</div>;
const Services = () => <div className="p-6 text-xl">Our Services</div>;
const About = () => <div className="p-6 text-xl">About Us</div>;
const Team = () => <div className="p-6 text-xl">Our Team</div>;
const News = () => <div className="p-6 text-xl">Immigration News</div>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="consultation" element={<Consultation />} />
        <Route path="flights" element={<Flights />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  );
}
