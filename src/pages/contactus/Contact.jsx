import React, { useEffect } from "react";
import InfoBanner from "../../components/InfoBanner";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
      <div
        className="relative h-[18rem] md:h-[31rem] bg-cover bg-center rounded-3xl md:rounded-[3rem]"
        style={{ backgroundImage: `url('/aboutushosp.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-3xl md:rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-4xl md:text-7xl font-bold font-Bricolage-Grotesque">
              Contact Us
            </h1>
            <p className="mt-2 text-xs md:text-base font-Bricolage-Grotesque">
              HOME / CONTACT US
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="flex flex-col pt-3 lg:max-w-[1200px] w-11/12 md:w-4/5 mx-auto lg:flex-row items-center justify-center lg:space-x-12 py-10 lg:p-16 bg-white">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          {/* <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-3 md:mb-4 font-Bricolage-Grotesque">
            Book Appointment
          </h2>
          <p className="text-gray-600 text-[1rem] md:text-xl leading-tight mb-6">
            Make an Online Appointment Booking For Treatment Patients
          </p> */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf1KUZICwbUHuWFO94gsXZbu8vPz4K3XotkAC6md2jJc5zf7w/viewform?embedded=true"
            className="w-[340px] h-[1090px] mx-auto md:w-[540px] md:h-[537px]"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <div className="w-full lg:w-1/2 px-5">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460894.4613911015!2d81.4519194!3d25.5137837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ad25dad8c7e49%3A0xca7892c13ea4752d!2sR%20D%20Memorial%20Hospital!5e0!3m2!1sen!2sin!4v1734794828912!5m2!1sen!2sin"
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
            <div className="flex space-x-5 items-center">
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">
                  <FaPhoneAlt />{" "}
                </span>
                <span className="text-gray-700">+91 97179 66193</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">
                  <FaPhoneAlt />{" "}
                </span>
                <span className="text-gray-700">+91 97179 66193</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoBanner />
    </div>
  );
}

export default Contact;
