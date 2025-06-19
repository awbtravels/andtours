// src/components/Layout.jsx
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans text-charcoal bg-white">
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
          <Link to="/about" className="hover:text-red-primary">About</Link>
          <Link to="/team" className="hover:text-red-primary">Our Team</Link>
        </nav>

        {/* Mobile Menu Toggle */}
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
        <nav className="md:hidden px-6 py-4 bg-white shadow text-sm font-medium space-y-2">
          <Link to="/" className="block hover:text-red-primary">Home</Link>
          <Link to="/consultation" className="block hover:text-red-primary">Booking Consultation</Link>
          <Link to="/flights" className="block hover:text-red-primary">Flight</Link>
          <Link to="/hotels" className="block hover:text-red-primary">Hotel</Link>
          <Link to="/insurance" className="block hover:text-red-primary">Insurance</Link>
          <Link to="/about" className="block hover:text-red-primary">About</Link>
          <Link to="/team" className="block hover:text-red-primary">Our Team</Link>
        </nav>
      )}

      {/* MAIN PAGE CONTENT */}
      <div className="min-h-screen">
        <Outlet />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
