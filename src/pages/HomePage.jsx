// src/pages/HomePage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import TestimonialsWithSlider from "../components/TestimonialsWithSlider";

const featuredTestimonials = [
  {
    name: "James O.",
    message:
      "I never believed I could get a Canada tourist visa so easily until I contacted AWB Travels. Everything was smooth, no stress at all. Thank you for making my travel dream come true.",
    stars: 5,
  },
  {
    name: "Sarah J.",
    message:
      "AWB Travels helped me secure my Canadian study visa. Their advice, especially with honourable support were top notch. I’m now studying in Toronto. May God bless this company",
    stars: 5,
  },
  {
    name: "Gabriel O.",
    message:
      "AWB Travels and Tours Ltd made my Canada work visa journey very easy. Their team was professional and always ready to help. If you want to travel the right way, go through them!",
    stars: 5,
  },
  {
    name: "Cynthia S.",
    message:
      "I got my UK tourist visa with no wahala, all thanks to AWB Travels. They were fast and reliable. I’ve been to London and back. I highly recommend them to everyone, honestly.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-primary">
        Welcome to AWB Travels and Tours
      </h1>

      {/* Testimonials Preview Section */}
      <section className="bg-white rounded-xl shadow-md p-6">
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

      {/* Full Slider + Testimonials Section */}
      <div className="mt-12">
        <TestimonialsWithSlider />
      </div>
    </div>
  );
}
