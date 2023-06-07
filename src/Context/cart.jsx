import { useReducer, createContext, useContext } from "react";
import { reducerFunction } from "../Reducer/cartReducer.jsx";

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(reducerFunction, {
    productsInCart: [],
    addressList: [],
    selectedAddress: {},
  });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
const CartContext = createContext();

export { CartProvider, useCart };
