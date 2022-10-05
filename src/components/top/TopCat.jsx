import React from "react";
import TopCart from "./TopCart";
import { BiBorderAll } from "react-icons/bi";
import "./TopCat.css";

const TopCat = () => {
  return (
    <div className="TopCat container-lg">
      <section className="Top__title">
        <span
          style={{
            marginRight: "0.5rem",
            marginLeft: "0.5rem",
            color: "var(--themeRed)",
          }}
        >
          <BiBorderAll size={25} />
        </span>
        پرطرفدارترین دسته بندی ها
      </section>

      <TopCart />
    </div>
  );
};

export default TopCat;
