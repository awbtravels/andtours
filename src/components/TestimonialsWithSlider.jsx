import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "James O.",
    message:
      "I never believed I could get a Canada tourist visa so easily until I contacted AWB Travels.",
    stars: 5,
  },
  {
    name: "Sarah J.",
    message:
      "AWB helped me secure my Canadian study visa. Now I’m studying in Toronto. May God bless them!",
    stars: 5,
  },
  {
    name: "Gabriel O.",
    message:
      "AWB made my Canada work visa journey very easy. Go through them!",
    stars: 5,
  },
  {
    name: "Cynthia S.",
    message:
      "I got my UK tourist visa with no wahala. Fast and reliable service. I’ve been to London and back!",
    stars: 5,
  },
];

const TestimonialsWithSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
  };

  return (
    <section
      className="py-10 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/bigben.jpeg')" }}
    >
      <div className="max-w-6xl mx-auto bg-white/80 rounded-xl shadow-lg p-6 md:flex items-center gap-8">
        {/* Testimonials */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-red-primary mb-4">
            What Our Clients Say
          </h2>
          <Slider {...sliderSettings}>
            {testimonials.map((t, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center text-yellow-500 mb-2">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="italic text-gray-800 mb-2">“{t.message}”</p>
                <p className="font-semibold text-charcoal">— {t.name}</p>
              </div>
            ))}
          </Slider>
          <div className="mt-4 text-sm text-center">
            <a
              href="/testimonials"
              className="text-red-primary font-semibold hover:underline"
            >
              View All Testimonials
            </a>
          </div>
        </div>

        {/* Sliding Animation */}
        <div className="md:w-1/2">
          <Slider
            {...{
              dots: false,
              infinite: true,
              speed: 800,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              fade: true,
            }}
          >
            {Array.from({ length: 40 }).map((_, index) => (
              <div key={index}>
                <img
                  src={`/animation/${index + 1}.jpg`}
                  alt={`slide-${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsWithSlider;
