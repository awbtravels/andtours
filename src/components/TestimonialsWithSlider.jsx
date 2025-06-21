// src/components/TestimonialsWithSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mrs. Sarah",
    message: "AWB Travels helped me secure my visa stress-free. Excellent service!",
    rating: 5,
  },
  {
    name: "Anonymous Client",
    message: "Professional team, fast response, and reliable. Highly recommended!",
    rating: 5,
  },
];

const images = Array.from({ length: 30 }, (_, i) => `/animation/${i + 1}.jpeg`);

const TestimonialsWithSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    fade: true,
  };

  return (
    <div
      className="flex flex-col md:flex-row w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bigben.jpeg')" }}
    >
      {/* Testimonials Section */}
      <div className="md:w-1/2 w-full bg-white/90 p-6 md:p-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-red-primary mb-4">
          What Our Clients Say
        </h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <p className="text-lg italic">“{testimonial.message}”</p>
            <div className="flex items-center mt-2">
              {Array(testimonial.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              <span className="ml-2 text-sm font-semibold text-gray-700">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Slider Section */}
      <div className="md:w-1/2 w-full">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i}>
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsWithSlider;
