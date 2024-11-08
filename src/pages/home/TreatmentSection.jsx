import React from "react";

const treatments = [
  {
    title: "OPD",
    subtitle: "Digital X-Ray",
    imageUrl: "/tr1.png",
  },
  {
    title: "X-RAY",
    subtitle: "Digital X-Ray",
    imageUrl: "/tr1.png",
  },
  {
    title: "DENTAL",
    subtitle: "Digital X-Ray",
    imageUrl: "/tr1.png",
  },
  {
    title: "CARDIO",
    subtitle: "Digital X-Ray",
    imageUrl: "/tr1.png",
  },
];

const TreatmentSection = () => {
  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-center text-4xl md:text-6xl font-Bricolage-Grotesque font-bold mb-8">
        Provide Best Treatments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:max-w-[1200px] w-4/5 mx-auto">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={treatment.imageUrl}
              alt={treatment.title}
              className="w-full h-72 object-cover rounded-3xl p-3"
            />
            <div className="p-2 px-4 pt-0 ">
              <h3 className="text-lg font-bold text-gray-800">{treatment.title}</h3>
              <p className="text-gray-500">{treatment.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentSection;
