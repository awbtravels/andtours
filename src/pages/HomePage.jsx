// src/pages/HomePage.jsx
import React from "react";
import TestimonialsWithSlider from "../components/TestimonialsWithSlider"; // ✅ Make sure this import path is correct

export default function HomePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-primary">
        Welcome to AWB Travels and Tours
      </h1>

      {/* 🔥 Testimonials With Image Slider Section */}
      <TestimonialsWithSlider />

      {/* ✅ Optional: You can still include the static preview section below or remove it if it's duplicate */}
      {/* 
      <section className="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-charcoal">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredTestimonials.map((t, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-2 text-yellow-500">
                {Array.from({ length: t.stars }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="italic text-gray-700 mb-1">“{t.message}”</p>
              <p className="font-medium text-charcoal">— {t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="/testimonials"
            className="text-red-primary font-medium hover:underline"
          >
            Read More Testimonials
          </a>
        </div>
      </section>
      */}
    </div>
  );
}
