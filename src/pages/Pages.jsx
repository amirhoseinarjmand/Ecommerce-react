import React from "react";
import { useContext } from "react";
import {
  Home,
  AmazingDiscount,
  Header,
  TopCat,
  NewArrival,
  BigDiscount,
  Brands,
  Footer,
} from "../components";
import { pageContext } from "../context/pageContext";

const Pages = () => {
  const { dark } = useContext(pageContext);

  return (
    <div className={`Pages ${dark ? " darkMode" : ""}`}>
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

      <Brands />

      <Footer />
    </div>
  );
};

export default Pages;
