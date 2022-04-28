import { useParams } from "react-router";
import { useFetch } from "../../custom-hooks/useFetch";
import '../SingleProductPage/singleProduct.css';
const SingleProduct = () => {
  const { productId } = useParams();
  const { data: singleProduct, loader } = useFetch(
    `/api/products/${productId}`,
    "product"
  );
  return (
    <div className="productDetails-wrapper">
      <img src={singleProduct.img} className="single-prod-img"/>
      <div className="product-details">
        <h3>{singleProduct.title}</h3>
        <p>{`aka ${singleProduct.catchName}`}</p>
        <p>
          MRP: ₹{singleProduct.price} <s>₹{singleProduct.discardPrice}</s>
        </p>
        <p>inclusive of all taxes</p>
        <p>
          {" "}
          {singleProduct.rating}
          <i className="fa-solid fa-star"></i>
        </p>
        <p>sold by Villainess - V/N</p>
        <p>{singleProduct.description}</p>
      </div>
    </div>
  );
};

export { SingleProduct };
