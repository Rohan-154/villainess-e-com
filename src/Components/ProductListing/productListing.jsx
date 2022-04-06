import { addTocart } from "../../Backend-Services/cartServices.jsx";
import { useAuth } from "../../Context/authContext.jsx";
import { useCart } from "../../Context/cart.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import './productListing.css';
import { addToWishlist } from "../../Backend-Services/wishlistService.jsx";
import { useWishlist } from "../../Context/wishlistContext.jsx";
const ProductListing = ({ products }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { productsInCart } = cartState;
  console.log(productsInCart._id);
  const{wishlistState, wishlistDispatch} = useWishlist();
  const {productsInWishlist} = wishlistState;
  const {
    title,
    catchName,
    price,
    discardPrice,
    categoryName,
    discount,
    rating,
    theme,
    img,
  } = products;
  
  return (
    <>
      <div className="all-card-collection" style={{ margin: "0rem" }}>
        <div className="card-container">
          <picture className="background-img">
            <img
              src={img}
              alt="image"
              className="basic-image"
              style={{ width: "20rem" }}
            />
          </picture>
          <main className="main-body">
            <h3 className="card-title"> {title} </h3>
            <p>( {catchName} )</p>
            <p>
              {" "}
              ₹{price} <s>₹{discardPrice}</s>{" "}
              <strong> ( {discount}% off )</strong>{" "}
            </p>
            <p>
              {" "}
              <strong> Deal of the Day</strong>
            </p>
            <p>
              {" "}
              {rating} <i className="fa-solid fa-star"></i> | 20
            </p>
          </main>
          <footer className="footer-card">
            {productsInCart.find((items) => items._id === products._id) ? (
              <Link to='/cart'>
              <button className="btn-primary-card">Go to cart</button>
              </Link>
            ) : (
              <button
                className="btn-primary-card"
                onClick={() => {
                  { token ? addTocart(token, products, cartDispatch) : navigate('/login')}
                }}
              >
                {" "}
                Add to cart{" "}
              </button>
            )}
            <button className="icons-card" onClick={()=> addToWishlist(token, products, wishlistDispatch)}>
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
