import React from "react";
import InfoBanner from "../../components/InfoBanner";
import AppointmentCard from "../../components/AppointmentCard";
import Testimonials from "./Testimonials";
import TreatmentSection from "./TreatmentSection";
import DoctorsBanner from "../../components/DoctorsBanner";

function Home() {
  return (
    <>
      <DoctorsBanner />
      <TreatmentSection />
      <Testimonials />
      <AppointmentCard />
      <InfoBanner />
    </>
  );
}

export default Home;
