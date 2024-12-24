import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"; // Import icons
const Footer = () => {
  return (
    <footer className="bg-[#002570] text-white py-8 pb-5">
      <div className="container mx-auto w-11/12 lg:max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <img
              src="/rdmlogo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-center md:text-left text-base leading-relaxed">
            At the RD Memorial Hospital, we hold our purpose in extending
            state-of-the-art high-quality services in healthcare that is full of
            composites with an aptitude for accurate and creative work.
          </p>
        </div>

        {/* Middle Section: Address and Call Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-3 uppercase">Address</h3>
          <p className="text-base text-center md:text-left">
            Vijay Nagar, Puramufti, Prayagraj, U.P.
          </p>

          <h3 className="font-semibold text-lg mt-6 mb-3 uppercase">
            Call Now
          </h3>
          <a
            href="tel:+91 97179 66193"
            className="text-base hover:text-gray-300 transition duration-300"
          >
            +91 97179 66193
          </a>
          <a
            href="tel:+91 93351 55072"
            className="text-base hover:text-gray-300 transition duration-300"
          >
            +91 93351 55072
          </a>
        </div>

        {/* Right Section: Email and Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-3 uppercase">Email Us</h3>
          <a
            href="mailto:rdmemorialhosp@gmail.com"
            className="text-base hover:text-gray-300 transition duration-300"
          >
            rdmemorialhosp@gmail.com
          </a>

          <h3 className="font-semibold text-lg mt-6 mb-3 uppercase">
            Follow Us
          </h3>
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
      <div className="mt-10 border-t w-[85%] mx-auto rounded-3xl border-blue-700 pt-3 text-center text-sm md:text-base">
        <p>
          &copy; {new Date().getFullYear()} RDM Hospital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
