import React from "react";
import InfoBanner from "../../components/InfoBanner";
import AppointmentCard from "../../components/AppointmentCard";
import Testimonials from "./Testimonials";
import TreatmentSection from "./TreatmentSection";
import DoctorsBanner from "../../components/DoctorsBanner";
import AboutMedical from "./AboutMedical";

function Home() {
  return (
    <div className=" overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative flex items-center justify-between w-full h-[47rem] bg-gradient-to-b from-[#002570] to-[#0074D1]">
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
              fill-opacity="0.61"
            />
          </svg>
        </div>
        <div className="z-10">
          {/* Left Section: Text Content */}
          <div className="text-white  p-10 sm:pl-16 z-10">
            <h1 className="flex items-end font-Bricolage-Grotesque text-4xl md:text-7xl font-bold leading-tight mb-4">
              We Provide Best <br />
              Healthcare{" "}
              <div className="absolute left-60 md:left-[28rem]">
                <img src="/heart.png" alt="heart" className="w-12 md:w-16 animate-wood-animation"/>
              </div>
            </h1>
            <p className="mb-8 font-Bricolage-Grotesque text-lg max-w-lg">
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi.
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
                fill-opacity="0.61"
              />
            </svg>
          </div>
          {/* Right Section: Doctor Image */}
          <div className="absolute hidden md:block right-0 bottom-0 h-full">
            <img src="/hero.png" alt="Doctor" className="h-full object-cover" />
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="pt-0 py-12 bg-gradient-to-b from-[#0074D1] to-white relative custom-shadow">
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
              fill-opacity="0.61"
            />
          </svg>
        </div>
        {/* Achievement Card */}
        <div className="flex flex-col md:flex-row lg:max-w-[1200px] items-center justify-between w-[95%] md:w-4/5 mx-auto bg-white shadow-2xl shadow-[#0074D1] rounded-3xl md:rounded-[3rem] py-3 md:py-6 px-8 relative z-10 overflow-hidden">
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
            <h3 className="text-2xl mb-2 md:hidden md:text-3xl font-semibold font-Bricolage-Grotesque text-blue-600">
              Medical Achievement
            </h3>
          </div>

          {/* Stats Section */}
          <div className="flex items-center space-x-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-black">12+</p>
              <hr className="border border-blue-300 w-full mt-1" />
              <p className="text-gray-600 leading-tight">Satisfied Patients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-black">100%</p>
              <hr className="border border-blue-300 w-full mt-1" />
              <p className="text-gray-600 leading-tight">Satisfaction Rates</p>
            </div>
          </div>
        </div>
        <div className="flex w-4/5 lg:max-w-[1200px] mt-14 md:mt-24 mx-auto flex-col lg:flex-row justify-around items-center">
          {/* Professional Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-6 md:p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-7">OUR PROFESSIONAL</h3>
            <img
              src="/img1.png"
              alt="Our Professional"
              className="w-24 md:w-28 h-24 md:h-28 mb-4"
            />
            <p className="text-2xl md:text-3xl font-bold mb-2 font-Bricolage-Grotesque">
              90+ Doctors
            </p>
            <p className="text-base md:text-xl leading-tight text-gray-600">
              Rapidiously reinvent long-term impact collaboration
            </p>
          </div>

          {/* Booking Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-7">BOOKING</h3>
            <img src="/img2.png" alt="Booking" className="w-24 md:w-28 h-24 md:h-28 mb-4" />
            <p className="text-2xl md:text-3xl font-bold mb-2 font-Bricolage-Grotesque">
              +123 (4567) 890
            </p>
            <p className="text-base md:text-xl leading-tight text-gray-600">
              Call Us for Booking appointments online 24x7
            </p>
          </div>

          {/* Location Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-7">LOCATION</h3>
            <img src="/img3.png" alt="Location" className="w-24 md:w-28 h-24 md:h-28 mb-4" />
            <p className="text-2xl md:text-3xl font-semibold mb-2">Locate Us</p>
            <p className="text-base md:text-xl leading-tight text-gray-600">
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
