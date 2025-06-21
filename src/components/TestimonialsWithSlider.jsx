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
    text: "AWB Travels helped me secure my Canadian study visa. Their advice and support were top notch. I’m now studying in Toronto. May God bless this company.",
  },
  {
    name: "Gabriel O.",
    text: "AWB Travels and Tours Ltd made my Canada work visa journey very easy. Their team was professional and always ready to help.",
  },
  {
    name: "Cynthia S.",
    text: "I got my UK tourist visa with no wahala, all thanks to AWB Travels. I’ve been to London and back. Highly recommend them to everyone.",
  },
];

const TestimonialsWithSlider = () => {
  const imageUrls = Array.from({ length: 40 }, (_, i) => `/animation/${i + 1}.jpg`);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: false,
    fade: true, // Add fade-in effect
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch bg-white">
      {/* Testimonials */}
      <div className="md:w-1/2 p-6 bg-white text-charcoal">
        <h2 className="text-2xl md:text-3xl font-bold text-red-primary mb-6">What Our Clients Say</h2>
        <div className="space-y-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-md transition-opacity duration-500 ease-in-out">
              <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
              <p className="italic text-sm md:text-base">"{item.text}"</p>
              <p className="mt-2 font-semibold text-right text-sm md:text-base">— {item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Animation */}
      <div className="md:w-1/2 bg-black overflow-hidden">
        <Slider {...sliderSettings}>
          {imageUrls.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] md:h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsWithSlider;
