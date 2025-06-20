// src/pages/TestimonialsPage.jsx import React from "react"; import { FaStar } from "react-icons/fa";

const testimonials = [ { name: "Mrs. Adebayo", rating: 5, feedback: "AWB Travels helped me get my visa hassle-free. Professional, fast, and reliable!", }, { name: "James O.", rating: 4, feedback: "Their consultation service is top-notch. Highly recommend for first-time travelers.", }, { name: "Fatima K.", rating: 5, feedback: "Everything from flight to insurance was well handled. Trustworthy team!", }, { name: "Michael B.", rating: 4, feedback: "They guided me throughout my Canada study visa application. Thank you!", }, { name: "Ngozi A.", rating: 5, feedback: "I booked my entire family’s Dubai holiday smoothly with AWB. Highly professional!", }, ];

export default function TestimonialsPage() { return ( <div className="p-6 max-w-6xl mx-auto text-charcoal"> <h1 className="text-3xl font-bold text-red-primary mb-6">Client Testimonials</h1> <p className="text-gray-600 mb-6"> See what our happy clients have to say about AWB Travels and Tours Ltd. </p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {testimonials.map((t, i) => (
      <div key={i} className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="flex gap-1 text-yellow-500 mb-2">
          {Array.from({ length: t.rating }).map((_, idx) => (
            <FaStar key={idx} />
          ))}
        </div>
        <p className="text-sm italic mb-3">"{t.feedback}"</p>
        <p className="text-sm font-semibold">– {t.name}</p>
      </div>
    ))}
  </div>
</div>

); }
