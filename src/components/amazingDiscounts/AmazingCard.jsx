import React from "react";
import "./AmazingDiscount.css";
import Datas from "./AmazingDiscountData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";

const AmazingCard = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Navigation]}
      className="AmazingCard"
    >
      {Datas.map((data, index) => {
        const { discount, img, name, price } = data;

        return (
          <SwiperSlide key={index} style={{ padding: "1rem" }}>
            <article className="card-container rounded-2 shadow-sm">
              <span className="rounded-5">{`${discount}% off`}</span>
              <img src={img} alt="" />

              <div className="card-container-body">
                <span style={{ fontWeight: "bold" , color: '#e78e00' }}>{name}</span>

                <span>
                  {
                    <>
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                    </>
                  }
                </span>

                <span>{`${price}.000 تومان`}</span>

                <button className="card__add center rounded-2">
                  <HiPlus size={20} />
                </button>
              </div>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AmazingCard;
