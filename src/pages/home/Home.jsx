import React from "react";
import InfoBanner from "../../components/InfoBanner";
import AppointmentCard from "../../components/AppointmentCard";
import Testimonials from "./Testimonials";
import TreatmentSection from "./TreatmentSection";
import DoctorsBanner from "../../components/DoctorsBanner";
import AboutMedical from "./AboutMedical";
import Slider from "./Slider";
import { IoCalendarOutline } from "react-icons/io5";
import { TbCheckupList } from "react-icons/tb";
import { RiChatSmile2Line } from "react-icons/ri";
import { GiMedicines } from "react-icons/gi";
import { PiHospitalLight } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const services = [
  { id: 1, title: "Book Appointment", icon: <IoCalendarOutline /> },
  { id: 2, title: "Book Check-Up", icon: <TbCheckupList /> },
  { id: 3, title: "Consult Online", icon: <RiChatSmile2Line /> },
  { id: 4, title: "Buy Medicine", icon: <GiMedicines /> },
  { id: 5, title: "Find Hospital", icon: <PiHospitalLight /> },
  { id: 6, title: "View Health Record", icon: <TbReportSearch /> },
];

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative flex items-center justify-between w-full md:h-[47rem] bg-gradient-to-b from-[#002570] to-[#0074D1]">
        <div className="absolute left-0 top-0 z-10">
          <svg
            width="451"
            height="451"
            viewBox="0 0 451 451"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M447.374 147.228C476.019 251.079 328.819 446.129 221.208 450.877C97.1296 456.351 -34 278.472 -34 147.228C-34 15.9843 8.94081 -39.3531 115.604 -56.0846C245.462 -76.4543 426.254 70.6557 447.374 147.228Z"
              fill="#1C5FCB"
              fillOpacity="0.61"
            />
          </svg>
        </div>
        <div className="z-10">
          <div className="mt-[3.2rem] md:hidden">
            <Slider />
          </div>
          <div className="bg-transparent md:hidden py-5 pb-1">
            <div className="w-11/12 md:w-4/5 lg:max-w-[1200px] mx-auto">
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col items-center justify-center p-3 md:p-6 border bg-white/90 drop-shadow-2xl rounded-2xl transition-shadow duration-300"
                  >
                    <div className="text-3xl md:text-5xl mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-medium leading-tight text-center">
                      {service.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Left Section: Text Content */}
          <div className="text-white p-8 md:p-10 sm:pl-16 z-10">
            <h1 className="flex items-end font-Bricolage-Grotesque text-4xl md:text-7xl font-bold leading-tight mb-4">
              We Provide Best <br />
              Healthcare{" "}
              <div className="absolute left-60 md:left-[28rem]">
                <img
                  src="/heart.png"
                  alt="heart"
                  className="w-12 md:w-16 animate-wood-animation"
                />
              </div>
            </h1>
            <p className="mb-8 font-sans text-lg max-w-lg">
              R D Memorial Hospital is a testimony and a source of hope of
              quality health care for patients for more than 5 years now. The
              organizational vision is to be an institution whose healthcare
              delivery improves the vast quality of lives, highly recommended
              for passionate and genuine caregivers.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-3 md:px-9 py-1 md:py-2 md:text-xl bg-white text-black font-Bricolage-Grotesque font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              More About{" "}
              <span className="ml-2 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div className="absolute hidden md:block right-32 top-0">
            <svg
              width="485"
              height="509"
              viewBox="0 0 485 509"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M481.374 205.228C510.019 309.079 362.819 504.129 255.208 508.877C131.13 514.351 0 336.472 0 205.228C0 73.9843 42.9408 18.6469 149.604 1.91543C279.462 -18.4543 460.254 128.656 481.374 205.228Z"
                fill="#1C5FCB"
                fillOpacity="0.61"
              />
            </svg>
          </div>

          {/* Right Section: Slider */}
          <div className="absolute hidden md:flex items-center justify-center right-10 bottom-0 h-full w-1/2">
            <Slider />
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="pt-0 py-12 bg-gradient-to-b from-[#0074D1] to-white relative">
        <div className="absolute left-[30rem] -top-60 z-0 hidden md:block">
          <svg
            width="485"
            height="509"
            viewBox="0 0 485 509"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M481.374 205.228C510.019 309.079 362.819 504.129 255.208 508.877C131.13 514.351 0 336.472 0 205.228C0 73.9843 42.9408 18.6469 149.604 1.91543C279.462 -18.4543 460.254 128.656 481.374 205.228Z"
              fill="#1C5FCB"
              fillOpacity="0.61"
            />
          </svg>
        </div>
        {/* Achievement Card */}
        <div className="flex flex-col md:flex-row lg:max-w-[1200px] items-center justify-between w-4/5 mx-auto bg-white shadow-2xl shadow-[#0074D1] rounded-3xl md:rounded-[3rem] py-3 md:py-6 px-8 relative z-10 overflow-hidden">
          {/* Image Section */}
          <div className="hidden md:block flex-shrink-0">
            <img
              src="/achievement.png"
              alt="Medical Achievement"
              className="w-50 h-28 object-cover rounded-xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-96 flex justify-center">
            <h3 className="text-xl hidden md:block md:text-3xl font-semibold font-Bricolage-Grotesque text-blue-600">
              Medical Achievement Health Protection
            </h3>
            <h3 className="text-xl mb-2 md:hidden md:text-3xl font-semibold font-Bricolage-Grotesque text-blue-600">
              A Legacy of Care
            </h3>
          </div>

          {/* Stats Section */}
          <div className="flex items-center space-x-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-black">
                <CountUp end={100000} enableScrollSpy={true} />+
              </p>
              <hr className="border border-blue-300 w-full mt-1" />
              <p className="text-gray-600 text-sm md:text-base leading-tight">
                Satisfied Patients
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-black">
                <CountUp end={100} enableScrollSpy={true} />%
              </p>
              <hr className="border border-blue-300 w-full mt-1" />
              <p className="text-gray-600 text-sm md:text-base leading-tight">
                Satisfaction Rates
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex w-4/5 lg:max-w-[1000px] mt-10 md:mt-24 mx-auto flex-col lg:flex-row justify-around items-center">
            {/* Professional Section */}
            <div className="flex flex-col space-y-2 items-center text-center bg-white p-6 md:p-5 rounded-3xl  w-full  mx-4 my-4">
              <h3 className="text-2xl md:text-xl font-bold mb-1 uppercase">
                Expert Team
              </h3>
              <img
                src="/img1.png"
                alt="Our Professional"
                className="w-24 md:w-20 h-24 md:h-20 mb-4"
              />
              <p className="text-2xl md:text-xl font-bold mb-2 font-Bricolage-Grotesque">
                90+ Doctors
              </p>
              <p className="text-base leading-tight text-gray-600">
                We have professional doctors, surgeons and qualified nurses and
                other health care practitioners but we are also dedicated to
                you.
              </p>
            </div>

            {/* Booking Section */}
            <div className="flex flex-col space-y-2 items-center text-center bg-white p-5 rounded-3xl  w-full  mx-4 my-4">
              <h3 className="text-2xl md:text-xl font-bold mb-1 uppercase">
                Comprehensive Care
              </h3>
              <img
                src="/img2.png"
                alt="Booking"
                className="w-24 md:w-20 h-24 md:h-20 mb-4"
              />
              <p className="text-2xl md:text-xl font-bold mb-2 font-Bricolage-Grotesque">
                +91 97179 66193
              </p>
              <p className="text-base leading-tight text-gray-600">
                There is a standard operating procedure from the time the
                disease is diagnosed to the time the patient is cured or
                developed immunity against that disease.
              </p>
            </div>

            {/* Location Section */}
            <div className="flex flex-col space-y-2 items-center text-center bg-white p-5 rounded-3xl  w-full  mx-4 my-4">
              <h3 className="text-xl font-bold mb-1 uppercase">
                Patient-Centered Approach
              </h3>
              <img
                src="/img3.png"
                alt="Location"
                className="w-24 md:w-20 h-24 md:h-20 mb-4"
              />
              <p className="text-2xl md:text-xl font-semibold mb-2">
                Locate Us
              </p>
              <p className="text-base leading-tight text-gray-600">
                We lay emphasis over your health, comfort and convenience all
                through the process.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutMedical />
      <DoctorsBanner />
      <TreatmentSection />
      <Testimonials />
      <AppointmentCard />
      <InfoBanner />
    </div>
  );
}

export default Home;
