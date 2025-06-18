// src/pages/HomePage.jsx import React from "react";

export default function HomePage() { return ( <main className="bg-white text-charcoal min-h-screen"> {/* Call-to-action section */} <section className="w-full py-12 flex flex-col items-center justify-center text-center px-4"> <h1 className="text-3xl md:text-5xl font-bold mb-4 text-red-primary"> Welcome to AWB Travels and Tours </h1> <p className="text-lg md:text-xl max-w-2xl mb-6"> Your one-stop solution for travel and visa consultancy. We help you navigate your global journey with ease, professionalism, and speed. </p> <a
href="/consultation"
className="bg-red-primary hover:bg-charcoal text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
> Book Visa Consultation </a> </section>

{/* Footer info */}
  <section className="bg-charcoal text-white text-center py-6">
    <p className="text-sm italic">
      “…fulfilling your dream life” &mdash; RC: 7177769
    </p>
  </section>
</main>

); }
