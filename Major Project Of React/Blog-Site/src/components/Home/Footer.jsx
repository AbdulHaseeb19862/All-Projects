import React from "react";
import logo from "../../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="w-full h-auto bg-[#0F7F7D] p-20 flex flex-col xl:flex-row justify-between ">
        <div className="flex flex-col items-center gap-10 xl:items-start xl:gap-0  ">
          <img className="w-32" src={logo} alt="" />
          <div className="flex flex-col gap-7">
            <div>
              <p className="text-gray-600 w-80">
                Would you like to start a project with us? You can visit us at
                the following
              </p>
              <p className="text-gray-600">address:</p>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-gray-600 w-80">
                  FF04, 1st Floor, Awan Tower, Near Mercy Teaching Hospital,
                  Tehkal Payyan, University Road, Peshawar
                </p>
              </div>
              <div className="flex gap-5 text-4xl">
                <div className="py-2 px-2 bg-slate-100 rounded-full">
                  <BsFacebook className="text-blue-600" />
                </div>
                <div className="py-2 px-2 bg-slate-100 rounded-full">
                  <FaLinkedinIn className="text-blue-600" />
                </div>
                <div className="py-2 px-2 bg-slate-100 rounded-full">
                  <RiTiktokLine className="text-red-600" />
                </div>
                <div className="py-2 px-2 bg-slate-100 rounded-full">
                  <FaInstagram className="text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side start from here */}
        <div className="flex flex-col lg:flex-row lg:justify-evenly   gap-6 xl:gap-24 mt-14 ">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl text-white font-semibold ">Quick Links</h2>
            <ul className="text-xl text-white flex flex-col justify-center items-center gap-3">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="flex flex-col  gap-6">
            <h2 className="text-3xl text-white text-center font-semibold">
              Our Services
            </h2>
            <div className="flex flex-col lg:flex-row  items-center gap-8 md:gap-16">
              <ul className="text-xl text-white flex flex-col gap-3">
                <li>Face Book Marketing</li>
                <li>Instagram Marketing</li>
                <li>You Tube Marketing</li>
                <li>You Tube SEO</li>
                <li>Google Adds</li>
              </ul>
              <ul className="text-xl text-white flex flex-col gap-3">
                <li>Tik Tok Marketing</li>
                <li>Tik Tok SEO</li>
                <li>Video Marketing</li>
                <li>Shopify Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <p className="text-white">
          @ 2024 Copyright adaim.pk name.pk name All rights Reserved
        </p>
      </div> */}
    </div>
  );
}

export default Footer;
