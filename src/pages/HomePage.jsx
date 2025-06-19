// src/pages/HomePage.jsx import React from "react"; import Footer from "../components/Footer";

export default function HomePage() { return ( <main className="bg-white text-charcoal min-h-screen font-sans"> {/* HERO SECTION */} <section className="text-center px-6 py-20 bg-charcoal text-white"> <h1 className="text-3xl md:text-5xl font-bold mb-4"> Welcome to <span className="text-red-primary">AWB Travels and Tours</span> </h1> <p className="max-w-xl mx-auto text-base md:text-lg"> Your trusted partner for <strong>visa assistance, travel insurance, flight booking</strong>, hotel reservations, and more — <em>...fulfilling your dream life</em>. </p> <a
href="/consultation"
className="mt-6 inline-block bg-red-primary hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
> Book Visa Consultation </a> </section>

{/* SERVICES SECTION */}
  <section className="bg-white text-charcoal py-16 px-6">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-primary">
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-sm md:text-base">
      <ul className="space-y-2 list-disc list-inside">
        <li>✈️ Flight Itinerary Preparation (Local & International)</li>
        <li>😂 Visa Facilitation Services</li>
        <li>🛡️ Travel Insurance (medical, student, business, tourist, etc.)</li>
        <li>🏨 Hotel Reservation (Local & International)</li>
        <li>🌍 Tour Packages (Nigeria and abroad)</li>
        <li>🚘 Airport Protocol & Car Rentals</li>
      </ul>
      <ul className="space-y-2 list-disc list-inside">
        <li>🛃 International Passport Assistance</li>
        <li>📟 Business Registration (CAC)</li>
        <li>✅ Booking of Flights, Rides, Ships & Trains</li>
        <li>🎫 Tour & Event Ticketing Worldwide</li>
        <li>🌐 Tourist Center Bookings</li>
        <li>📰 Daily Immigration News & Travel Tips</li>
        <li>🚗 Buy & Sell Cars / Land / Property, Handle Logistics & Projects</li>
      </ul>
    </div>
  </section>

  {/* FOOTER */}
  <Footer />
</main>

); }
