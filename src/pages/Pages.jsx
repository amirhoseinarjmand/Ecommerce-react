import React from "react";
import { Home, AmazingDiscount, Header } from "../components";

const Pages = () => {
  return (
    <div className="Pages">
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
    </div>
  );
};

export default Pages;
