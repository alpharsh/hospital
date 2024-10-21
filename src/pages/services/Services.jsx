import React from "react";
import InfoBanner from "../../components/InfoBanner";

const centers = [
  {
    title: "Physician",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
  },
  {
    title: "Cardiologist",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
  },
  {
    title: "Gynecologist",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
  },
  {
    title: "Orthopedic",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
  },
  {
    title: "Pediatric",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
  },
  {
    title: "Surgery",
    description:
      "28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (incl",
    imageUrl:
      "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
  },
];

const doctors = [
  {
    name: "Dr. Ketan Kim",
    specialty: "Ophthalmologist",
    imageUrl: "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
    rating: 4,
  },
  {
    name: "Dr. Benjamin Clark",
    specialty: "Ophthalmologist",
    imageUrl: "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
    rating: 5,
  },
  {
    name: "Dr. Dan Thomas",
    specialty: "Ophthalmologist",
    imageUrl: "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
    rating: 4,
  },
  {
    name: "Dr. Sophia Miller",
    specialty: "Ophthalmologist",
    imageUrl: "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?t=st=1729427511~exp=1729431111~hmac=b07051b071323dc93833418904375df0e26dcc46c024de5ba4e079bf89af0a13&w=740",
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
  return (
    <div>
      <div
        className="relative h-[31rem] bg-cover bg-center rounded-[3rem]"
        style={{ backgroundImage: `url('/servicesimg.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-7xl font-bold font-Bricolage-Grotesque">
              Services
            </h1>
            <p className="mt-2 font-Bricolage-Grotesque">HOME / SERVICES</p>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="py-12 mt-8 lg:max-w-[1200px] w-4/5 mx-auto ">
        <h2 className="text-center text-5xl font-bold text-blue-700 mb-8 font-Bricolage-Grotesque">
          Centers of Excellence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {centers.map((center, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden "
            >
              <img
                src={center.imageUrl}
                alt={center.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {center.title}
                </h3>
                <p className="text-gray-600 mt-2">{center.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOCTORS */}
      <div className="py-12 w-4/5 mx-auto lg:max-w-[1200px]">
        <h2 className="text-center text-5xl font-bold text-blue-700 mb-8 font-Bricolage-Grotesque">
          Our Specialist Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-1/3 h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between w-2/3">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
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
