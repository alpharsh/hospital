import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { CiMedicalCase } from "react-icons/ci";

const InfoBanner = () => {
  return (
    <div className="bg-blue-500 text-white py-4">
      <div className="container lg:max-w-[1200px] mx-auto w-5/6 flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section: Icon and Text */}
        <div className="flex items-center space-x-6">
          <div className="bg-white text-blue-500 rounded-full p-8">
            <CiMedicalCase className='text-5xl'/>
          </div>
          <p className="text-4xl font-semibold font-Bricolage-Grotesque w-[42rem]">Since 2007 We’re working with Medical group more than 1200+ Patients</p>
        </div>

        {/* Right Section: Contact Us Button */}
        <div className="mt-4 md:mt-0">
          <a href="tel:+1234567890" className="bg-white text-black hover:bg-blue-100 px-9 py-3 rounded-full flex items-center space-x-2">
            <span className='font-bold text-xl'>Contact Us</span>
            <FaPhoneAlt className='text-2xl text-blue-500'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
