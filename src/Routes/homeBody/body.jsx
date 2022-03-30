import { useFetch } from "../../custom-hooks/useFetch";
import { CategoryList } from "../../Components/CategoryList/categoryList.jsx";
import { FeatureTheme } from "../../Components/FeatureTheme/featureTheme.jsx";
import { Footer } from "../../Components/Footer/footer";

const Body = () => {
  const {
    data: categories,
    error,
    loader,
  } = useFetch("/api/categories", "categories");
  return (
    <div>
     
      <div className="bg-img-stretch"></div>
      <div className="spacer-3rem"></div>
      <h2 className="text-align-center">
        {" "}
        Featured Categories{" "}
      </h2>
      <div className="short-underline"></div>
      <div className="grid-layout-4-col" style={{margin:'0.5rem auto'}}>
        {error && <p> {error}</p>}
        {loader && <p> Loading... </p>}
        {categories &&
          categories?.map((categories) => (
            <CategoryList categories={categories} key ={categories.id}/>
          ))}
      </div>
      <div className="spacer-3rem"></div>
      <h2 className="text-align-center"> Featured Theme </h2>
      <div className="short-underline"></div>
      <div className="grid-layout-4-col" style={{margin:'0.5rem auto'}}>
        {error && <p> {error}</p>}
        {loader && <p> Loading... </p>}
        {categories &&
          categories?.map((categories) => (
            <FeatureTheme categories={categories} />
          ))}
      </div>
      <Footer/>
    </div>
  );
};

export { Body };
