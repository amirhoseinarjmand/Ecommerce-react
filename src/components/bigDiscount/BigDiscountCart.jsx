import React from "react";
import Datas from "./BigD";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { pageContext } from "../../context/pageContext";
// import FormatNumber from "../../formatNumber";

const BigDiscountCart = () => {
  const { formatNumber } = useContext(pageContext);

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
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
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
                className="BigDiscountCart-slide__img img-fluid"
                style={{ alignSelf: "center" }}
                src={img}
                alt=""
              />
              <span> {name} </span>
              <span> {formatNumber(price)} </span>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BigDiscountCart;
