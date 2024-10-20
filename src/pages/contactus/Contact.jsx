import React from "react";
import InfoBanner from "../../components/InfoBanner";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <div
        className="relative h-[31rem] bg-cover bg-center rounded-[3rem]"
        style={{ backgroundImage: `url('/aboutushosp.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-7xl font-bold font-Bricolage-Grotesque">
              Contact Us
            </h1>
            <p className="mt-2 font-Bricolage-Grotesque">HOME / CONTACT US</p>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="flex flex-col w-4/5 mx-auto lg:flex-row items-center justify-center lg:space-x-12 p-8 lg:p-16 bg-white">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold text-blue-700 mb-4 font-Bricolage-Grotesque">
            Make Appointment
          </h2>
          <p className="text-gray-600 text-xl mb-6">
            Make an Online Appointment Booking For Treatment Patients
          </p>
          <form className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full mb-4 lg:mb-0"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                type="text"
                placeholder="Interested in"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full mb-4 lg:mb-0"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full h-32"
            ></textarea>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Prayagraj&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              className="w-full h-64 lg:h-72"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Location Map"
            ></iframe>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">
                <FaLocationDot />
              </span>
              <span className="text-gray-700">Lucknow, Uttar Pradesh</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">
                <FaPhoneAlt />{" "}
              </span>
              <span className="text-gray-700">+91 7007 618 589</span>
            </div>
          </div>
        </div>
      </div>
      <InfoBanner />
    </div>
  );
}

export default Contact;
