import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="Error404 center">
      <span className="Error404-number">404</span>

      <section className="Error404-content center">
        <span> صفحه پیدا نشد </span>
        <span> آدرس مورد نظر یافت نشد!!! </span>
      </section>

      <Link
        to="/"
        className="Error404-btnBack btn btn-warning btn-gradient shadow"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
};

export default Error404;
