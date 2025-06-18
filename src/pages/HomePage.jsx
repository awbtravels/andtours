// src/pages/HomePage.jsx
import React from "react";

export default function HomePage() {
  return (
    <main className="bg-white text-charcoal min-h-screen font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="AWB Logo" className="h-10 w-auto" />
          <div className="text-sm font-semibold text-red-primary">
            AWB Travels and Tours Ltd
            <p className="text-xs text-gray-600">RC: 7177769</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-charcoal font-medium">
          <a href="/" className="hover:text-red-primary">Home</a>
          <a href="/consultation" className="hover:text-red-primary">Booking Consultation</a>
          <a href="/flights" className="hover:text-red-primary">Flight</a>
          <a href="/hotels" className="hover:text-red-primary">Hotel</a>
          <a href="/insurance" className="hover:text-red-primary">Insurance</a>
          <a href="#services" className="hover:text-red-primary">Services</a>
          <a href="#news" className="hover:text-red-primary">News</a>
          <a href="#about" className="hover:text-red-primary">About</a>
          <a href="#contact" className="hover:text-red-primary">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center px-6 py-20 bg-charcoal text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-red-primary">AWB Travels and Tours</span>
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-lg">
          Your trusted partner for <strong>visa assistance, travel insurance, flight booking</strong>,
          hotel reservations, and more — <em>...fulfilling your dream life</em>.
        </p>
        <a
          href="/consultation"
          className="mt-6 inline-block bg-red-primary hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Book Visa Consultation
        </a>
      </section>
    </main>
  );
}
