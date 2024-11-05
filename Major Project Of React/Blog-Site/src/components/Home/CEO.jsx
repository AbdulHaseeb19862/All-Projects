import React from "react";
import ceo from "../../assets/ceo.png";

function CEO() {
  return (
    <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-12 mb-20 px-12 lg:px-16 mx-auto ">
      <img src={ceo} alt="" className="w-[600px] md:w-[400px] lg:w-[600px]" />
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl">Meer Asad Iqbal</h2>
        <h2 className="text-4xl">(CEO, AD-AIM)</h2>
        <p className="text-2xl mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit
          atque laborum voluptatum a debitis ipsa error officiis vitae,
          asperiores dolore numquam sit hic. Voluptas architecto laboriosam
          labore voluptates incidunt.
        </p>
      </div>
    </div>
  );
}

export default CEO;
