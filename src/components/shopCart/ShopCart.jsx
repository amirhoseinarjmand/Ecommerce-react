import React from "react";
import { useContext } from "react";
import { pageContext } from "../../context/pageContext";
import { Header } from "../../components";
import "./ShopCart.css";

const ShopCart = () => {
  const { cartItems } = useContext(pageContext);

  return (
    <>
      <div className="shop-cart center">
        <Header />

        <section className="shop-cart__body container">
          {cartItems.length === 0 ? (
            <section className="shop-cart-empty center rounded-2 py-5 shadow">
              <span>سبد خرید شما خالی ست</span>
            </section>
          ) : (
            <section className="shop-cart-full">
              <div className="shop-cart-full__right py-5 rounded-2 shadow-smnpm ">
                factore
              </div>

              <div className="shop-cart-full__left">
                {cartItems.map((item, index) => (
                  <div className="shop-cart-full__list center py-5 rounded-2 shadow-sm">
                    {item.name}
                  </div>
                ))}
              </div>
            </section>
          )}
        </section>
      </div>
    </>
  );
};

export default ShopCart;
