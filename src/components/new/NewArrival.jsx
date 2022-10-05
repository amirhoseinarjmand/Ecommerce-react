import React from "react";
import NewCart from "./NewCart";
import "./NewArrival.css";

const NewArrival = () => {
  return (
    <div className="NewArrival container-lg">
      <section className="Top__title">
        <span
          style={{
            marginRight: "0.5rem",
            marginLeft: "0.5rem",
            color: "var(--themeRed)",
          }}
        >
          <img
            src={require("../../assets/images/icons/new.png")}
            style={{ width: "2rem" }}
            alt=""
          />
        </span>
        محصولات تازه
      </section>

      <NewCart />
    </div>
  );
};

export default NewArrival;
