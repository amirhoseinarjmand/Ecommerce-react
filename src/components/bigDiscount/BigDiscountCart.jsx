import React from "react";
import Datas from "./BigD";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BigDiscountCart = () => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="BigDiscountCart"
    >
      {Datas.map((data, index) => {
        const { img, name, price } = data;

        return (
          <SwiperSlide key={index} style={{ padding: "1rem" }}>
            <article className="BigDiscountCart-slide-container rounded-2 shadow-sm">
              <img
                className="BigDiscountCart-slide__img"
                style={{ alignSelf: "center" }}
                src={img}
                alt=""
              />
              <span> {name} </span>
              <span> {price} </span>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BigDiscountCart;
