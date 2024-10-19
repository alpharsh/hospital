import React from "react";

const AppointmentCard = () => {
  return (
    <div className="max-w-md mb-5 mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div
        className="relative p-8 text-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://path-to-your-background-image.jpg')",
        }}
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Make Appointment</h2>
        <p className="text-blue-500 mb-4">
          Make an Online Appointment Booking For Treatment Patients
        </p>
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full flex items-center justify-center">
          <span>MAKE AN APPOINTMENT</span>
          <span className="ml-2">🩺</span>
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
