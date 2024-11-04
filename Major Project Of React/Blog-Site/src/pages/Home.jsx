import React from "react";
import NavBar from "../components/Home/NavBar";
import HeroSection from "../components/Home/HeroSection";
import Help from "../components/Home/Help";
import SocialPlateForm from "../components/Home/SocialPlateForm";
import CEO from "../components/Home/CEO";

function Home() {
  return (
    <div className="">
      <NavBar className="absolute z-1" />

      <div className="relative z-10">
        <HeroSection />
      </div>
      <Help></Help>
      <SocialPlateForm></SocialPlateForm>
      <CEO />
    </div>
  );
}

export default Home;
