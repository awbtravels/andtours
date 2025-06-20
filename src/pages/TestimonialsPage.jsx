// src/pages/TestimonialsPage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

export default function TestimonialsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">What Our Clients Say</h1>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-2 text-yellow-500">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
        <p className="text-gray-700 italic">“AWB Travels made my visa process smooth and stress-free. I recommend them to everyone.”</p>
        <p className="mt-2 font-semibold">— James Okoro</p>
      </div>

      {/* Add more real testimonials in future here */}
    </div>
  );
}
