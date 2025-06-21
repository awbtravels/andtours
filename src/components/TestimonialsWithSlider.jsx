// src/components/TestimonialsWithSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "James O.",
    text: "I never believed I could get a Canada tourist visa so easily until I contacted AWB Travels. Everything was smooth, no stress at all.",
  },
  {
    name: "Sarah J.",
    text: "AWB Travels helped me secure my Canadian study visa. Honourable’s advice was top notch. I’m now studying in Toronto.",
  },
  {
    name: "Gabriel O.",
    text: "AWB made my Canada work visa journey very easy. Professional and always available. Highly recommended!",
  },
  {
    name: "Cynthia S.",
    text: "I got my UK tourist visa with no issues thanks to AWB Travels. They take each client like family and always have your back.",
  },
];

const TestimonialsWithSlider = () => {
  const imageSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div
      className="w-full bg-cover bg-center py-10 px-4 md:px-10"
      style={{ backgroundImage: `url('/bigben.jpeg')` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Testimonials Section */}
        <div className="md:w-1/2 bg-white/90 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-red-primary mb-6 text-center">
            What Our Clients Say
          </h2>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center text-yellow-500 mb-2 text-sm">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <p className="text-sm font-semibold text-gray-800 mt-2">
                — {testimonial.name}
              </p>
            </div>
          ))}
          <div className="text-right">
            <a
              href="/testimonials"
              className="text-red-primary text-sm underline hover:opacity-80"
            >
              Read More Testimonials
            </a>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className="md:w-1/2 w-full">
          <Slider {...imageSettings}>
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i}>
                <img
                  src={`/animation/${i + 1}.jpeg`}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsWithSlider;
