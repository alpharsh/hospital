import React from "react";
import InfoBanner from "../../components/InfoBanner";
import AppointmentCard from "../../components/AppointmentCard";
import Testimonials from "./Testimonials";
import TreatmentSection from "./TreatmentSection";
import DoctorsBanner from "../../components/DoctorsBanner";
import AboutMedical from "./AboutMedical";

function Home() {
  return (
    <>
      <div className=" py-12 bg-gradient-to-b from-[#0063BB] via-white ">
        <div className="flex w-4/5 mx-auto flex-col lg:flex-row justify-around items-center">
          {/* Professional Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-3xl font-bold mb-7">OUR PROFESSIONAL</h3>
            <img
              src="/img1.png"
              alt="Our Professional"
              className="w-28 h-28 mb-4"
            />
            <p className="text-3xl font-bold mb-2 font-Bricolage-Grotesque">90+ Doctors</p>
            <p className="text-xl text-gray-600">
              Rapidiously reinvent long-term impact collaboration
            </p>
          </div>

          {/* Booking Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-3xl font-bold mb-7">BOOKING</h3>
            <img
              src="/img2.png"
              alt="Booking"
              className="w-28 h-28 mb-4"
            />
            <p className="text-3xl font-bold mb-2 font-Bricolage-Grotesque">+123 (4567) 890</p>
            <p className="text-xl text-gray-600">
              Call Us for Booking appointments online 24 hrs available
            </p>
          </div>

          {/* Location Section */}
          <div className="flex flex-col space-y-4 items-center text-center bg-white p-8 rounded-3xl  w-full  mx-4 my-4">
            <h3 className="text-3xl font-bold mb-7">LOCATION</h3>
            <img
              src="/img3.png"
              alt="Location"
              className="w-28 h-28 mb-4"
            />
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
    </>
  );
}

export default Home;
