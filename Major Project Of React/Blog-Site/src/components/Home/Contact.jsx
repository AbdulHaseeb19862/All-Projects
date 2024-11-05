import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  return (
    <div className="w-[90vw] h-auto xl:h-56 bg-[#0EB0AA] rounded-md mx-auto p-10 mb-7 flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-10 px-40">
      <div className="flex flex-col items-center gap-3 text-white">
        <FaPhoneSquareAlt className="text-2xl" />
        <p>03049750174</p>
      </div>
      <div className="flex flex-col items-center gap-3 text-white">
        <MdOutlineEmail className="text-2xl" />
        <p>03058465658</p>
      </div>
      <div className="flex flex-col items-center gap-3 text-white ">
        <CiLocationOn className="text-2xl" />
        <p className="text-center w-60 lg:w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
        </p>
      </div>
    </div>
  );
}

export default Contact;
