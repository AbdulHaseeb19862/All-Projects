import React from "react";
import ceo from "../../assets/ceo.png";

function CEO() {
  return (
    <div className="w-[90vw] flex justify-center items-center gap-5 px-28 mx-auto ">
      <img src={ceo} alt="" className="w-[700px]" />
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
