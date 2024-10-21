import React from "react";
import InfoBanner from "../../components/InfoBanner";
import AppointmentCard from "../../components/AppointmentCard";
import Testimonials from "./Testimonials";
import TreatmentSection from "./TreatmentSection";
import DoctorsBanner from "../../components/DoctorsBanner";
import AboutMedical from "./AboutMedical";

function Home() {
  return (
    <div className="">
      {/* HERO SECTION */}
      <div className="relative flex items-center justify-between w-full h-[47rem] bg-gradient-to-b from-[#002570] to-[#0074D1]">
        <div>
          {/* Left Section: Text Content */}
        <div className="text-white  p-10 sm:pl-16 z-10">
          <h1 className="flex items-end font-Bricolage-Grotesque text-7xl font-bold leading-tight mb-4">
            We Provide Best <br />
            Healthcare{" "}
            <img src="/heart.png" alt="heart" className="absolute left-[30%]" />
          </h1>
          <p className="mb-8 font-Bricolage-Grotesque text-lg max-w-lg">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-9 py-2 text-xl bg-white text-black font-Bricolage-Grotesque font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
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
          </a>
        </div>

        {/* Right Section: Doctor Image */}
        <div className="absolute right-0 bottom-0 h-full">
          <img src="/hero.png" alt="Doctor" className="h-full object-cover" />
        </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className=" py-12 bg-gradient-to-b from-[#0074D1] to-white ">
        {/* Achievement Card */}
        <div className="flex lg:max-w-[1200px] absolute top-[42.75rem] left-[10rem] items-center justify-between w-4/5 mx-auto bg-white shadow-lg rounded-[3rem] py-6 px-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/achievement.png"
              alt="Medical Achievement"
              className="w-50 h-28 object-cover rounded-xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-96">
            <h3 className="text-3xl font-semibold font-Bricolage-Grotesque text-blue-600">
              Medical Achievement Health Protection
            </h3>
          </div>

          {/* Stats Section */}
          <div className="flex items-center space-x-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-black">12+</p>
              <hr className="border border-blue-300 w-full mt-1" />
              <p className="text-gray-600">Satisfied Patients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-black">100%</p>
              <hr className="border border-blue-300 w-full mt-1" />
              <p className="text-gray-600">Satisfaction Rates</p>
            </div>
          </div>
        </div>
        <div className="flex w-4/5 lg:max-w-[1200px] mt-24 mx-auto flex-col lg:flex-row justify-around items-center">
          {/* Professional Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-3xl font-bold mb-7">OUR PROFESSIONAL</h3>
            <img
              src="/img1.png"
              alt="Our Professional"
              className="w-28 h-28 mb-4"
            />
            <p className="text-3xl font-bold mb-2 font-Bricolage-Grotesque">
              90+ Doctors
            </p>
            <p className="text-xl text-gray-600">
              Rapidiously reinvent long-term impact collaboration
            </p>
          </div>

          {/* Booking Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-3xl font-bold mb-7">BOOKING</h3>
            <img src="/img2.png" alt="Booking" className="w-28 h-28 mb-4" />
            <p className="text-3xl font-bold mb-2 font-Bricolage-Grotesque">
              +123 (4567) 890
            </p>
            <p className="text-xl text-gray-600">
              Call Us for Booking appointments online 24 hrs available
            </p>
          </div>

          {/* Location Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-3xl font-bold mb-7">LOCATION</h3>
            <img src="/img3.png" alt="Location" className="w-28 h-28 mb-4" />
            <p className="text-3xl font-semibold mb-2">Locate Us</p>
            <p className="text-xl text-gray-600">
              Rapaciously reinvent long-term impact collaboration
            </p>
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
