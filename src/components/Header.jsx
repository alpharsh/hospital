import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Array of routes for navigation
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r fixed top-0 z-50 w-full bg-[#002570]/70 backdrop-blur-xl text-white py-[0.47rem] md:py-2 px-8 shadow-lg md:rounded-bl-2xl md:rounded-br-2xl">
      <div className="container lg:max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/rdmlogo.png" alt="Logo" className="h-9 p-[0.30rem] md:h-10" />
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 rounded-sm border-blue-500"
                  : "text-white"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // Close Icon
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
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
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 rounded-2xl w-full bg-[#002570]/70 backdrop-blur-3xl text-white overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] transform ${
          isOpen
            ? "translate-y-[72px] opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{ zIndex: isOpen ? 40 : -1 }}
      >
        <nav className="flex flex-col bg-[#002570]/40 backdrop-blur-3xl items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 rounded-sm border-blue-500"
                  : "text-white"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
