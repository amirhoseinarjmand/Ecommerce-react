import React from "react";
import BigDiscountCart from "./BigDiscountCart";
import { BsFillGiftFill } from "react-icons/bs";
import './BigDiscount.css'

const BigDiscount = () => {
  return (
    <div className="BigDiscount container-lg">
      <section className="BigDiscount__title container-lg">
        <span
          style={{
            marginRight: "0.5rem",
            marginLeft: "0.2rem",
            color: "var(--themeRed)",
          }}
        >
          <BsFillGiftFill size={20} />{" "}
        </span>
        بیشترین تخفیف ها
      </section>

      <BigDiscountCart />
    </div>
  );
};

export default BigDiscount;
