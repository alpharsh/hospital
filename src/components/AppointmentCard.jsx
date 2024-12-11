import React from "react";
import { GiStethoscope } from "react-icons/gi";
import { Link } from "react-router-dom";

const AppointmentCard = () => {
  return (
    <div className="flex justify-center items-center min-h-full py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative lg:max-w-[1200px] text-white rounded-3xl overflow-hidden mx-auto shadow-2xl p-10 md:p-12 text-center bg-gray-300 sm:bg-gray-200 md:w-3/4 h-auto">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center "
          style={{ backgroundImage: "url('/texture.png')" }}
        ></div>
        <div
          className="absolute hidden sm:block inset-0 z-10 bg-no-repeat bg-left "
          style={{ backgroundImage: "url('/steth.png')" }}
        ></div>
        <div className="relative z-20 flex flex-col items-center">
          <h4 className="text-4xl md:text-7xl font-bold mb-4 font-Bricolage-Grotesque text-[#0022FF]">
            Your health is our priority
          </h4>
          <h2 className="text-base text-[#0022FF] md:text-2xl font-normal leading-tight mb-8 md:mb-10 mx-auto md:w-7/12">
            No matter if you come for your basic health check-up or if you need
            some highly specialized treatment, we are with you each step of the
            way.
          </h2>
          <Link to="/contact">
            <button className="bg-[#0022FF] flex justify-center md:mb-6 items-center text-white md:text-[22px] md:py-2 px-3 md:px-6 rounded-full hover:bg-[#303e99] transition duration-300">
              <span>BOOK APPOINTMENT</span>
              <span className="ml-2">
                <GiStethoscope className="transform -rotate-12 text-3xl" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
