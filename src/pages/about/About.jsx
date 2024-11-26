import React, { useEffect, useRef, useState } from "react";
import AboutMedical from "../home/AboutMedical";
import InfoBanner from "../../components/InfoBanner";

function About() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Mikelson Klaus",
      role: "SATISFIED PATIENT",
      text: "Commerce end interfaces with collaborative strategies. Appropriately enhance alignments after team solutions for growth in corporate web-readiness.",
      img: "/doc.png",
    },
    {
      name: "Sophia Wilson",
      role: "SATISFIED PATIENT",
      text: "Transformative healthcare service. Uniquely personalized care provided by the incredible team here. Truly the best experience.",
      img: "/doc.png",
    },
    {
      name: "Liam Carter",
      role: "SATISFIED PATIENT",
      text: "The care provided was beyond expectations. Highly recommended for anyone seeking world-class medical treatment.",
      img: "/doc.png",
    },
    {
      name: "Olivia Brown",
      role: "SATISFIED PATIENT",
      text: "Efficient and compassionate staff. Thank you for making a challenging time easier to manage.",
      img: "/doc.png",
    },
    {
      name: "Ethan Martinez",
      role: "SATISFIED PATIENT",
      text: "Amazing care and expertise throughout my treatment. Couldn't have asked for more.",
      img: "/doc.png",
    },
  ];

  const testimonialCount = testimonials.length;
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild?.offsetWidth || 0;
        const nextIndex = (activeIndex + 1) % testimonialCount;
        const nextScrollLeft = cardWidth * nextIndex;

        scrollRef.current.scrollTo({
          left: nextScrollLeft,
          behavior: "smooth",
        });

        setActiveIndex(nextIndex); // Update active index
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, testimonialCount]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
      <div
        className="relative h-[18rem] md:h-[31rem] bg-cover bg-center rounded-3xl md:rounded-[3rem]"
        style={{ backgroundImage: `url('/aboutushosp.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-3xl md:rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-4xl md:text-7xl font-bold font-Bricolage-Grotesque">
              About Us
            </h1>
            <p className="mt-2 text-xs md:text-base font-Bricolage-Grotesque">
              HOME / ABOUT US
            </p>
          </div>
        </div>
      </div>

      <div className="w-4/5 lg:max-w-[1200px] mx-auto mt-8 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-Bricolage-Grotesque">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-tight md:leading-snug">
          Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a
          leading integrated healthcare services provider in India. It is one of
          the largest healthcare organizations in the country with 28 healthcare
          facilities, 4,500+ operational beds (including O&M facilities), and
          over 400 diagnostics centers (including JVs). Fortis is present in
          India, the United Arab Emirates (UAE), Nepal & Sri Lanka. The Company
          is listed on the BSE Ltd and National Stock Exchange (NSE) of India.
          It draws strength from its partnership with global major and parent
          company - IHH, to build upon its culture of world-class patient care
          and superlative clinical excellence.
        </p>
      </div>
      <AboutMedical />
      <div className="flex lg:max-w-[1200px] flex-col-reverse lg:flex-row items-center gap-8 w-11/12 md:w-4/5 mx-auto py-5 md:py-16 md:px-4">
        {/* Text Section */}
        <div className="w-11/12 lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 font-Bricolage-Grotesque">
            Our Happy Patients
          </h2>
          <p className="text-lg text-gray-600 leading-tight mb-8">
            Professional without enterprise e-commerce. Uniquely happy clients
            innovative technologies via team member.
          </p>

          {/* Testimonial Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto rounded-2xl scrollbar-hidden snap-x snap-mandatory md:w-[76.7%] [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none bg-blue-900 text-white p-4 md:p-8 rounded-2xl shadow-lg max-w-fit md:max-w-md snap-center"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt="Patient Avatar"
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-left">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-left text-sm leading-snug">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mx-auto px-5 md:px-24">
          <img
            src="/aboutdoc.png"
            alt="Happy Patient with Doctor"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>

      <InfoBanner />
    </div>
  );
}

export default About;
