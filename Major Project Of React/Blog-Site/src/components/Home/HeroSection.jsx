import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

function HeroSection() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide className="w-full h-screen">
          <img className="w-full h-screen" src={hero1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-[90vh]">
          <img className="w-full h-screen" src={hero2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;
