import { Link } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlistContext";
import '../Navbar/navbar.css'
const NavBar = () => {
  const { token, logOutHandler } = useAuth();
  const { cartState } = useCart();
  const { productsInCart } = cartState;
  const {wishlistState} = useWishlist()
  return (
    <nav className="land-navbar">
      <h1 className="land-heading-title">
        V / N <br />
        <span className="land-quote-div"> Shop What You Desire </span>
      </h1>
      <a className="land-hamburgerBtn">
        <i className="fas fa-bars fa-lg"></i>
      </a>
      <div className="land-navbar-links">
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
      <div className="land-social-link-nav">
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>
        {!token ? (
          <Link to="/login" className="social-landing-page flex-column">
            <i class="fa-solid fa-user fa-lg"></i> Login
          </Link>
        ) : (
          <div
            to="/login"
            className="social-landing-page flex-column"
            onClick={logOutHandler}
            style={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </div>
        )}

        <Link
          to={token ? "/wishlist" : "/login"}
          href="/Components-E-Com/wishlist.html"
          className="social-landing-page flex-column"
        >
          <div className="parent-badge-container">
           <span><i className="fa-solid fa-heart fa-lg badge-wishlist"></i></span>
           <span className="badge-e-com badge-count-wish"> {wishlistState.productsInWishlist.length}</span>
           </div>
         
        </Link>

        <Link to={token ? "/cart" : "/login"} className="landing-page-link">
          {" "}
          <div  className="parent-badge-container">
           <span><i className="fa-solid fa-cart-shopping fa-lg"></i></span>
           <span className="badge-e-com badge-count-cart">{productsInCart.length}</span>
           </div>
          
        </Link>
      </div>
    </nav>
  );
};

export { NavBar };
