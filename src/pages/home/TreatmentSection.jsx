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
    imageUrl: "/tr2.png",
  },
  {
    title: "DENTAL",
    subtitle: "Digital X-Ray",
    imageUrl: "/tr3.png",
  },
  {
    title: "CARDIO",
    subtitle: "Digital X-Ray",
    imageUrl: "/tr4.png",
  },
];

const TreatmentSection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-5xl font-Bricolage-Grotesque font-bold mb-8">Provide Best Treatments</h2>
      <div className="flex flex-wrap justify-center w-4/5 mx-auto gap-6">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={treatment.imageUrl}
              alt={treatment.title}
              className="w-full h-48 object-cover p-2"
            />
            <div className="p-2 pt-0 ">
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
