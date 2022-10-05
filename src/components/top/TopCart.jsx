import React from "react";
import Datas from "./TopData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const TopCart = () => {
  return (
    <div className="TopCart">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="AmazingCard"
      >
        {Datas.map((data, index) => {
          const { img, para, desc } = data;

          return (
            <SwiperSlide key={index} style={{ padding: "1rem" }}>
              <div className="TopCart-slider__container rounded-2 shadow-sm center">
                <img className="rounded-2" src={img} alt="" />
                <span className="TopCart-slider__name rounded-5 shadow-sm">
                  {" "}
                  {para}{" "}
                </span>
                <span className="TopCart-slider__desc rounded-5 shadow-sm">
                  {" "}
                  {desc}{" "}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopCart;
