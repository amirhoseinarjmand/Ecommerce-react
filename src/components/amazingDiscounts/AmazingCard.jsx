import React from "react";
import { useState, useContext } from "react";
import { pageContext } from "../../context/pageContext";
import "./AmazingDiscount.css";
import Datas from "./AmazingDiscountData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai";
import { HiPlus, HiOutlineHeart } from "react-icons/hi";

const AmazingCard = () => {
  const [heartCount, setHeartCount] = useState(0);
  const { addToCartItems, formatNumber } = useContext(pageContext);

  const addHeart = () => {
    return setHeartCount(heartCount + 1);
  };

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation]}
      className="AmazingCard"
    >
      {Datas.map((data, index) => {
        const { discount, img, name, price } = data;

        return (
          <SwiperSlide key={index} style={{ padding: "1rem" }}>
            <article className="card-container rounded-2 shadow-sm">
              <span className="rounded-5">{`${discount}% off`}</span>

              <span className="heart center">
                <div className="heart__count rounded-5 center">
                  {heartCount}
                </div>

                <div className="heart__icon" style={{ cursor: "pointer" }}>
                  <HiOutlineHeart size={25} onClick={addHeart} />
                </div>
              </span>

              <img src={img} alt="" />

              <div className="card-container-body">
                <span style={{ fontWeight: "bold", color: "#e78e00" }}>
                  {name}
                </span>

                <span>
                  {
                    <>
                      <AiFillStar
                        size={`${window.innerWidth < 700 ? 10 : 20}`}
                      />
                      <AiFillStar
                        size={`${window.innerWidth < 700 ? 10 : 20}`}
                      />
                      <AiFillStar
                        size={`${window.innerWidth < 700 ? 10 : 20}`}
                      />
                      <AiFillStar
                        size={`${window.innerWidth < 700 ? 10 : 20}`}
                      />
                      <AiFillStar
                        size={`${window.innerWidth < 700 ? 10 : 20}`}
                      />
                    </>
                  }
                </span>

                <span>{`${formatNumber(price)} تومان`}</span>

                <button
                  className="card__add center rounded-2"
                  onClick={() => addToCartItems(data)}
                >
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
