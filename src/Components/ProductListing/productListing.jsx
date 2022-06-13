import { addTocart } from "../../Backend-Services/cartServices.jsx";
import { useAuth } from "../../Context/authContext.jsx";
import { useCart } from "../../Context/cart.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./productListing.css";
import { addToWishlist } from "../../Backend-Services/wishlistService.jsx";
import { useWishlist } from "../../Context/wishlistContext.jsx";
const ProductListing = ({ products }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { productsInCart } = cartState;
  const { wishlistDispatch } = useWishlist();
  const { title, catchName, price, discardPrice, rating, img } = products;
  return (
    <>
      <div className="all-card-collection">
        <div className="card-container">
          <picture className="background-img">
            <img
              src={img}
              alt="-products-image"
              className="basic-image"
              style={{ width: "20rem" }}
            />
          </picture>
          <main className="main-body">
            <h3 className="card-title"> {title} rohan</h3>
            <p>( {catchName} )</p>
            <p>
              {" "}
              ₹{price} <s>₹{discardPrice}</s>{" "}
              <strong>
                {" "}
                ( {Number((price / discardPrice) * 100).toFixed(0)}% off )
              </strong>{" "}
            </p>
            <p>
              {" "}
              {rating} <i className="fa-solid fa-star"></i> | 20
            </p>
          </main>
          <footer className="footer-card">
            {productsInCart.find((items) => items._id === products._id) ? (
              <Link to="/cart">
                <button className="btn-primary-card">Go to cart</button>
              </Link>
            ) : (
              <button
                className="btn-primary-card"
                onClick={() => {
                  {
                    token
                      ? addTocart(token, products, cartDispatch)
                      : navigate("/login");
                  }
                }}
              >
                {" "}
                Add to cart{" "}
              </button>
            )}
            <button
              className="icons-card"
              onClick={() => {
                token
                  ? addToWishlist(token, products, wishlistDispatch)
                  : navigate("/login");
              }}
            >
              {" "}
              <i className="fas fa-heart"></i>{" "}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export { ProductListing };
