import { Abbreviations } from "./reducer";

const wishlistReducer = (state, action) => {
    switch (action.type) {
      case Abbreviations.WISHLIST_INITIAL:
        return { productsInWishlist: action.payload };
  
      case Abbreviations.ADD_TO_WISHLIST:
        return { productsInWishlist: action.payload };
  
      case Abbreviations.REMOVE_FROM_WISHLIST:
        return { productsInWishlist: action.payload };
  
      default:
        return state;
    }
  };
  
  export { wishlistReducer };
  