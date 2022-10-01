import { createContext } from "react";

export const pageContext = createContext({
  cartItems: {},
  setCartItems: () => {},
  addToCartItems: () => {},
});
