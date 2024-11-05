import React from "react";
import customer1 from "../../assets/person6.png";
import customer2 from "../../assets/customer2.jpeg";
import customer3 from "../../assets/customer3.jpeg";
import customer4 from "../../assets/customer4.jpeg";
import customer5 from "../../assets/customer5.jpeg";
import customer6 from "../../assets/customer6.png";
import customer7 from "../../assets/customer7.png";
import customer8 from "../../assets/customer8.png";
import customer9 from "../../assets/customer9.png";
import customer10 from "../../assets/customer10.png";
import customer11 from "../../assets/customer11.png";
import customer12 from "../../assets/customer12.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

function OurCustomer() {
  const customers = [
    {
      image: customer1,
      name: "Dr Nasir Khan",
    },
    {
      image: customer2,
      name: "Wajid Ullah Ghazi",
    },
    {
      image: customer3,
      name: "Wajid Ullah Ghazi",
    },
    {
      image: customer4,
      name: "Wajid Ullah Ghazi",
    },
    {
      image: customer5,
      name: "Dr Zafar Ali Khan",
    },
    {
      image: customer6,
      name: "Cosmetic Club N Clinic",
    },
    {
      image: customer7,
      name: "Wajid Ullah Ghazi",
    },
    {
      image: customer8,
      name: "Wajid Ullah Ghazi",
    },
    {
      image: customer9,
      name: "Wajid Ullah Ghazi",
    },
    {
      image: customer10,
      name: "Wajid Ullah Ghazi",
    },
    {
      image: customer11,
      name: "Wajid Ullah Ghazi",
    },
    {
      image: customer12,
      name: "Wajid Ullah Ghazi",
    },
  ];
  return (
    <div className="mb-20 mt-12">
      <div className="flex flex-col gap-5 text-center pb-10">
        <h2 className="text-2xl md:text-4xl font-semibold">Our Customer</h2>
        <p className="md:w-[750px] lg:w-[1050px] mx-auto text-xl px-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          quas eligendi? Nisi nemo fugiat ea molestiae quas aut aspernatur
          eveniet voluptas voluptatum debitis ducimus harum deleniti iste
          explicabo, maxime culpa.
        </p>
        <p className="px-5">
          The following are our esteemed clients, with whom we have had the
          privilege of working closely to achieve their goals.
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
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center mt-7 p-14">
              <img
                className="w-[200px]  md:w-[150px] lg:w-[200px] h-auto rounded-full"
                src={customer.image}
                alt={customer.name}
              />
              <p className="text-lg font-semibold">{customer.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OurCustomer;
