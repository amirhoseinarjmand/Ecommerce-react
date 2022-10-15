import React from "react";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle , AiFillFacebook } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer shadow-sm">
      <section className="footer__top">
        <span>راه های ارتباطی</span>

        <span>فروشگاه</span>

        <span>بلاگ</span>

        <span>
            <FiInstagram size={25} style={{ marginLeft: 5 }} />
            <AiFillTwitterCircle size={25} style={{ marginLeft: 5 }} />
            <AiFillFacebook size={25} style={{ marginLeft: 5 }} />
            <IoLogoYoutube size={25} style={{ marginLeft: 5 }} />
        </span>
      </section>

      <section className="footer__bottom">
        <span>
          <span>تلفن پشتیبانی: 1536</span>
          <span>آدرس: خیابان احمد قصیر طبقه 3</span>
          <span>ایمیل: info@okala.com</span>
        </span>

        <span>
          <span>درباره فروشگاه</span>
          <span>تماس با فروشگاه</span>
          <span>رنک فروشگاه</span>
        </span>

        <span>
          <span>خدمات مشتریان</span>
          <span>حمل و نقل</span>
          <span>سوالات متداول</span>
        </span>

        <div className="footer__img">
          <img
            src={require("../../assets/images/footer/arrivals1.png")}
            alt=""
          />
          <img
            src={require("../../assets/images/footer/arrivals2.png")}
            alt=""
          />
          <img
            src={require("../../assets/images/footer/arrivals5.png")}
            alt=""
          />
          <img
            src={require("../../assets/images/footer/arrivals6.png")}
            alt=""
          />
          <img
            src={require("../../assets/images/footer/arrivals3.png")}
            alt=""
          />
          <img
            src={require("../../assets/images/footer/arrivals4.png")}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Footer;
