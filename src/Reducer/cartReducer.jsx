import { Abbreviations } from "./reducer";
import { FuncAddToCart } from "../Components/Pure-Functions/addToCart";
import { FuncIncreaseQuantity } from "../Components/Pure-Functions/increaseQuantity";
import { DecreaseQuantity } from "../Components/Pure-Functions/decreaseQuantity";
const reducerFunction = (state, action) => {
  switch (action.type) {
    case Abbreviations.ADD_TO_CART:
      return FuncAddToCart(state, action);
    case Abbreviations.INCREASE_QUANTITY:
      return FuncIncreaseQuantity(state, action);
    case Abbreviations.DECREASE_QUANTITY:
      return DecreaseQuantity(state, action);
    default:
      return state;
  }
};
export { reducerFunction };
