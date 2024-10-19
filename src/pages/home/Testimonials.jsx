import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "PARVEZ HUSSAIN",
      role: "PATIENT",
      quote:
        "Their SEO and content expertise put my fitness brand on the map! Highly recommend.",
      rating: 5,
    },
    {
      name: "PARVEZ HUSSAIN",
      role: "PATIENT",
      quote:
        "Their SEO and content expertise put my fitness brand on the map! Highly recommend.",
      rating: 5,
      featured: true,
    },
    {
      name: "PARVEZ HUSSAIN",
      role: "PATIENT",
      quote:
        "Their SEO and content expertise put my fitness brand on the map! Highly recommend.",
      rating: 5,
    },
  ];

  return (
    <div className="py-12 bg-gray-200">
      <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              testimonial.featured
                ? "bg-blue-900 text-white"
                : "bg-white text-gray-900"
            } w-72`}
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < testimonial.rating
                      ? "text-blue-600"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <h3 className="text-lg font-bold text-center">
              {testimonial.name}
            </h3>
            <p className="text-center text-sm mb-4">{testimonial.role}</p>
            <blockquote className="text-center text-sm italic">
              "{testimonial.quote}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
