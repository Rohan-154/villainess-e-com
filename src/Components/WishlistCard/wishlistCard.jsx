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
  console.log("rohan",productsInWishlist);
  !token && navigate("/login");
  return (
    <div>
      <h2 class="text-align-center top-margin-7rem">
        {" "}
        <i class="fas fa-heart red"></i> My Wishlist{" "}
      </h2>
      <div class="short-underline"></div>
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
    </div>
  );
};

export { WishlistCard };
