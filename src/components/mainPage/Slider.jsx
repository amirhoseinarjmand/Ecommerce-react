import React from "react";
import Datas from "./mainPageData";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowNarrowLeft } from "react-icons/hi";

import "./Home.css";

const Slider = () => {
  return (
    <>
      <Swiper
        dir="ltr"
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper center"
      >
        {Datas.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <article className="slide-cart">
                <section className="slide-cart__right center">
                  <p className="center">
                    <span>{data.title.title_number}</span>
                    <span>{data.title.title_desc}</span>
                  </p>

                  <p>{data.desc}</p>

                  <button className="rounded-2 shadow center">
                    <HiArrowNarrowLeft />
                    خرید
                  </button>
                </section>

                <section className="slide-cart__left">
                  <img
                    src={data.img}
                    alt=""
                    style={{ width: "10rem", height: "10rem" }}
                  />
                </section>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
