import React from "react";

const treatments = [
  {
    title: "OPD",
    subtitle: "Digital X-Ray",
    imageUrl:
      "https://www.corashospital.com/wp-content/uploads/2024/02/opd-fotor-2024020217558-scaled.jpg",
  },
  {
    title: "X-RAY",
    subtitle: "Digital X-Ray",
    imageUrl:
      "https://cdn-5d9c5f14f911c90950a6b4d8.closte.com/wp-content/uploads/2020/04/x-rays-el-paso-print-sheet-1024x683.jpeg",
  },
  {
    title: "DENTAL",
    subtitle: "Digital X-Ray",
    imageUrl:
      "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/6007/453920/0170678001639425089.jpg",
  },
  {
    title: "CARDIO",
    subtitle: "Digital X-Ray",
    imageUrl: "https://medmonks.com/home/img/blog/cardiologist-india.jpg",
  },
];

const TreatmentSection = () => {
  return (
    <div className="py-10 sm:py-20 bg-gray-100">
      <h2 className="text-center text-4xl md:text-6xl font-Bricolage-Grotesque font-bold mb-8">
        Our Facilities
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-7 lg:max-w-[1200px] w-11/12 md:w-4/5 mx-auto">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl hover:scale-105 transition-transform duration-500"
          >
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-white bg-opacity-10  rounded-2xl"></div>
            <img
              src={treatment.imageUrl}
              alt={treatment.title}
              className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />
            {/* Content with Glass Effect */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent rounded-2xl">
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {treatment.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                {treatment.subtitle}
              </p>
            </div>
            {/* Floating Glow Effect */}
            <div className="absolute inset-0 group-hover:ring-4 ring-yellow-500 ring-opacity-50 rounded-2xl transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentSection;
