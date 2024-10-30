import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r fixed top-0 z-40 w-full bg-black/20 backdrop-blur-xl text-white py-2 px-8 shadow-lg rounded-bl-2xl rounded-br-2xl">
      <div className="container lg:max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo2.png" alt="Logo" className="h-14" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? "text-blue-500 border-b-2 rounded-md border-blue-500" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              isActive ? "text-blue-500 border-b-2 rounded-md border-blue-500" : "text-white"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => 
              isActive ? "text-blue-500 border-b-2 rounded-md border-blue-500" : "text-white"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              isActive ? "text-blue-500 border-b-2 rounded-md border-blue-500" : "text-white"
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
