import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'; // Import icons
const Footer = () => {
  return (
    <footer className="bg-[#002570] text-white py-8 pb-5">
      <div className="container mx-auto w-11/12 lg:max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <img
              src="/rdmlogo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-center md:text-left text-base leading-relaxed">
            Completely promote interdependent systems for the latest updates in
            the medical field.
          </p>
        </div>

        {/* Middle Section: Address and Call Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-3 uppercase">Address</h3>
          <p className="text-base text-center md:text-left">
            102/ B Street, New Elephant Road, Sandigo, USA
          </p>

          <h3 className="font-semibold text-lg mt-6 mb-3 uppercase">Call Now</h3>
          <a
            href="tel:+1234567890"
            className="text-base hover:text-gray-300 transition duration-300"
          >
            +123 (4567) - 890
          </a>
        </div>

        {/* Right Section: Email and Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-3 uppercase">Email Us</h3>
          <a
            href="mailto:example@gmail.com"
            className="text-base hover:text-gray-300 transition duration-300"
          >
            example@gmail.com
          </a>

          <h3 className="font-semibold text-lg mt-6 mb-3 uppercase">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm md:text-base">
        <p>&copy; {new Date().getFullYear()} RDM Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
