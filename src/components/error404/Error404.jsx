import React from "react";
import "./Error404.css";

const Error404 = () => {
  let X = 0;
  let Y = 0;

  window.addEventListener("mousemove", (e) => {
    X = e.clientX / 5;
    Y = e.clientY / 5;

    const ErrorElem = document.querySelector(".Error404");

    ErrorElem.style.backgroundPositionX = X + "px";
    ErrorElem.style.backgroundPositionY = Y + "px";
  });

  return (
    <div className="Error404 center">
      <span className="Error404-number">404</span>

      <section className="Error404-content center">
        <span> صفحه پیدا نشد </span>
        <span> آدرس مورد نظر یافت نشد!!! </span>
      </section>

      <a
        href="/"
        className="Error404-btnBack btn btn-warning btn-gradient shadow"
      >
        بازگشت به خانه
      </a>
    </div>
  );
};

export default Error404;
