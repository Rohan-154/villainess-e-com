import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  updateCart,
} from "../../Backend-Services/cartServices";
import { addToWishlist } from "../../Backend-Services/wishlistService";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlistContext";
import "./cartCard.css";
import { Footer } from "../Footer/footer";
import { Bill } from "../Pure-Functions/bill.jsx";
import { useEffect } from "react";
const CartCard = () => {
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { token } = useAuth();
  const { productsInCart } = cartState;
  const {wishlistDispatch } = useWishlist();
  const billDetails = Bill(productsInCart);
  const { currentPrice, discountPrice } = billDetails;
  const finalPrice = currentPrice - discountPrice;
  !token && navigate("/login");
  useEffect(()=>{document.title='Cart'},[])
  return (
    <div className="cartMainDiv">
      <h2 className="text-align-center top-margin-7rem underline cart-title">
        <i className="fa-solid fa-cart-shopping red"></i>
        My Shopping Cart
      </h2>
      {productsInCart.length !== 0 ? (
        <div className="cart-content-wrapper">
          <div className="flex-wrap-shop-2">
            <div className="address-wrapper">
              <p>
                Deliver to: <strong> Admin user, 43789</strong>
              </p>
              <button className="btn-login login-test" type="button">
                Change Address
              </button>
            </div>

            {productsInCart.map((items) => (
              <div
                className="all-card-collection"
                style={{ margin: "1rem 3rem 0rem" }}
                key={items._id}
              >
                <div className="card-container">
                  <div className="card-container-row-direction">
                    <picture className="background-img">
                      <img
                        src={items.img}
                        alt="image-cart-items"
                        className="change-in-bg-width"
                      />
                    </picture>
                    <main className="main-body">
                      <h3 className="small-font-size card-title">
                        {" "}
                        {items.title}
                      </h3>

                      <p>
                        ₹{items.price} <s>₹{items.discardPrice} </s>
                        <strong>({items.discount})%</strong>
                      </p>
                      <div className="flex-wrap-row">
                        {items.qty > 1 ? (
                          <button
                            className="btn-trash btn-icon"
                            onClick={() => {
                              updateCart(
                                token,
                                items._id,
                                "decrement",
                                cartDispatch
                              );
                            }}
                            style={{ fontWeight: "bolder" }}
                          >
                            {" "}
                            -
                          </button>
                        ) : (
                          <button
                            className="btn-trash btn-icon"
                            onClick={() => {
                              removeFromCart(token, items._id, cartDispatch);
                            }}
                            style={{ fontWeight: "bolder" }}
                          >
                            {" "}
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        )}

                        <span> {items.qty} </span>
                        <button
                          className="btn-plus btn-icon"
                          onClick={() => {
                            updateCart(
                              token,
                              items._id,
                              "increment",
                              cartDispatch
                            );
                          }}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </main>
                  </div>
                  <footer className="footer-card flex-wrap-row m-l-auto">
                    <p>
                      {items.rating} <i className="fa-solid fa-star"></i> | 400
                    </p>
                    <button
                      className="btn-login login-test"
                      type="button"
                      onClick={() => {
                        removeFromCart(token, items._id, cartDispatch);
                        addToWishlist(token, items, wishlistDispatch);
                      }}
                    >
                      Move to wishlist
                    </button>
                  </footer>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-wrap-column">
            <h3 style={{ margin: "1rem" }}> Coupons </h3>
            <button className="btn-login login-test" type="button">
              <i className="fa-solid fa-tag"></i> Apply Coupon
            </button>
            <p> PRICE DETAILS : {productsInCart.length} item </p>
            <div className="flex-wrap-row">
              <p> Total MRP: </p>
              <p>₹{currentPrice} .00</p>
            </div>
            <div className="flex-wrap-row">
              <p> Special Festive Off : </p>
              <p className="green-text">₹{discountPrice}</p>
            </div>
            <div className="flex-wrap-row">
              <p> Delivery Charges : </p>
              <p>
                <s>₹60</s> <span className="green-text"> FREE </span>
              </p>
            </div>
            <div className="flex-wrap-row">
              <p> Total Amount : </p>
              <p>
                <strong>₹{finalPrice}</strong>
              </p>
            </div>
            <button className="btn-login login spacer-1rem" type="submit">
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="divEmpty">
          <img
            src="data:image/png;base64,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"
            alt="cart-empty-img"
            className="responsive-img e-image-cart"
          />
          <Link to="/shopNow">
            <button
              className="btn-login login-test"
              style={{ marginTop: "2rem" }}
            >
              Explore Now
            </button>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export { CartCard };
