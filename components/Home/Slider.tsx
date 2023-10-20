// Import Swiper React components
import React from "react";
import { Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default () => {
  return (
    <Swiper
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          width={1980}
          alt="NextUI hero Image"
          src="/slide-1.jpg"
          className="objet-cover w-[1900px] h-[780px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1980}
          alt="NextUI hero Image"
          src="/slide-5.jpg"
          className="objet-cover w-[1900px] h-[780px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1980}
          alt="NextUI hero Image"
          src="/slide-3.jpg"
          className="objet-cover w-[1900px] h-[780px]"
        />
      </SwiperSlide>
    </Swiper>
  );
};
