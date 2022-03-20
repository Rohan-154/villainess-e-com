import { Filter } from "../../Components/Filters/filter.jsx";
import { ProductListing } from "../../Components/ProductListing/productListing.jsx";
import { useFetch } from "../../custom-hooks/useFetch.jsx";
import { PriceSlider } from "../../Components/Pure-Functions/priceSlider.jsx"; 
import { useProduct } from "../../Context/context.jsx";
const ShopNow = () => {
  const {
    data: products,
    error,
    loader,
  } = useFetch("/api/products", "products");
  const {state} = useProduct();
  const priceFiltered = PriceSlider(products, state.price)
  return (
    <>
      <div className="flex-wrap-shop">
        <Filter />
            <div className="top-margin-7rem">
        <div className="grid-layout-3-col">
        {error && <p> {error}</p>}
        {loader && <p> Loading... </p>}
        {priceFiltered &&
          priceFiltered?.map((products) => <ProductListing products={products} />)}
          </div>
      </div>
      </div>

    </>
  );
};

export { ShopNow };
