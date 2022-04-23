import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { useFetch } from "../custom-hooks/useFetch";
import { reducerFunction } from "../Reducer/reducer";
const ProductProvider = ({ children }) => {
  const[searchInput, setSearchInput] = useState('');
  const {
    data: products,
    error,
    loader,
  } = useFetch("/api/products", "products")
  const toastProps = {
    theme:'dark',
    closeOnClick: true,
    autoClose: 1000,
    pauseOnHover: true,
    position: "top-right",
  }
  const [state, dispatch] = useReducer(reducerFunction, {
    sortBy: "",
    price: 4000,
    categories: {
      clothing: false,
      accessories: false,
      toys: false,
      electronics: false,
    },
    discount: "",
    rating: "",
    theme: {
      punisher: false,
      daredevil: false,
      venom: false,
      deadpool: false,
      loki: false,
    },
  });
  return (
    <>
      <ProductContext.Provider value={{ state, dispatch,searchInput,setSearchInput,toastProps,products,error,
    loader}}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
