import React from "react";
import { TbDiscount2 } from "react-icons/tb";
import AmazingCard from "./AmazingCard";
import "./AmazingDiscount.css";

const amazingDiscount = () => {
  return (
    <div className="Amazing-discount container-lg">
      <div className="title">
        <TbDiscount2 style={{ color: "var(--themeRed)" }} /> تخفیفات شگفت انگیز
      </div>

      <AmazingCard />
    </div>
  );
};

export default amazingDiscount;
