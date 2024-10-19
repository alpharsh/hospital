import React from "react";
import InfoBanner from "../../components/InfoBanner";
import AppointmentCard from "../../components/AppointmentCard";
import Testimonials from "./Testimonials";
import TreatmentSection from "./TreatmentSection";

function Home() {
  return (
    <>
      <div>Home Page of App</div>
      <TreatmentSection />
      <Testimonials />
      <AppointmentCard />
      <InfoBanner />
    </>
  );
}

export default Home;
