import React from "react";
import NavBar from "../components/Home/NavBar";
import HeroSection from "../components/Home/HeroSection";
import Blogs from "../components/Blog/Blogs";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

function Blog() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Blog;
