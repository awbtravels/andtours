// src/pages/HomePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="bg-white text-charcoal min-h-screen font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo.png" alt="AWB Logo" className="h-10 w-auto" />
          </Link>
          <div className="text-sm font-semibold text-red-primary">
            AWB Travels and Tours Ltd
            <p className="text-xs text-gray-600">RC: 7177769</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-charcoal font-medium">
          <Link to="/" className="hover:text-red-primary">Home</Link>
          <Link to="/consultation" className="hover:text-red-primary">Booking Consultation</Link>
          <Link to="/flights" className="hover:text-red-primary">Flight</Link>
          <Link to="/hotels" className="hover:text-red-primary">Hotel</Link>
          <Link to="/insurance" className="hover:text-red-primary">Insurance</Link>
          <a href="#services" className="hover:text-red-primary">Services</a>
          <a href="#news" className="hover:text-red-primary">News</a>
          <Link to="/about" className="hover:text-red-primary">About</Link>
          <Link to="/team" className="hover:text-red-primary">Our Team</Link>
          <a href="#contact" className="hover:text-red-primary">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-charcoal focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-6 py-4 bg-white shadow text-sm text-charcoal font-medium space-y-2">
          <Link to="/" className="block hover:text-red-primary">Home</Link>
          <Link to="/consultation" className="block hover:text-red-primary">Booking Consultation</Link>
          <Link to="/flights" className="block hover:text-red-primary">Flight</Link>
          <Link to="/hotels" className="block hover:text-red-primary">Hotel</Link>
          <Link to="/insurance" className="block hover:text-red-primary">Insurance</Link>
          <a href="#services" className="block hover:text-red-primary">Services</a>
          <a href="#news" className="block hover:text-red-primary">News</a>
          <Link to="/about" className="block hover:text-red-primary">About</Link>
          <Link to="/team" className="block hover:text-red-primary">Our Team</Link>
          <a href="#contact" className="block hover:text-red-primary">Contact</a>
        </nav>
      )}

      {/* Hero & Content */}
      {/* (same as before) */}

      <Footer />
    </main>
  );
}
