import React from "react";
import TestimonialsWithSlider from "../components/TestimonialsWithSlider";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-primary pt-6">
        Welcome to AWB Travels and Tours
      </h1>

      {/* Testimonials and Image Slider Section */}
      <TestimonialsWithSlider />
    </div>
  );
}
