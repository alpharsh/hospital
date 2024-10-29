import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r fixed top-0 z-40 w-full bg-black/40 backdrop-blur-xl text-white py-4 px-8 shadow-lg rounded-bl-2xl rounded-br-2xl">
      <div className="container lg:max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? "text-blue-400" : "text-white hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              isActive ? "text-blue-400" : "text-white hover:text-gray-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => 
              isActive ? "text-blue-400" : "text-white hover:text-gray-300"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              isActive ? "text-blue-400" : "text-white hover:text-gray-300"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* For mobile, add a menu icon (optional) */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
