import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../Reducer/wishlistReducer";

const wInitialState = {
  productsInWishlist: [],
};
const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    wInitialState
  );
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {" "}
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

const WishlistContext = createContext();

export { useWishlist, WishlistProvider };
