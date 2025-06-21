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
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bigben.jpeg')" }}
    >
      <div className="bg-white bg-opacity-90 p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-red-primary">
          Welcome to AWB Travels and Tours
        </h1>

        {/* Testimonials + Animation Section */}
        <TestimonialsWithSlider testimonials={featuredTestimonials} />

        <div className="mt-8 text-center">
          <a
            href="/testimonials"
            className="text-red-primary font-medium hover:underline"
          >
            Read More Testimonials
          </a>
        </div>
      </div>
    </div>
  );
}
