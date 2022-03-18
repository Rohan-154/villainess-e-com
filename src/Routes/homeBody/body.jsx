import { useFetch } from "../../custom-hooks/useFetch";
import { CategoryList } from "../../Components/CategoryList/categoryList.jsx";
import { FeatureTheme } from "../../Components/FeatureTheme/featureTheme.jsx";
import { Footer } from "../../Components/Footer/footer.jsx";
import { NavBar } from "../../Components/Navbar/navbar.jsx";
const Body = () => {
  const {
    data: categories,
    error,
    loader,
  } = useFetch("/api/categories", "categories");
  console.log("rohan123", categories);
  return (
    <div>
      <NavBar />
      <div className="bg-img-stretch"></div>
      <div className="spacer-3rem"></div>
      <h2 className="text-align-center top-margin-7rem">
        {" "}
        Featured Categories{" "}
      </h2>
      <div className="short-underline"></div>
      <div className="grid-layout-4-col">
        {error && <p> {error}</p>}
        {loader && <p> Loading... </p>}
        {categories &&
          categories?.map((categories) => (
            <CategoryList categories={categories} />
          ))}
      </div>
      <div className="spacer-3rem"></div>
      <h2 className="text-align-center top-margin-7rem"> Featured Theme </h2>
      <div className="short-underline"></div>
      <div className="grid-layout-4-col">
        {error && <p> {error}</p>}
        {loader && <p> Loading... </p>}
        {categories &&
          categories?.map((categories) => (
            <FeatureTheme categories={categories} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export { Body };
