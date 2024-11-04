import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hidden h-24 w-full md:flex justify-between items-center lg:px-16 md:px-12 ">
        <img
          className="lg:w-16 lg:h-16 md:h-14 md:w-14 cursor-pointer"
          src={logo}
          alt=""
        />
        <div className="flex justify-evenly lg:gap-10 md:gap-5">
          <ul className="flex items-center lg:gap-8 md:gap-5">
            <li className="cursor-pointer lg:text-xl md:text-lg font-bold">
              Home
            </li>
            <li className="cursor-pointer lg:text-xl md:text-lg font-bold">
              About
            </li>
            <li className="cursor-pointer lg:text-xl md:text-lg font-bold">
              Services
            </li>
            <li className="cursor-pointer lg:text-xl md:text-lg font-bold">
              Blog
            </li>
            <li className="cursor-pointer lg:text-xl md:text-lg font-bold">
              Announcement
            </li>
            <li className="cursor-pointer lg:text-xl md:text-lg font-bold">
              Contact
            </li>
          </ul>
          <Link className="lg:py-3 lg:w-28 md:w-20 md:py-2 bg-[#0B9BDD] transition-all ease-in duration-200 hover:bg-[#2f91be] flex justify-center text-white rounded-md">
            Call Now
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between px-5 pt-2">
        <img className="w-12" src={logo} alt="" />
        <div>
          <button
            className="flex items-center gap-3 border-b-2 border-blue-800"
            onClick={toggleMenu}
          >
            Category <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Conditional Mobile Menu */}
      <div
        className={`md:hidden w-full h-screen ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-[70vh] flex flex-col justify-center items-center gap-7">
          <ul className="flex flex-col gap-7 text-2xl">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Announcement</li>
            <li>Contact</li>
          </ul>

          <Link className="py-3 w-28 bg-[#0B9BDD] transition-all ease-in duration-200 hover:bg-[#2f91be] flex justify-center text-white rounded-md">
            Call Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
