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
    categories: { clothing: false, accessories: false, toys: false, electronics:false },
    discount: "",
    rating: "",
    theme:{ punisher: false, daredevil: false, venom: false, deadpool:false, loki:false }
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
