import React from "react";
import { useContext } from "react";
import { pageContext } from "../../context/pageContext";
import { Header, Footer } from "../../components";
import { GoPlus } from "react-icons/go";
import { ImMinus } from "react-icons/im";
import "./ShopCart.css";

const ShopCart = () => {
  const {
    cartItems,
    deleteProductFromCartItems,
    addToCartItems,
    decreasefromCartItems,
    showProductPrice,
    totalPrice,
    alertDeleteAll,
    formatNumber,
    dark,
  } = useContext(pageContext);

  return (
    <>
      <div
        className={`${
          cartItems.length < 2 ? "shop-cart-height" : "shop-cart"
        } center ${dark ? "darkMode" : ""}`}
      >
        <Header />

        <section className="shop-cart__body container-xl">
          {cartItems.length === 0 ? (
            <section className="shop-cart-empty">
              <div className="shop-cart-empty-text rounded-2 shadow">
                سبد خرید شما خالی ست
              </div>
            </section>
          ) : (
            <section className="shop-cart-full">
              <div className="shop-cart-full__right">
                {cartItems.map((item, index) => (
                  <div
                    className="shop-cart-full__list center rounded-2 shadow-sm"
                    key={index}
                  >
                    <span
                      className="shop-list__delete center"
                      onClick={() => deleteProductFromCartItems(item.id)}
                    >
                      <GoPlus size={20} />
                    </span>

                    <img className="shop-list__img" src={item.img} alt="" />

                    <span className="shop-list__name"> {item.name} </span>

                    <span className="shop-list__count">
                      <span
                        className="center rounded-2 shadow-sm"
                        onClick={() => addToCartItems(item)}
                      >
                        <GoPlus size={20} />
                      </span>
                      <span> {item.qty} </span>
                      <span
                        className="center rounded-2 shadow-sm"
                        onClick={() => decreasefromCartItems(item)}
                      >
                        <ImMinus size={12} />
                      </span>
                    </span>

                    <span className="shop-list__price">
                      <span> {formatNumber(showProductPrice(item))} </span>
                      <span>تومان</span>
                    </span>
                  </div>
                ))}
              </div>

              <section className="shop-cart-full__left">
                <div className="factor rounded-2 shadow-sm">
                  <span>جمع کل سبد خرید :</span>

                  <span>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "large",
                        color: "var(--themeRed)",
                        marginLeft: 5,
                      }}
                    >
                      {formatNumber(totalPrice)}
                    </span>{" "}
                    تومان
                  </span>
                </div>

                <div className="shop-cart__buttons">
                  <button className="btn btn-success bg-gradient shadow-sm">
                    پرداخت
                  </button>
                  <button
                    className="btn btn-danger bg-gradient shadow-sm"
                    onClick={() => alertDeleteAll()}
                  >
                    حذف همه
                  </button>
                </div>
              </section>
            </section>
          )}
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ShopCart;
