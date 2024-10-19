import React from "react";
import { GiStethoscope } from "react-icons/gi";

const AppointmentCard = () => {
  return (
    <div className="flex justify-center items-center min-h-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative text-white rounded-3xl overflow-hidden mx-auto shadow-2xl p-12 text-center bg-gray-400 md:w-3/4 h-auto">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center "
          style={{ backgroundImage: "url('/texture.png')" }}
        ></div>
        <div
          className="absolute inset-0 z-10 bg-no-repeat bg-left "
          style={{ backgroundImage: "url('/steth.png')" }}
        ></div>
        <div className="relative z-20 flex flex-col items-center">
          <h4 className="text-7xl font-bold mb-4 font-Bricolage-Grotesque text-[#0022FF]">
            Make Appointment
          </h4>
          <h2 className="text-2xl text-[#0022FF] md:text-2xl font-semibold leading-tight mb-10 mx-auto md:w-7/12">
            Make an Online Appoinemnt Booking For Treatment Patients
          </h2>
          <button className="bg-[#0022FF] flex justify-center mb-6 items-center text-white text-[22px] py-2 px-6 rounded-full hover:bg-[#303e99] transition duration-300">
            <span>MAKE AN APPOINTMENT</span>
            <span className="ml-2"><GiStethoscope className="font-bold"/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
