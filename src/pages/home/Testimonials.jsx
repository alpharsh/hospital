import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anjali Sinha",
      role: "PATIENT",
      quote:
        "RD Memorial Hospital remains the light at the end of the tunnel. During my admission when I was taken clinically when a critical emergency arose. They are professionals coupled with care that is rare to find in other medical facilities. I’m forever grateful!",
      rating: 5,
    },
    {
      name: "Rohit Kumar",
      role: "PATIENT",
      quote:
        "This kept surprising me especially with the sort of facilities and contacts RD Memorial Hospital boasted of. Very often the doctors and the nurses are tired, but they still take time to answer my questions and elaborately tell me about my treatment. Highly recommend it!",
      rating: 5,
      featured: true,
    },
    {
      name: "Karan Mishra",
      role: "PATIENT",
      quote:
        "Indeed, over the last five fiscal years, RD Memorial Hospital has been serving as a healthcare centre for our family. Whether this is a general annual check-up or something more specific we are always well looked after. Highly dependable!",
      rating: 5,
    },
  ];

  return (
    <div className="py-12 bg-gray-200">
      <h2 className="text-center text-4xl md:text-6xl font-Bricolage-Grotesque font-bold mb-8">
        Testimonials
      </h2>
      <div className="flex w-11/12 xl:w-4/6 justify-center mx-auto lg:max-w-[1200px]">
        <div className="flex overflow-x-auto space-x-8 md:space-x-8 [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`md:min-w-[300px] md:max-w-[300px] md:flex-shrink-0 md:flex-grow-0 p-4 md:p-6 rounded-xl  ${
                testimonial.featured
                  ? "bg-blue-900 text-white"
                  : "bg-white text-[#0022FF]"
              } flex-grow `}
            >
              <div className="flex justify-center mb-1 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-4xl ${
                      i < testimonial.rating ? "text-blue-600" : "text-gray-300"
                    }`}
                  >
                    <svg
                      className="w-8 md:w-10 h-8 md:h-10"
                      viewBox="0 0 51 51"
                      fill={testimonial.featured ? "#E0E0E0" : "#1500FF"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.8063 35.7531L25.5 31.7156L32.1938 35.8063L30.4406 28.1562L36.3375 23.0562L28.5813 22.3656L25.5 15.1406L22.4188 22.3125L14.6625 23.0031L20.5594 28.1562L18.8063 35.7531ZM12.3781 44.625L15.8313 29.6969L4.25 19.6562L19.55 18.3281L25.5 4.25L31.45 18.3281L46.75 19.6562L35.1688 29.6969L38.6219 44.625L25.5 36.7094L12.3781 44.625Z" />
                    </svg>
                  </span>
                ))}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-center uppercase">
                {testimonial.name}
              </h3>
              <p className="text-center text-sm md:text-lg mb-4">
                {testimonial.role}
              </p>
              <div className="flex justify-center mb-2 sm:mb-5 text-center">
                <svg
                  className="w-6 sm:w-8"
                  viewBox="0 0 43 37"
                  fill={testimonial.featured ? "#E0E0E0" : "#1500FF"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.25 0.499991C40.25 0.499991 40.45 0.549994 40.85 0.649998C41.25 0.749997 41.65 1.1 42.05 1.69999C42.45 2.29999 42.65 3.34999 42.65 4.85C42.65 6.75 42.35 8 41.75 8.59999C41.15 9.09999 40.75 9.39999 40.55 9.49999C40.45 9.6 39.75 10.15 38.45 11.15C37.25 12.15 36.5 13.95 36.2 16.55C37.2 16.75 38.05 17.05 38.75 17.45C39.55 17.75 40.25 18.2 40.85 18.8C41.75 19.7 42.3 20.9 42.5 22.4C42.7 23.8 42.8 25.2 42.8 26.6C42.8 28.2 42.65 29.75 42.35 31.25C42.05 32.75 41.2 34 39.8 35C38.4 36 36 36.5 32.6 36.5C28.8 36.5 26.1 35.7 24.5 34.1C23.6 33.2 23.05 32.05 22.85 30.65C22.65 29.15 22.55 27.7 22.55 26.3C22.55 25.6 22.55 24.9 22.55 24.2C22.65 23.5 22.75 22.85 22.85 22.25C23.25 18.25 24.25 14.6 25.85 11.3C27.55 8 29.65 5.4 32.15 3.5C34.65 1.49999 37.35 0.499991 40.25 0.499991ZM17.9 0.499991C17.9 0.499991 18.1 0.549994 18.5 0.649998C19 0.749997 19.45 1.1 19.85 1.69999C20.25 2.29999 20.45 3.34999 20.45 4.85C20.45 6.75 20.15 8 19.55 8.59999C18.95 9.09999 18.5 9.39999 18.2 9.49999C18.1 9.6 17.45 10.15 16.25 11.15C15.05 12.15 14.25 13.95 13.85 16.55C14.85 16.75 15.7 17.05 16.4 17.45C17.2 17.75 17.9 18.2 18.5 18.8C19.5 19.7 20.05 20.9 20.15 22.4C20.35 23.8 20.45 25.2 20.45 26.6C20.45 28.2 20.3 29.75 20 31.25C19.7 32.75 18.85 34 17.45 35C16.05 36 13.65 36.5 10.25 36.5C6.45 36.5 3.8 35.7 2.3 34.1C1.3 33.2 0.7 32.05 0.5 30.65C0.4 29.15 0.35 27.7 0.35 26.3C0.35 25.6 0.35 24.9 0.35 24.2C0.45 23.5 0.55 22.85 0.65 22.25C1.05 18.25 2.05 14.6 3.65 11.3C5.25 8 7.3 5.4 9.8 3.5C12.3 1.49999 15 0.499991 17.9 0.499991Z"
                    // fill="#1500FF"
                  />
                </svg>
              </div>

              <blockquote className="text-center text-xs md:text-xl leading-tight italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
