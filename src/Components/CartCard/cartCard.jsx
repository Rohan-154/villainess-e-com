import { useCart } from "../../Context/cart";
import { Abbreviations } from "../Abbreviations";

const CartCard = () => {
  const { state, dispatch } = useCart();
  const { itemsInCart, totalPrice, productsInCart, discountPrice } = state;
  return (
    <div>
      <h2 className="text-align-center top-margin-7rem">
        <i className="fa-solid fa-cart-shopping red"></i> My Shopping Cart
      </h2>
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
              key={items._id}>
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
                      <h3 className="small-font-size card-title"> {items.title}</h3>

                      <p>
                        ₹{items.price} <s>₹{items.discardPrice} </s>
                        <strong>({items.discount})%</strong>
                      </p>
                      <div className="flex-wrap-row">
                        <button className="btn-trash btn-icon" onClick={()=>{
                          dispatch({type: Abbreviations.DECREASE_QUANTITY, payload: items})
                        }}>
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        
                        <span> {items.qty} </span>
                        <button className="btn-plus btn-icon" onClick={()=>{dispatch({type:Abbreviations.INCREASE_QUANTITY, payload:items})}}> + </button>
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
          <p> PRICE DETAILS : {itemsInCart} item </p>
          <div className="flex-wrap-row">
            <p> Total MRP: </p>
            <p>₹{discountPrice}.00</p>
          </div>
          <div className="flex-wrap-row">
            <p> Discount on MRP : </p>
            <p className="green-text">₹{Number(discountPrice - totalPrice)}.00</p>
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
              <strong>₹{totalPrice}</strong>
            </p>
          </div>
          <button className="btn-login login spacer-1rem" type="submit">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
