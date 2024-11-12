import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "slideimg1.png",
    heading: "Proton Cancer Centre",
    description: "India's First Advanced Cancer Centre Is Accredited By JCI",
  },
  {
    image: "slideimg2.png",
    heading: "Proton Therapy",
    description: "Over 600 lives touched with the revolutionary Proton Therapy",
  },
  {
    image: "slideimg3.png",
    heading: "World-Class Treatment",
    description: "Advanced cancer treatment options available",
  },
  {
    image: "slideimg4.png",
    heading: "Comprehensive Care",
    description: "Personalized treatment plans for every patient",
  },
  {
    image: "slideimg5.png",
    heading: "Innovative Therapies",
    description: "Cutting-edge technology for better outcomes",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden md:rounded-3xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out transform"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative h-56 md:h-[31rem] bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay and Content for Each Slide */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-80"></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-3/4 left-10 md:left-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight font-Bricolage-Grotesque">{slide.heading}</h2>
              <p className="mt-2 md:mt-4 text-xs md:text-sm font-Bricolage-Grotesque">{slide.description}</p>
              <button className="mt-2 md:mt-4 bg-transparent text-xs md:text-base border px-2 py-1 md:px-3 md:py-1 font-Bricolage-Grotesque rounded-lg hover:bg-blue-700/50 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs md:text-xl bg-black/40 p-[0.40rem] rounded-full text-white/80 shadow-lg"
      >
        <FaChevronLeft />   
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs md:text-xl bg-black/40 p-[0.40rem] rounded-full text-white/80 shadow-lg"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
