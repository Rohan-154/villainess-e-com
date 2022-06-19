import { useParams } from "react-router";
import { addTocart } from "../../Backend-Services/cartServices";
import { addToWishlist } from "../../Backend-Services/wishlistService";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cart";
import { useProduct } from "../../Context/product";
import { useWishlist } from "../../Context/wishlistContext";
import { useFetch } from "../../custom-hooks/useFetch";
import "../SingleProductPage/singleProduct.css";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const { token } = useAuth();
  const { productId } = useParams();
  const { data: singleProduct } = useFetch(
    `/api/products/${productId}`,
    "product"
  );
  const { cartDispatch } = useCart();
  const { toastProps } = useProduct();
  const { wishlistState, wishlistDispatch } = useWishlist();
  return (
    <div className="productDetails-wrapper">
      <img src={singleProduct.img} className="single-prod-img" />
      <div className="product-details">
        <h3>{singleProduct.title}</h3>
        <p className="red-color">{`aka ${singleProduct.catchName}`}</p>
        <p className="green-text">
          MRP: ₹{singleProduct.price}{" "}
          <s className="red-color">₹{singleProduct.discardPrice}</s>
        </p>
        <p>price inclusive of all taxes</p>
        <p>
          {" "}
          {singleProduct.rating}
          <i className="fa-solid fa-star" style={{ color: "#cccc00" }}></i>
        </p>
        <p>
          sold by <strong>Villainess - V/N</strong>
        </p>
        <p>{singleProduct.description}</p>
        <div className="flex-wrap-sp">
          <button
            className="btn-login login atc-fixed"
            onClick={() => {
              {
                token
                  ? addTocart(token, singleProduct, cartDispatch, toastProps)
                  : navigate("/login");
              }
            }}
          >
            Add to cart
          </button>
          {wishlistState.productsInWishlist.find(
            (items) => items._id === singleProduct._id
          )
          ? (
          <Link to="/wishlist">
            <button className="btn-login login-test atw-fixed">
              Go to wishlist
            </button>
          </Link>
          ) : (
          <button
            className="btn-login login-test atw-fixed"
            onClick={() => {
              token
                ? addToWishlist(
                    token,
                    singleProduct,
                    wishlistDispatch,
                    toastProps
                  )
                : navigate("/login");
            }}
          >
            Add to wishlist
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { SingleProduct };
