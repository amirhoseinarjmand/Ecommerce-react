import React from "react";
import Datas from "./NewData";
import "./NewArrival.css";
import { useContext } from "react";
import { pageContext } from "../../context/pageContext";

const NewCart = () => {
  const {formatNumber} = useContext(pageContext)

  return (
    <div className="new-cart-container rounded-2 shadow-sm">
      <div className="new-cart-slide rounded-2">
        {Datas.map((item, index) => {
          return (
            <article key={index} className="new-cart-slide-container">
              <img className="new-cart-slide__img rounded-2" src={item.img} alt="" />
              <span> {item.name} </span>
              <span> {formatNumber(item.price)} </span>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default NewCart;
