import React, { useEffect } from "react";
import InfoBanner from "../../components/InfoBanner";

const centers = [
  {
    title: "Physician",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cardiologist",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1723478527060-db98550c1c07?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gynecologist",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1702598564277-0984e20bafb7?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Orthopedic",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1673773401710-d23ef113e06f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
  },
  {
    title: "Pediatric",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://images.unsplash.com/photo-1578496781379-7dcfb995293d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Surgery",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661627109539-69d7096ea354?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const doctors = [
  {
    name: "Dr. Ketan Kim",
    specialty: "Ophthalmologist",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661745717091-488b4d4af658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    name: "Dr. Benjamin Clark",
    specialty: "Ophthalmologist",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661746228321-8de24c08c6a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    name: "Dr. Dan Thomas",
    specialty: "Ophthalmologist",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661741194134-c533748d8117?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    name: "Dr. Sophia Miller",
    specialty: "Ophthalmologist",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661690013376-9c1b73f0b16c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "#1D4ED8" : "none"}
          viewBox="0 0 24 24"
          stroke="#1D4ED8"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 17.27l5.18 3.03-1.64-6.81L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.25-1.64 6.81L12 17.27z"
          />
        </svg>
      ))}
    </div>
  );
};

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
      <div
        className="relative h-[18rem] md:h-[31rem] bg-cover bg-center rounded-3xl md:rounded-[3rem]"
        style={{ backgroundImage: `url('/servicesimg.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-3xl md:rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-4xl md:text-7xl font-bold font-Bricolage-Grotesque">
              Services
            </h1>
            <p className="mt-2 text-xs md:text-base font-Bricolage-Grotesque">
              HOME / SERVICES
            </p>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="py-12 md:mt-8 lg:max-w-[1200px] w-11/12 md:w-4/5 mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-blue-700 mb-8 font-Bricolage-Grotesque">
          Centers of Excellence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {centers.map((center, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 group"
            >
              {/* Image with gradient overlay */}
              <div className="relative">
                <img
                  src={center.imageUrl}
                  alt={center.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-6=80 group-hover:opacity-0 transition-opacity duration-500"></div>
                <h3 className="absolute bottom-0 left-0 right-0 text-white text-2xl font-bold p-4 bg-gradient-to-t from-blue-900/40 to-transparent font-Bricolage-Grotesque">
                  {center.title}
                </h3>
              </div>

              {/* Hidden content that appears on hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center backdrop-blur-sm bg-blue-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center">
                <h3 className="text-xl font-bold text-white font-Bricolage-Grotesque">
                  {center.title}
                </h3>
                <p className="text-gray-200 mt-2 font-sans">
                  {center.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOCTORS */}
      <div className="py-12 w-11/12 md:w-4/5 mx-auto lg:max-w-[1200px]">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-blue-700 mb-8 font-Bricolage-Grotesque">
          Our Specialist Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-100 rounded-xl shadow-md overflow-hidden"
            >
              <div className="md:w-48">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-40 md:h-48 object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-y-3 justify-between md:w-2/3">
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-xl font-bold font-sans text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600">
                    Specialties: {doctor.specialty}
                  </p>
                  <StarRating rating={doctor.rating} />
                </div>
                <a
                  href="#"
                  className="text-blue-700 font-semibold mt-2 hover:underline"
                >
                  SCHEDULE APPOINTMENT
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <InfoBanner />
    </div>
  );
}

export default Services;
