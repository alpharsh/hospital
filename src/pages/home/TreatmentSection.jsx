import React from "react";

const treatments = [
  {
    title: "OPD",
    subtitle: "Digital X-Ray",
    imageUrl: "https://www.corashospital.com/wp-content/uploads/2024/02/opd-fotor-2024020217558-scaled.jpg",
  },
  {
    title: "X-RAY",
    subtitle: "Digital X-Ray",
    imageUrl: "https://cdn-5d9c5f14f911c90950a6b4d8.closte.com/wp-content/uploads/2020/04/x-rays-el-paso-print-sheet-1024x683.jpeg",
  },
  {
    title: "DENTAL",
    subtitle: "Digital X-Ray",
    imageUrl: "https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/6007/453920/0170678001639425089.jpg",
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
        Provide Best Treatments
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-7 lg:max-w-[1200px] w-11/12 md:w-4/5 mx-auto">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform transform "
          >
            <img
              src={treatment.imageUrl}
              alt={treatment.title}
              className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-2xl md:rounded-3xl p-1 sm:p-3"
            />
            <div className="p-2 px-4 pt-0 ">
              <h3 className="text-base md:text-lg font-bold text-gray-800">{treatment.title}</h3>
              <p className="text-sm md:text-base text-gray-500">{treatment.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentSection;
