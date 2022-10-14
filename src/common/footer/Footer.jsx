import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer bg-gradient bg-dark">
      <section className="">
        <span
          style={{
            cursor: "default",
            fontWeight: "bolder",
            fontSize: "1.4rem",
            color: "var(--themeRed)",
          }}
        >
          راه های ارتباطی
        </span>
        <span>تلفن پشتیبانی: 1536</span>
        <span>
          آدرس: خیابان احمد قصیر (بخارست)، خیابان پانزدهم غربی (احمدیان)، پلاک
          11، طبقه 3
        </span>
        <span>ایمیل: info@okala.com</span>
      </section>

      <section className="">
        <span
          style={{
            cursor: "default",
            fontWeight: "bolder",
            fontSize: "1.4rem",
            color: "var(--themeRed)",
          }}
        >
          فروشگاه
        </span>
        <span>بلاگ</span>
        <span>درباره فروشگاه</span>
        <span>تماس با فروشگاه</span>
        <span>رنک فروشگاه</span>
      </section>

      <section className="">
        <span
          style={{
            cursor: "default",
            fontWeight: "bolder",
            fontSize: "1.4rem",
            color: "var(--themeRed)",
          }}
        >
          خدمات مشتریان
        </span>
        <span>حمل و نقل</span>
        <span>سوالات متداول</span>
        <span>شرایط مرجوعی کالا</span>
        <span>حریم خصوصی</span>
      </section>
    </div>
  );
};

export default Footer;
