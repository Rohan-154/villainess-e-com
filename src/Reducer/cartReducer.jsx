import { Abbreviations } from "./reducer";
const reducerFunction = (state, action) => {
  switch (action.type) {
    case Abbreviations.ADD_TO_CART:
      return { productsInCart: action.payload };
    case Abbreviations.REMOVE_FROM_CART:
      return { productsInCart: action.payload };
    case Abbreviations.UPDATE_QUANTITY:
      return { productsInCart: action.payload };

    default:
      return state;
  }
};
export { reducerFunction };
