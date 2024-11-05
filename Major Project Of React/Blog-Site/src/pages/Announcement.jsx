import React from "react";
import NavBar from "../components/Home/NavBar";
import Announcements from "../components/Announcement/Announcements";
import HeroSection from "../components/Home/HeroSection";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

function Announcement() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Announcements />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Announcement;
