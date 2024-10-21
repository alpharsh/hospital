import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';  // Import icons

const Footer = () => {
  return (
    <footer className="bg-[#002570] text-white py-8">
      <div className="container w-11/12 lg:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>
          <p className="text-sm">
            Completely promote interdependent systems for the latest updates in the medical field.
          </p>
        </div>

        {/* Middle Section: Address and Call Info */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p>102/ B Street, New Elephant Road, Sandigo, USA</p>

          <h3 className="font-semibold text-lg mt-4 mb-2">Call Now</h3>
          <p>+123 (4567) - 890</p>
        </div>

        {/* Right Section: Email and Social Icons */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg mb-2">Email-US</h3>
          <p>example@gmail.com</p>

          <h3 className="font-semibold text-lg mt-4 mb-2">Social</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-300" size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-gray-300" size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white hover:text-gray-300" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-gray-300" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
