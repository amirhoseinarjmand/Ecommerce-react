import React from "react";
import { useContext } from "react";
import {
  Home,
  AmazingDiscount,
  Header,
  TopCat,
  NewArrival,
  BigDiscount,
} from "../components";
import { pageContext } from "../context/pageContext";

const Pages = () => {
  const { dark } = useContext(pageContext);

  return (
    <div className={dark ? "Pages darkMode" : "Pages"} >
      <section
        className="home-container"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 1.2rem 1rem -1rem rgba(0,0,0,.15)",
        }}
      >
        <Header />

        <Home />
      </section>

      <AmazingDiscount />

      <TopCat />

      <NewArrival />

      <BigDiscount />
    </div>
  );
};

export default Pages;
