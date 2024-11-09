import React from "react";
import AboutMedical from "../home/AboutMedical";
import InfoBanner from "../../components/InfoBanner";

function About() {
  return (
    <div>
      <div
        className="relative h-[18rem] md:h-[31rem] bg-cover bg-center rounded-3xl md:rounded-[3rem]"
        style={{ backgroundImage: `url('/aboutushosp.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-3xl md:rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-4xl md:text-7xl font-bold font-Bricolage-Grotesque">About Us</h1>
            <p className="mt-2 text-xs md:text-base font-Bricolage-Grotesque">HOME / ABOUT US</p>
          </div>
        </div>
      </div>

      <div className="w-4/5 lg:max-w-[1200px] mx-auto mt-8 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-Bricolage-Grotesque">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a
          leading integrated healthcare services provider in India. It is one of
          the largest healthcare organizations in the country with 28 healthcare
          facilities, 4,500+ operational beds (including O&M facilities), and
          over 400 diagnostics centers (including JVs). Fortis is present in
          India, the United Arab Emirates (UAE), Nepal & Sri Lanka. The Company
          is listed on the BSE Ltd and National Stock Exchange (NSE) of India.
          It draws strength from its partnership with global major and parent
          company - IHH, to build upon its culture of world-class patient care
          and superlative clinical excellence.
        </p>
      </div>
      <AboutMedical />
      <div className="flex lg:max-w-[1200px] flex-col lg:flex-row items-center gap-8 w-11/12 md:w-4/5 mx-auto py-5 md:py-16 px-4">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 font-Bricolage-Grotesque">Our Happy Patients</h2>
        <p className="text-lg text-gray-600 mb-8">
          Professional without enterprise e-commerce. Uniquely happy clients
          innovative technologies via team member.``
        </p>

        {/* Testimonial Card */}
        <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg max-w-md mx-auto lg:mx-0">
          <div className="flex items-center mb-4">
            <img
              src="/doc.png"
              alt="Patient Avatar"
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold">Mikelson Klaus</h4>
              <p className="text-sm">SATISFIED PATIENT</p>
            </div>
          </div>
          <p className="italic text-sm leading-relaxed">
            Commerce end interfaces with collaborative strategies. Appropriately
            enhance alignments after team solutions for growth in corporate
            web-readiness.
          </p>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center lg:justify-start mt-4 space-x-2">
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 ">
        <img
          src="/aboutdoc.png"
          alt="Happy Patient with Doctor"
          className="rounded-3xl shadow-lg"
        />
      </div>
    </div>
      <InfoBanner />
    </div>
  );
}

export default About;
