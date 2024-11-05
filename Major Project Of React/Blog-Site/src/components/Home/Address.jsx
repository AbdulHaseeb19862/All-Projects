import React from "react";

function Address() {
  return (
    <div className="px-24 flex flex-col gap-5 mb-10 border-b-2 border-gray-300 pb-5 w-[90vw] mx-auto">
      <div>
        <h2 className="text-3xl font-semibold">
          Would you like to start a project with us?
        </h2>
        <p className="text-xl text-gray-500">
          you can visit us add the following address:
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-1 text-xl text-gray-500">
          <p>FF04, 1st Floor, Awan Tower,</p>
          <p>Near Mercy Teaching Hospital,</p>
          <p>Tehkal Payyan, University Road,</p>
          <p>Peshawar</p>
        </div>
        <div className="hidden md:flex flex-col gap-2 ">
          <button className="bg-[#1BACEE] py-3 px-4 rounded-md text-white">
            Call Now
          </button>
          <button className="bg-[#1BACEE] py-3 px-8 rounded-md text-white">
            Chat on WhatsApp
          </button>
        </div>
      </div>
      <p className="text-xl text-gray-500">Email: fayazkhan@gmail.com</p>
      <div className="flex flex-col gap-4 w-56 mt-7 md:hidden">
        <button className="bg-[#1BACEE] py-3 px-4 rounded-md text-white">
          Call Now
        </button>
        <button className="bg-[#1BACEE] py-3 px-8 rounded-md text-white">
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Address;
