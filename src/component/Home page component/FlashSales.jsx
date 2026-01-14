import React from "react";
import Heading from "../commonComponent/Heading";
import Time from "../commonComponent/Time";
import ProductCard from "../commonComponent/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FlashSales = () => {
  return (
    <section className="pt-35 pb-12">
      <div className="container m-auto">
        <div className="flex flex-col gap-10">
          <div className=" flex justify-between items-end">
            <div className="flex justify-start items-end gap-[87px]">
            <Heading title="Flash Sales" subtitle="Today’s" />
            <Time />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className=" prev w-[46px] h-[46px] bg-f5f5f5 rounded-full flex justify-center items-center"> <span><FaArrowLeft /></span></div>
            <div className="next w-[46px] h-[46px] bg-f5f5f5 rounded-full flex justify-center items-center"> <span><FaArrowRight /></span></div>
          </div>
          </div>

          <div className=" overflow-hidden">
            <Swiper
            loop={true}
              navigation={{
    prevEl: ".prev",
    nextEl: ".next",
  }}
            modules={[ Navigation]}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="mySwiper"
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index} className="!w-[270px]">
                <ProductCard />
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
