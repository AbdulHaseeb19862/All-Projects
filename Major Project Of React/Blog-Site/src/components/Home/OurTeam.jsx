import React from "react";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.jpeg";
import person5 from "../../assets/person5.png";
import person6 from "../../assets/person6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

function OurTeam() {
  const team = [
    {
      image: person1,
      name: "Wajid Ullah Ghazi",
      desc: "Data Analyst",
    },
    {
      image: person2,
      name: "Wajid Ullah Ghazi",
      desc: "Data Analyst",
    },
    {
      image: person3,
      name: "Wajid Ullah Ghazi",
      desc: "Data Analyst",
    },
    {
      image: person4,
      name: "Wajid Ullah Ghazi",
      desc: "Data Analyst",
    },
    {
      image: person5,
      name: "Wajid Ullah Ghazi",
      desc: "Data Analyst",
    },
    {
      image: person6,
      name: "Wajid Ullah Ghazi",
      desc: "Data Analyst",
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-5 text-center pb-10">
        <h2 className="text-2xl md:text-4xl font-semibold">
          How can I help you
        </h2>
        <p className="md:w-[750px] lg:w-[1050px] mx-auto text-xl px-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          quas eligendi? Nisi nemo fugiat ea molestiae quas aut aspernatur
          eveniet voluptas voluptatum debitis ducimus harum deleniti iste
          explicabo, maxime culpa.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-2 p-14">
              <img
                className="w-[200px] md:w-[150px] lg:w-[200px] h-auto rounded-full"
                src={member.image}
                alt={member.name}
              />
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="text-sm text-gray-600">{member.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OurTeam;
