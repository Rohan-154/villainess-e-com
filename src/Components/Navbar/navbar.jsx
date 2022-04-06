import { Link } from "react-router-dom";

const NavBar = () => {
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
        <a
          href="/Components-E-Com/login.html"
          className="social-landing-page flex-column"
        >
          <i className="fa-solid fa-user fa-lg"></i> Login
        </a>
        <a
          href="/Components-E-Com/wishlist.html"
          className="social-landing-page flex-column"
        >
          <i className="fa-solid fa-heart fa-lg"></i> Wishlist
        </a>
        <Link to="/cart" className="landing-page-link">
          {" "}
          <i className="fa-solid fa-cart-shopping fa-lg"></i> Cart
        </Link>
      </div>
    </nav>
  );
};

export { NavBar };
