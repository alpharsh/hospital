import React from "react";
import InfoBanner from "../../components/InfoBanner";
import AppointmentCard from "../../components/AppointmentCard";
import Testimonials from "./Testimonials";
import TreatmentSection from "./TreatmentSection";
import DoctorsBanner from "../../components/DoctorsBanner";
import AboutMedical from "./AboutMedical";

function Home() {
  return (
    <>
      <AboutMedical />
      <DoctorsBanner />
      <TreatmentSection />
      <Testimonials />
      <AppointmentCard />
      <InfoBanner />
    </>
  );
}

export default Home;
