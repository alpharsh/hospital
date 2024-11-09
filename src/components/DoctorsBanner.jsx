import React from "react";
import { TbMedicalCross } from "react-icons/tb";

const DoctorsBanner = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r overflow-hidden from-[#8797FF] via-[#002570] to-[#8797FF] py-4 shadow-md">
      <div className="w-full overflow-hidden relative">
        <div className="flex items-center font-Bricolage-Grotesque animate-marquee">
          {/* Repeat the content twice to create a seamless loop */}
          <div className="flex">
            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              CARDIOLOGIST
            </h2>
            <span className="text-black text-3xl md:text-5xl">
              <TbMedicalCross />
            </span>

            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              NEUROLOGIST
            </h2>
            <span className="text-black text-3xl md:text-5xl">
              <TbMedicalCross />
            </span>

            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              GYNECOLOGIST
            </h2>
          </div>

          <span className="text-black text-3xl md:text-5xl">
            <TbMedicalCross />
          </span>

          <div className="flex">
            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              CARDIOLOGIST
            </h2>
            <span className="text-black text-3xl md:text-5xl">
              <TbMedicalCross />
            </span>

            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              NEUROLOGIST
            </h2>
            <span className="text-black text-3xl md:text-5xl">
              <TbMedicalCross />
            </span>

            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              GYNECOLOGIST
            </h2>
          </div>

          <span className="text-black text-3xl md:text-5xl">
            <TbMedicalCross />
          </span>

          <div className="flex">
            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              CARDIOLOGIST
            </h2>
            <span className="text-black text-3xl md:text-5xl">
              <TbMedicalCross />
            </span>

            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              NEUROLOGIST
            </h2>
            <span className="text-black text-3xl md:text-5xl">
              <TbMedicalCross />
            </span>

            <h2 className="text-white text-2xl md:text-4xl font-bold mx-2 md:mx-6">
              GYNECOLOGIST
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsBanner;
