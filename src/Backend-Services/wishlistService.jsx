import axios from "axios";
import { toast } from "react-toastify";
import { Abbreviations } from "../Components/Abbreviations";
const getWishlistData = async (token, wishlistDispatch) => {
  try {
    const res = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    wishlistDispatch({
      type: Abbreviations.WISHLIST_INITIAL,
      payload: res.data.wishlist,
    });
  } catch (error) {
    console.log(error);
  }
};

const addToWishlist = async (token, product, wishlistDispatch,toastProps) => {
  try {
    const res = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    wishlistDispatch({
      type: Abbreviations.ADD_TO_WISHLIST,
      payload: res.data.wishlist,
    });
    toast.success(`${product.title} added to wishlist!`, toastProps);
  } catch (error) {
    console.log(error);
  }
};
const removeFromWishlist = async (token, productId, wishlistDispatch) => {
  if (!token) {
    navigate("/login");
  } else {
    try {
      const res = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: token },
      });
      wishlistDispatch({
        type: Abbreviations.REMOVE_FROM_WISHLIST,
        payload: res.data.wishlist,
      });
      toast.warning(`Item removed from wishlist!`, toastProps);
    } catch (error) {
      console.log(error);
    }
  }
};
export { getWishlistData, addToWishlist, removeFromWishlist };
