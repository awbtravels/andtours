// src/components/TestimonialsWithSlider.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "James O.",
    message: "I never believed I could get a Canada tourist visa so easily until I contacted AWB Travels. Everything was smooth, no stress at all.",
    stars: 5,
  },
  {
    name: "Sarah J.",
    message: "AWB Travels helped me secure my Canadian study visa. Honourable's advice was top notch. I’m now studying in Toronto.",
    stars: 5,
  },
  {
    name: "Gabriel O.",
    message: "AWB made my Canada work visa journey very easy. Professional and always available. Highly recommended!",
    stars: 5,
  },
  {
    name: "Cynthia S.",
    message: "I got my UK tourist visa with no wahala. They were fast and reliable. Highly recommend AWB Travels to everyone.",
    stars: 5,
  },
];

export default function TestimonialsWithSlider() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
  };

  return (
    <div className="bg-cover bg-center py-12 px-4" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Testimonials Section */}
        <div className="space-y-6 bg-white bg-opacity-80 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-primary text-center">What Our Clients Say</h2>
          {testimonials.map((t, i) => (
            <div key={i} className="border border-gray-300 rounded-md p-4">
              <div className="flex text-yellow-500 mb-2">
                {Array.from({ length: t.stars }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="italic text-gray-700 mb-1">“{t.message}”</p>
              <p className="font-semibold text-charcoal">— {t.name}</p>
            </div>
          ))}
          <div className="text-center pt-2">
            <a href="/testimonials" className="text-red-primary font-medium hover:underline">See Full Testimonials</a>
          </div>
        </div>

        {/* Sliding Animation */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Slider {...sliderSettings}>
            {Array.from({ length: 40 }, (_, i) => (
              <div key={i}>
                <img
                  src={`/animation/${i + 1}.jpg`}
                  alt={`slide-${i + 1}`}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
