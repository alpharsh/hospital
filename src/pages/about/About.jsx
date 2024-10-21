import React from "react";
import AboutMedical from "../home/AboutMedical";
import InfoBanner from "../../components/InfoBanner";

function About() {
  return (
    <div>
      <div
        className="relative h-[31rem] bg-cover bg-center rounded-[3rem]"
        style={{ backgroundImage: `url('/aboutushosp.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-7xl font-bold font-Bricolage-Grotesque">About Us</h1>
            <p className="mt-2 font-Bricolage-Grotesque">HOME / ABOUT US</p>
          </div>
        </div>
      </div>

      <div className="w-4/5 lg:max-w-[1200px] mx-auto mt-8 mb-20">
        <h2 className="text-5xl font-bold mb-4 font-Bricolage-Grotesque">About Us</h2>
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
      <InfoBanner />
    </div>
  );
}

export default About;
