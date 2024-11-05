import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";

function SocialPlateForm() {
  const plateForms = [
    {
      icon: <FiFacebook color="blue" />,
      plateform: "Facebook Marketing",
      desc: "Enhance your brand's presence and elevate your business with our specialized and tailored Facebook marketing strategies and solutions",
    },
    {
      icon: <FaInstagram color="yellow" />,
      plateform: "Instagram Marketing",
      desc: "Amplify your brand's impact and elevate your business with our comprehensive and targeted Instagram marketing solutions",
    },
    {
      icon: <LuYoutube color="red" />,
      plateform: "Youtube Marketing",
      desc: "Boost your brand's visibility and amplify your business with our strategic and tailored YouTube marketing solutions",
    },
    {
      icon: <LuYoutube color="red" />,
      plateform: "Youtube SEO",
      desc: "Optimize your YouTube presence and maximize your video visibility with our expert and tailored YouTube SEO services and strategies.",
    },
    {
      icon: <LuYoutube color="red" />,
      plateform: "Youtube SEO",
      desc: "Optimize your YouTube presence and maximize your video visibility with our expert and tailored YouTube SEO services and strategies.",
    },
    {
      icon: <LuYoutube color="red" />,
      plateform: "Youtube SEO",
      desc: "Optimize your YouTube presence and maximize your video visibility with our expert and tailored YouTube SEO services and strategies.",
    },
  ];
  return (
    <div className="mt-5 mb-10">
      <h2 className="text-center text-2xl md:text-4xl font-semibold">
        Social Media PlateForm
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-10 md:px-32 pt-8">
        {plateForms.map((plateform, index) => {
          return (
            <>
              <div
                key={index}
                className="flex flex-col gap-2 border-b-2 border-gray-300 mt-10 pb-10"
              >
                <div className="text-2xl">{plateform.icon}</div>
                <div>
                  <h2 className="text-xl">{plateform.plateform}</h2>
                  <p className="text-lg">{plateform.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SocialPlateForm;
