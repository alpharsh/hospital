import React from "react";
import { Link } from "react-router-dom";

const AboutMedical = () => {
  return (
    <div className="mb-10 md:my-14 overflow-hidden">
      <div className="w-4/5 lg:max-w-[1200px] mb-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-3xl md:text-6xl font-Bricolage-Grotesque font-bold">
            About Medical
          </h1>
          <div className="flex items-center space-x-3 md:space-x-7 font-Bricolage-Grotesque">
            <div className="text-4xl font-bold">10+</div>
            <div className="w-1/2 md:text-xl">YEARS OF EXPERIENCE</div>
          </div>
        </div>
        <div className="border-t-2 border-blue-600 w-full my-0 md:my-3"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-lg lg:max-w-[1200px] w-4/5 mx-auto">
        {/* Left Section: Image */}
        <div className="md:w-[40%] flex justify-center mb-6 md:mb-0 md:px-14">
          <img
            src="/doc.png"
            alt="Medical Professional"
            className="rounded-lg shadow-lg w-11/12 md:w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          {/* About Us Description */}
          <h3 className="text-2xl md:text-4xl font-semibold">About Us</h3>
          <p className="md:text-lg leading-tight">
            Since 2007 We're working Medical group of more than 1200+ Patients
            help from our medical.
          </p>

          {/* List */}
          <ul className="space-y-2">
            <li className="flex items-center  md:text-lg text-blue-600">
              <span className="mr-2 text-black">&#10038;</span> Completely to
              syndicate
            </li>
            <li className="flex items-center  md:text-lg text-blue-600">
              <span className="mr-2 text-black">&#10038;</span> Professional
              Doctors
            </li>
            <li className="flex items-center  md:text-lg text-blue-600">
              <span className="mr-2 text-black">&#10038;</span> We're Putting
              your Comfort List
            </li>
            <li className="flex items-center  md:text-lg text-blue-600">
              <span className="mr-2 text-black">&#10038;</span> Medical Surgical
              Services
            </li>
            <li className="flex items-center  md:text-lg text-blue-600">
              <span className="mr-2 text-black">&#10038;</span> Instant
              Operations System
            </li>
            <li className="flex items-center  md:text-lg text-blue-600">
              <span className="mr-2 text-black">&#10038;</span> 100%
              Satisfaction Rate
            </li>
          </ul>

          {/* Button */}
          <Link to="/about">
            <button className="mt-6 px-4 md:px-6 py-1 md:py-2 bg-blue-600 text-white text-base md:text-lg font-semibold rounded-full hover:bg-blue-700 transition flex items-center">
              More About <span className="ml-2">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMedical;
