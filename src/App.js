import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pages, ShopCart } from "./components";
import { pageContext } from "./context/pageContext";

// @desc: get product from LocalStorage
const getDatasFromLocalStorage = () => {
  const data = localStorage.getItem("product");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [cartItems, setCartItems] = useState(getDatasFromLocalStorage());
  const [allQtyProduct, setAllQtyProduct] = useState(0);

  // ________________________ ShopCart __________________________

  // @desc: save product in LocalStorage
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cartItems));

    showPriceQty(cartItems);
  }, [cartItems]);

  // @desc: send product's items to shop cart
  const addToCartItems = (product) => {
    const existProduct = cartItems.find((item) => item.id === product.id);

    if (existProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existProduct, qty: existProduct.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // @desc: decrease Number of products from shop cart
  const decreasefromCartItems = (product) => {
    const existProduct = cartItems.find((item) => item.id === product.id);

    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...existProduct, qty: item.qty > 1 ? existProduct.qty - 1 : 1 }
          : item
      )
    );
  };

  // @desc: show price of products for all qty in shop cart
  const showProductPrice = (product) => {
    return product.price * product.qty;
  };

  // @desc: calucate total of products in shop cart
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // @desc: delete one product from shop cart
  const deleteProductFromCartItems = (id) => {
    const filteredCartItems = cartItems.filter((item) => {
      return item.id !== id;
    });

    setCartItems(filteredCartItems);
  };

  // @desc: sum all of qty of product
  const showPriceQty = (product) => {
    const qtyArray = product.map((item) => item.qty);

    setAllQtyProduct(qtyArray.reduce((total, number) => total + number, 0));
  };

  // ________________________ ShopCart __________________________

  return (
    <div className="App">
      <pageContext.Provider
        value={{
          cartItems,
          setCartItems,
          addToCartItems,
          deleteProductFromCartItems,
          decreasefromCartItems,
          showProductPrice,
          totalPrice,
          allQtyProduct,
          showPriceQty,
        }}
      >
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/shopCart" element={<ShopCart />} />
        </Routes>

        <div style={{ height: "200rem" }}></div>
      </pageContext.Provider>
    </div>
  );
}

export default App;
