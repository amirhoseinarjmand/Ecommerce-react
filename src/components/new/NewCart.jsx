import React from "react";
import Datas from "./NewData";
import "./NewArrival.css";

const NewCart = () => {
  return (
    <div className="new-cart-container rounded-2 shadow-sm">
      <div className="new-cart-slide">
        {Datas.map((item, index) => {
          return (
            <article key={index} className="new-cart-slide-container">
              <img className="new-cart-slide__img" src={item.img} alt="" />
              <span> {item.name} </span>
              <span> {`${item.price}.000`} </span>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default NewCart;
