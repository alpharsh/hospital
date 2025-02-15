import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { CiMedicalCase } from "react-icons/ci";
import { Link } from 'react-router-dom';

const InfoBanner = () => {
  return (
    <div className="bg-blue-500 text-white py-3 overflow-hidden">
      <div className="container lg:max-w-[1200px] mx-auto w-[90%] md:w-5/6 flex flex-col md:flex-row items-center justify-between md:px-6">
        {/* Left Section: Icon and Text */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="bg-white text-blue-500 rounded-full p-3 md:p-5">
            <CiMedicalCase className=' text-2xl md:text-3xl'/>
          </div>
          <p className="text-[0.8rem] md:text-3xl font-semibold leading-tight font-Bricolage-Grotesque md:w-[42rem]">Since 1985 We’re Serving with Medical group more than 1,00,000+ Patients</p>
        </div>

        {/* Right Section: Contact Us Button */}
        <div className="mt-2 md:mt-0">
          <Link to="/contact" className="bg-white text-black hover:bg-blue-100 px-2 md:px-5 py-1 md:py-2 rounded-full flex items-center space-x-2">
            <span className='font-semibold font-Bricolage-Grotesque text-xs md:text-lg'>Contact Us</span>
            <FaPhoneAlt className='text-xs md:text-xl text-blue-500'/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
