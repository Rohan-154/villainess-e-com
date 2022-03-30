import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { removeFromCart, updateCart } from "../../Backend-Services/cartServices";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cart";
const CartCard = () => {
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { token } = useAuth();
  const { productsInCart } = cartState;
  !token && navigate("/login");
  return (
    <div>
      <h2 className="text-align-center top-margin-7rem">
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
                        alt="image"
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
                        { items.qty > 1 ? (<button
                          className="btn-trash btn-icon"
                          onClick={() => {
                            updateCart(token, items._id, 'decrement', cartDispatch)
                          }}
                          style={{ fontWeight: "bolder" }}
                        > -
                        </button>) : (<button
                          className="btn-trash btn-icon"
                          onClick={() => {
                            removeFromCart(token, items._id, cartDispatch)
                          }}
                          style={{ fontWeight: "bolder" }}
                        > <i className="fa-solid fa-trash"></i>
                        </button>)}
                        
                        <span> {items.qty} </span>
                        <button
                          className="btn-plus btn-icon"
                          onClick={() => {
                            updateCart(token, items._id, 'increment', cartDispatch )
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
                    <button className="btn-login login-test" type="button">
                      Move to wishlist
                    </button>
                  </footer>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-wrap-column">
            <h3> Coupons </h3>
            <button className="btn-login login-test" type="button">
              <i className="fa-solid fa-tag"></i> Apply Coupon
            </button>
            <p> PRICE DETAILS :  item </p>
            <div className="flex-wrap-row">
              <p> Total MRP: </p>
              <p>₹.00</p>
            </div>
            <div className="flex-wrap-row">
              <p> Discount on MRP : </p>
              <p className="green-text">
                ₹
              </p>
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
                <strong>₹</strong>
              </p>
            </div>
            <button className="btn-login login spacer-1rem" type="submit">
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div>
        <h2 className="text-align-center top-margin-7rem">
        <i className="fa-solid fa-cart-shopping red"></i>
        Cart is Empty
      </h2>
      <Link to='/shopNow'>
      <button
          class="btn-login login-test"
        >
        Explore Now 
        </button>
        </Link>
      </div>
      )}
    </div>
  );
};

export { CartCard };
