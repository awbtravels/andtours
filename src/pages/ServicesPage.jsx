// src/pages/ServicesPage.jsx
import React from "react";

export default function ServicesPage() {
  return (
    <div className="bg-white text-charcoal px-6 py-12 font-sans">
      <h1 className="text-3xl font-bold text-red-primary mb-8 text-center">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-sm md:text-base">
        <ul className="space-y-2 list-disc list-inside">
          <li>✈️ Flight Itinerary Preparation (Local & International)</li>
          <li>🛂 Visa Facilitation Services</li>
          <li>🛡️ Travel Insurance (medical, student, business, tourist, etc.)</li>
          <li>🏨 Hotel Reservation (Local & International)</li>
          <li>🌍 Tour Packages (Nigeria and abroad)</li>
          <li>🚘 Airport Protocol & Car Rentals</li>
        </ul>
        <ul className="space-y-2 list-disc list-inside">
          <li>🛃 International Passport Assistance</li>
          <li>🧾 Business Registration (CAC)</li>
          <li>✅ Booking of Flights, Rides, Ships & Trains</li>
          <li>🎟️ Tour & Event Ticketing Worldwide</li>
          <li>🌐 Tourist Center Bookings</li>
          <li>📰 Daily Immigration News & Travel Tips</li>
          <li>🚗 Buy & Sell Cars / Land / Property, Handle Logistics & Projects</li>
        </ul>
      </div>
    </div>
  );
}
