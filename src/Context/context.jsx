import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { reducerFunction } from "../Reducer/reducer";
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    sortBy: "",
    price: 4000,
    categories: { clothing: false, Accessories: false, toys: false },
    discount: "",
    rating: "",
  });
  return (
    <>
      <ProductContext.Provider value={{ state, dispatch }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
