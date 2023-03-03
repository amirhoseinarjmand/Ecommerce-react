import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useLocation } from "react-router-dom";

export default function Head() {
  const Location = useLocation();
  const LocationIsShopCart = Location.pathname === "/shopCart";

  return LocationIsShopCart ? null : (
    <div className="Head d-none d-sm-block">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        dir="ltr"
        navigation={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="Header-head"
      >
        <SwiperSlide>
          <img
            src={require("../../assets/headPic/headPic1.jpg")}
            className="img-fluid"
            style={{ cursor: "pointer" }}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={require("../../assets/headPic/headPic2.jpg")}
            className="img-fluid"
            style={{ cursor: "pointer" }}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
