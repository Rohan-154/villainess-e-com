import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addTocart } from "../../Backend-Services/cartServices";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlistContext";

const WishlistCard = () => {
  const navigate = useNavigate();
  const { wishlistState } = useWishlist();
  const { productsInWishlist } = wishlistState;
  const { token } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { productsInCart } = cartState;
  console.log("rohan", productsInWishlist);
  !token && navigate("/login");
  return (
    <div>
      <h2 class="text-align-center top-margin-7rem">
        {" "}
        <i class="fas fa-heart red"></i> My Wishlist{" "}
      </h2>
      <div class="short-underline"></div>
      {productsInWishlist.length !== 0 ? (
        <div class="grid-layout-3-col">
          {productsInWishlist.map((items) => (
            <div class="all-card-collection">
              <div class="card-container">
                <picture class="background-img">
                  <img
                    src={items.img}
                    alt="imageOfProducts"
                    class="basic-image"
                  />
                </picture>
                <main class="main-body">
                  <h3 class="card-title"> {items.title} </h3>
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
                    {items.rating} <i class="fa-solid fa-star"></i> | 20{" "}
                  </p>
                </main>
                <footer class="footer-card">
                  {productsInCart.find((item) => item._id === items._id) ? (
                    <Link to="/cart">
                      <button class="btn-primary-card"> Go to cart </button>{" "}
                    </Link>
                  ) : (
                    <button
                      class="btn-primary-card"
                      onClick={() => addTocart(token, items, cartDispatch)}
                    >
                      {" "}
                      Move to cart{" "}
                    </button>
                  )}
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
            class="responsive-img e-image-cart"
          />
          <Link to="/shopNow">
            <button class="btn-login login-test" style={{ marginTop: "2rem" }}>
              Explore Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export { WishlistCard };
