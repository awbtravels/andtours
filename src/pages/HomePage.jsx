// src/pages/HomePage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mrs. Adebayo",
    rating: 5,
    feedback: "AWB Travels helped me get my visa hassle-free. Professional, fast, and reliable!",
  },
  {
    name: "James O.",
    rating: 4,
    feedback: "Their consultation service is top-notch. Highly recommend for first-time travelers.",
  },
  {
    name: "Fatima K.",
    rating: 5,
    feedback: "Everything from flight to insurance was well handled. Trustworthy team!",
  },
];

const HomePage = () => {
  return (
    <div className="p-6 text-charcoal">
      <h1 className="text-2xl font-bold mb-4">Welcome to AWB Travels and Tours</h1>

      {/* Testimonials Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-bold text-red-primary mb-4">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="flex gap-1 text-yellow-500 mb-2">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic">"{t.feedback}"</p>
              <p className="text-sm mt-2 font-semibold">– {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
