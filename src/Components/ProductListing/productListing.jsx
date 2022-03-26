const ProductListing = ({
  products: {
    title,
    catchName,
    price,
    discardPrice,
    categoryName,
    discount,
    rating,
    theme,
    img,
  },
}) => {
  return (
    <>
      <div className="all-card-collection" style={{margin:'0rem'}}>
        <div className="card-container">
          <picture className="background-img">
            <img
              src={img}
              alt="image"
              className="basic-image"
              style={{width:'20rem'}}
            />
          </picture>
          <main className="main-body">
            <h3 className="card-title"> {title} </h3>
            <p>( {catchName} )</p>
            {/* <p>
              Full Sleeve Graphic Print Men Sweat-shirt Punisher based theme for
              men....
            </p> */}

            <p>
              {" "}
              ₹{price} <s>₹{discardPrice}</s> <strong> ( {discount}% off )</strong>{" "}
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
            <button className="btn-primary-card"> Add to cart </button>

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
