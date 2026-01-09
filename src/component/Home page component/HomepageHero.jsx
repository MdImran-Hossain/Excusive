import React from "react";
import { category } from "../../../Databases/database";
import { GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BannerImge from "../../assets/homepagesimages/ban.jpg"

const HomepageHero = () => {
  return (
    <section>
      <div className="container m-auto">
        <div className="flex justify-between">
          
          {/* Categories */}
          <div className="w-[20%] flex flex-col justify-start items-start pt-10 pr-4 border-r-[2px]
          gap-3 border-r-[rgba(0,0,0,0.3)]">
            {category?.map((item, index) => (
              <div
                key={index}
                className="font-poppins font-normal text-[16px] text-black py-2 flex justify-between items-center pr-4 w-full hover:bg-[rgba(0,0,0,0.1)] hover:pl-4 transition-all cursor-pointer"
              >
                <p>{item.categores}</p>
                {item.subcategores && (
                  <span className="text-xl text-black">
                    <GoChevronRight />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Slider */}
          <div className="pt-10 pl-11 w-[80%] ">
            <Swiper
              pagination={{ clickable: true }}
              loop={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {[...new Array(5)].map((_,index)=>{

                 return(
                  <SwiperSlide key={index}>
                <div>
                <img src={BannerImge} alt={BannerImge} className="w-full object-cover" />
                </div>
              </SwiperSlide>
                 )

              })}
             
             
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
