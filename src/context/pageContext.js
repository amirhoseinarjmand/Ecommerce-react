import { createContext } from "react";

export const pageContext = createContext({
  cartItems: {},
  setCartItems: () => {},
  addToCartItems: () => {},
  decreasefromCartItems: () => {},
  deleteProductFromCartItems: () => {},
  showProductPrice: () => {},
  totalPrice: () => {},
  showPriceQty: () => {},
  allQtyProduct: {},
  alertDeleteAll: () => {},
});
