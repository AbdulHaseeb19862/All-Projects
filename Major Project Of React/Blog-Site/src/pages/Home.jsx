import React from "react";
import NavBar from "../components/Home/NavBar";
import HeroSection from "../components/Home/HeroSection";
import Help from "../components/Home/Help";
import SocialPlateForm from "../components/Home/SocialPlateForm";
import CEO from "../components/Home/CEO";
import OurTeam from "../components/Home/OurTeam";
import OurCustomer from "../components/Home/OurCustomer";
import Address from "../components/Home/Address";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

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
      <OurTeam />
      <OurCustomer />
      <Address></Address>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
