import React from "react";
import Slider from "./Slider";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home container-lg">
      <section className="slider">
        <Slider />
      </section>

      <section className="Home__left center">
        <img
          className="img-fluid rounded-1 shadow-sm"
          src={require("../../assets/images/SlideCard/left-slide1.jpg")}
          alt=""
        />
        <img
          className="img-fluid rounded-1 shadow-sm"
          src={require("../../assets/images/SlideCard/left-slide2.jpg")}
          alt=""
        />
        <img
          className="img-fluid rounded-1 shadow-sm"
          src={require("../../assets/images/SlideCard/left-slide3.jpg")}
          alt=""
        />
      </section>
    </div>
  );
};

export default Home;
