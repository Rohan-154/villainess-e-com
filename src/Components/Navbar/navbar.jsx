import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlistContext";
import "../Navbar/navbar.css";
import { useProduct } from "../../Context/product";
import { Abbreviations } from "../Abbreviations";
const NavBar = () => {
  const { token } = useAuth();
  const { cartState } = useCart();
  const { productsInCart } = cartState;
  const { wishlistState } = useWishlist();
  const [nav, setNav] = useState(false);
  const {dispatch, setSearchInput} = useProduct();
  const navigate = useNavigate();
  return (
    <nav className="land-navbar">
      <h1 className="land-heading-title">
        V / N <br />
        <span className="land-quote-div"> Shop What You Desire </span>
      </h1>
      <button
        className="land-hamburgerBtn"
        onClick={() => setNav((nav) => !nav)}
      >
        <i className="fas fa-bars fa-lg"></i>
      </button>
      <div className={`land-navbar-links ${nav ? " active" : ""}`}>
        <ul className="ul-landing-page">
          <li className="li-landing-page">
            <Link to="/" className="landing-page-link">
              {" "}
              Home
            </Link>
          </li>
          <li className="li-landing-page">
            <Link to="/shopNow" className="landing-page-link">
              {" "}
              Shop Now
            </Link>
          </li>
        </ul>
      </div>
      <div className="land-social-link-nav-e">
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
            onChange={(e)=> {
              navigate('/shopNow');
              setSearchInput(e.target.value);
            }}
          />
        </div>
        {!token ? (
          <Link to="/login" className="social-landing-page flex-column">
            <i className="fa-solid fa-user fa-lg"></i> Login
          </Link>
        ) : (
          <Link to="/dashboard" className="social-landing-page flex-column" style={{ cursor: "pointer" }}>
            <i class="fa-solid fa-user fa-lg"></i> DashBoard
          </Link>
        )}

        <Link
          to={token ? "/wishlist" : "/login"}
          href="/Components-E-Com/wishlist.html"
          className="social-landing-page flex-column"
        >
          <div className="parent-badge-container">
            <span>
              <i className="fa-solid fa-heart fa-lg badge-wishlist"></i>
            </span>
            <span className="badge-e-com badge-count-wish">
              {" "}
              {wishlistState.productsInWishlist.length}
            </span>
          </div>
        </Link>

        <Link to={token ? "/cart" : "/login"} className="landing-page-link">
          {" "}
          <div className="parent-badge-container">
            <span>
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </span>
            <span className="badge-e-com badge-count-cart">
              {productsInCart.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export { NavBar };
