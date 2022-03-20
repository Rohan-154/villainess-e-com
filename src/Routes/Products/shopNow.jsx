import { Filter } from "../../Components/Filters/filter.jsx";
import { ProductListing } from "../../Components/ProductListing/productListing.jsx";
import { useFetch } from "../../custom-hooks/useFetch.jsx";
import { PriceSlider } from "../../Components/Pure-Functions/priceSlider.jsx"; 
import { useProduct } from "../../Context/context.jsx";
import { Categories } from "../../Components/Pure-Functions/category.jsx";
const ShopNow = () => {
  const {
    data: products,
    error,
    loader,
  } = useFetch("/api/products", "products");
  const {state} = useProduct();
  const {clothing, accessories, toys,MobileCovers}= state.categories
  const priceFiltered = PriceSlider(products, state.price);
  const categoryFiltered= Categories(priceFiltered,
    clothing,
    accessories,
    toys,
    MobileCovers

    )
  return (
    <>
      <div className="flex-wrap-shop">
        <Filter />
            <div className="top-margin-7rem">
        <div className="grid-layout-3-col">
        {error && <p> {error}</p>}
        {loader && <p> Loading... </p>}
        {categoryFiltered &&
          categoryFiltered?.map((products) => <ProductListing products={products} key={products.id} />)}
          </div>
      </div>
      </div>

    </>
  );
};

export { ShopNow };
