// src/pages/AboutPage.jsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-white text-charcoal min-h-screen px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-red-primary">
          About AWB Travels and Tours Ltd
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
          AWB Travels and Tours Ltd (RC: 7177769) is a travel agency established on April 27, 2020. 
          Our purpose is to instill remarkable experiences in the memories of our customers.
          We began by facilitating Student, Visitor, Conference/Business, Medical, and Working Visas,
          helping thousands secure successful admissions and travel abroad.
          <br /><br />
          Our team members show professionalism and integrity, ensuring smooth travel experiences.
          We also handle hotel reservations, tour packages, international passports, car rentals,
          business registration (CAC), and up-to-date immigration tips.
          <br /><br />
          Our vision is to become a fully digital one-stop travel platform for clients across the world.
        </p>
      </section>
    </main>
  );
}
