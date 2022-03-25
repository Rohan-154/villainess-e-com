import { useCart } from "../../Context/cart.jsx";
import { Abbreviations } from "../../Reducer/reducer.jsx";
const ProductListing = ({ products }) => {
  const { state, dispatch } = useCart();
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

            <button
              className="btn-primary-card"

              onClick={() => {
                dispatch({
                  type: Abbreviations.ADD_TO_CART,
                  payload: products,
                });
              }}
            >
              {" "}
              Add to cart{" "}
            </button>

            <button className="icons-card">
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
