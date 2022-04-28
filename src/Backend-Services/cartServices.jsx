import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Abbreviations } from "../Components/Abbreviations";
toast.configure();
const addTocart = async (token, product, cartDispatch, toastProps) => {
  try {
    const res = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: token } }
    );
    cartDispatch({ type: Abbreviations.ADD_TO_CART, payload: res.data.cart });
    toast.success(`${product.title} added to cart!`, toastProps);
  } catch (error) {
    console.log(error);
  }
};

const removeFromCart = async (token, productId, cartDispatch,toastProps) => {
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    cartDispatch({
      type: Abbreviations.REMOVE_FROM_CART,
      payload: res.data.cart,
    });
    toast.warning(`Item removed from cart!`, toastProps);
  } catch (error) {
    console.log(error);
  }
};
const updateCart = async (token, productId, quantityType, cartDispatch) => {
  try {
    const res = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: quantityType,
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    cartDispatch({
      type: Abbreviations.UPDATE_QUANTITY,
      payload: res.data.cart,
    });
  } catch (error) {
    console.log(error);
  }
};
export { addTocart, removeFromCart, updateCart };
