import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addTocart } from "../../Backend-Services/cartServices";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlistContext";

import { removeFromWishlist } from "../../Backend-Services/wishlistService";

const WishlistCard = () => {
  const navigate = useNavigate();
  const { wishlistDispatch, wishlistState } = useWishlist();
  const { productsInWishlist } = wishlistState;
  const { token } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { productsInCart } = cartState;
  !token && navigate("/login");
  useEffect(() => {
    document.title = "Wishlist";
  }, []);
  return (
    <div>
      <h2
        className="text-align-center top-margin-7rem"
        style={{ marginTop: "9rem", fontSize: "1.5rem" }}
      >
        {" "}
        <i className="fas fa-heart red"></i> My Wishlist{" "}
      </h2>
      <div className="short-underline"></div>
      {productsInWishlist.length !== 0 ? (
        <div className="grid-layout-3-col">
          {productsInWishlist.map((items) => (
            <div className="all-card-collection" key={items._id}>
              <div className="card-container contain-wishlist">
                <picture className="background-img">
                  <img
                    src={items.img}
                    alt="imageOfProducts"
                    className="basic-image"
                  />
                </picture>
                <main className="main-body">
                  <h3 className="card-title"> {items.title} </h3>
                  <p>( {items.catchName} )</p>

                  <p>
                    {" "}
                    ₹{items.price} <s>₹{items.discardPrice}</s>{" "}
                    <strong> ({items.discount}% off)</strong>{" "}
                  </p>
                  <p>
                    {" "}
                    <strong> Deal of the Day</strong>
                  </p>
                  <p>
                    {" "}
                    {items.rating} <i className="fa-solid fa-star"></i> | 20{" "}
                  </p>
                </main>
                <footer className="footer-card">
                  {productsInCart.find((item) => item._id === items._id) ? (
                    <Link to="/cart">
                      <button className="btn-primary-card"> Go to cart </button>{" "}
                    </Link>
                  ) : (
                    <button
                      className="btn-primary-card"
                      onClick={() => addTocart(token, items, cartDispatch)}
                    >
                      {" "}
                      Move to cart{" "}
                    </button>
                  )}
                  <button
                    className={`icons-card`}
                    onClick={() => {
                      removeFromWishlist(token, items._id, wishlistDispatch);
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </footer>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="divEmpty">
          <img
            src="https://2.bp.blogspot.com/-QfSOClZc8r0/XNr6srFlzjI/AAAAAAAAGlA/lzs505eFFiEdyAytzKkMabdUTihKywcqwCLcBGAs/s1600/EXAM360%2B-%2BNo%2BWishlist.png"
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
    </div>
  );
};

export { WishlistCard };
