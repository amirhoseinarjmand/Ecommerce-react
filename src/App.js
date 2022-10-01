import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pages, ShopCart } from "./components";
import { pageContext } from "./context/pageContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div className="App">
      <pageContext.Provider
        value={{
          cartItems,
          setCartItems,
          addToCartItems,
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
