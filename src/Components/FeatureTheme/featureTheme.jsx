import { Abbreviations } from "../Abbreviations";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/product";
const FeatureTheme = () => {
  const { dispatch } = useProduct();
  const navigate = useNavigate();
  return (
    <>
      <div
        className="all-card-collection"
        style={{ margin: "2rem 3rem 0rem" }}
        onClick={() => {
          dispatch({ type: Abbreviations.PUNISHER });
          navigate("/shopNow");
        }}
      >
        <div className="card-contain-e-land">
          <main className="main-body-e-land wrap-up">
            <picture className="background-img-e-com no-opacity">
              <img
                src="https://villainess-e-store.netlify.app/Assets/punisher.jpg"
                alt="theme-image"
                className="basic-image-e-land"
              />
            </picture>
          </main>
        </div>
        <h3
          className="hover-underline"
          style={{ marginBottom: "2rem", cursor: "pointer" }}
        >
          {" "}
          The Punisher{" "}
        </h3>
      </div>

      <div
        className="all-card-collection"
        style={{ margin: "2rem 3rem 0rem" }}
        onClick={() => {
          dispatch({ type: Abbreviations.DAREDEVIL });
          navigate("/shopNow");
        }}
      >
        <div className="card-contain-e-land">
          <main className="main-body-e-land wrap-up">
            <picture className="background-img-e-com no-opacity">
              <img
                src="https://villainess-e-store.netlify.app/Assets/daredevil-fire.jpg"
                alt="theme-image"
                className="basic-image-e-land"
              />
            </picture>
          </main>
        </div>
        <h3
          className="hover-underline"
          style={{ marginBottom: "2rem", cursor: "pointer" }}
        >
          {" "}
          The Daredevil{" "}
        </h3>
      </div>

      <div
        className="all-card-collection"
        style={{ margin: "2rem 3rem 0rem" }}
        onClick={() => {
          dispatch({ type: Abbreviations.VENOM });
          navigate("/shopNow");
        }}
      >
        <div className="card-contain-e-land">
          <main className="main-body-e-land wrap-up">
            <picture className="background-img-e-com no-opacity">
              <img
                src="https://villainess-e-store.netlify.app/Assets/venom.jpg"
                alt="theme-image"
                className="basic-image-e-land"
              />
            </picture>
          </main>
        </div>
        <h3
          className="hover-underline"
          style={{ marginBottom: "2rem", cursor: "pointer" }}
        >
          {" "}
          The Venom{" "}
        </h3>
      </div>

      <div
        className="all-card-collection"
        style={{ margin: "2rem 3rem 0rem" }}
        onClick={() => {
          dispatch({ type: Abbreviations.DEADPOOL });
          navigate("/shopNow");
        }}
      >
        <div className="card-contain-e-land">
          <main className="main-body-e-land wrap-up">
            <picture className="background-img-e-com no-opacity">
              <img
                src="https://villainess-e-store.netlify.app/Assets/deadpool.jpg"
                alt="theme-image"
                className="basic-image-e-land"
              />
            </picture>
          </main>
        </div>
        <h3
          className="hover-underline"
          style={{ marginBottom: "2rem", cursor: "pointer" }}
        >
          {" "}
          The Deadpool{" "}
        </h3>
      </div>
    </>
  );
};

export { FeatureTheme };
