import { useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/product";
import { Abbreviations } from "../Abbreviations";
import "../CategoryList/categoryList.css";
const CategoryList = () => {
  const { dispatch } = useProduct();
  const navigate = useNavigate();
  return (
    <>
      <div
        className="all-card-collection"
        onClick={() => {
          dispatch({ type: Abbreviations.CLOTHING });
          navigate("/shopNow");
        }}
        style={{ margin: "2rem 3rem 0rem" }}
      >
        <div className="card-contain-e-land">
          <main className="wrap-up main-body-e-land">
            <h3 className="bolder change-pos-e-land card-title-e-land">
              Clothing
            </h3>
            <picture className="background-img-e-com">
              <img
                src="https://villainess-e-store.netlify.app/Assets/category-1.jpg"
                alt="category-image"
                className="basic-image-e-land"
              />
            </picture>
          </main>
        </div>
      </div>
      <div
        className="all-card-collection"
        onClick={() => {
          dispatch({ type: Abbreviations.ACCESSORIES });
          navigate("/shopNow");
        }}
        style={{ margin: "2rem 3rem 0rem" }}
      >
        <div className="card-contain-e-land">
          <main className="wrap-up main-body-e-land">
            <h3 className="bolder change-pos-e-land card-title-e-land">
              Accessories
            </h3>
            <picture className="background-img-e-com">
              <img
                src="https://villainess-e-store.netlify.app/Assets/Marvel-Must-Haves-Loki-Episode-5-1.jpg"
                alt="category-image"
                className="basic-image-e-land"
              />
            </picture>
          </main>
        </div>
      </div>
      <div
        className="all-card-collection"
        onClick={() => {
          dispatch({ type: Abbreviations.TOYS });
          navigate("/shopNow");
        }}
        style={{ margin: "2rem 3rem 0rem" }}
      >
        <div className="card-contain-e-land">
          <main className="wrap-up main-body-e-land">
            <h3 className="bolder change-pos-e-land card-title-e-land">Toys</h3>
            <picture className="background-img-e-com">
              <img
                src="https://villainess-e-store.netlify.app/Assets/toys.jpg"
                alt="category-image"
                className="basic-image-e-land"
              />
            </picture>
          </main>
        </div>
      </div>
      <div
        className="all-card-collection"
        onClick={() => {
          dispatch({ type: Abbreviations.ELECTRONICS });
          navigate("/shopNow");
        }}
        style={{ margin: "2rem 3rem 0rem" }}
      >
        <div className="card-contain-e-land">
          <main className="wrap-up main-body-e-land">
            <h3 className="bolder change-pos-e-land card-title-e-land">
              Electronics
            </h3>
            <picture className="background-img-e-com">
              <img
                src="https://cdn.shopify.com/s/files/1/0036/7637/3061/products/dad.jpg?v=1596293273"
                alt="category-image"
                className="basic-image-e-land"
              />
            </picture>
          </main>
        </div>
      </div>
    </>
  );
};

export { CategoryList };
