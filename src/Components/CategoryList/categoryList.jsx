import { useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/product";
import { Abbreviations } from "../Abbreviations";
import "../CategoryList/categoryList.css";
const CategoryList = ({ categories: { categoryName, img } }) => {
  const { state, dispatch } = useProduct();
  const { categories, theme } = state;
  const { clothing, accessories, toys, electronics } = categories;
  const { punisher, daredevil, venom, deadpool, loki } = theme;
  const navigate = useNavigate();

  return (
    <div
      className="all-card-collection"
      onClick={() => {
        dispatch({ type: Abbreviations.CLOTHING });
        navigate("/shopNow");
      }}
      style={{margin:'2rem 3rem 0rem'}}
    >
      <div className="card-contain-e-land">
        <main className="wrap-up main-body-e-land">
          <h3 className="bolder change-pos-e-land card-title-e-land">
            {categoryName}
          </h3>
          <picture className="background-img-e-com">
            <img
              src={img}
              alt="category-image"
              className="basic-image-e-land"
            />
          </picture>
        </main>
      </div>
    </div>
  );
};

export { CategoryList };
