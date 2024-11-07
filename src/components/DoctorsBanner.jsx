import React from "react";
import { TbMedicalCross } from "react-icons/tb";

const DoctorsBanner = () => {
  return (
    <div className="flex items-center mt-6 justify-center bg-gradient-to-r overflow-hidden from-[#8797FF] via-[#002570] to-[#8797FF] py-4  shadow-md">
      <div className="flex justify-between space items-center lg:max-w-[1200px] w-4/5 font-Bricolage-Grotesque">
        <h2 className="text-white text-4xl font-bold mx-4">CARDIOLOGIST</h2>
        <span className="text-black text-5xl">
          <TbMedicalCross />
        </span>

        <h2 className="text-white text-4xl font-bold mx-4">NEUROLOGIST</h2>

        <span className="text-black text-5xl">
          <TbMedicalCross />
        </span>

        <h2 className="text-white text-4xl font-bold mx-4">GYNECOLOGIST</h2>
      </div>
    </div>
  );
};

export default DoctorsBanner;
