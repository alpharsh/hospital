import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { CiMedicalCase } from "react-icons/ci";

const InfoBanner = () => {
  return (
    <div className="bg-blue-500 text-white py-4">
      <div className="container mx-auto w-5/6 flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section: Icon and Text */}
        <div className="flex items-center space-x-4">
          <div className="bg-white text-blue-500 rounded-full p-3">
            {/* Icon */}
            <CiMedicalCase />
          </div>
          <p className="text-lg font-semibold">Since 2007 We’re working with Medical group more than 1200+ Patients</p>
        </div>

        {/* Right Section: Contact Us Button */}
        <div className="mt-4 md:mt-0">
          <a href="tel:+1234567890" className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full flex items-center space-x-2">
            <span>Contact Us</span>
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
