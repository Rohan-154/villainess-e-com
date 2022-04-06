const { createContext, useContext } = require("react");
import { useReducer } from "react";
import { reducerFunction } from "../Reducer/cartReducer.jsx";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    itemsInCart: 0,
    totalPrice: 0,
    discountPrice:0,
    productsInCart: [],
    isEdit: false
  });
  return <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);
const CartContext = createContext();

export { CartProvider, useCart };
