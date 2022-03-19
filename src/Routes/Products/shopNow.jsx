import { Filter } from "../../Components/Filter-Functions/filter.jsx";
import { ProductListing } from "../../Components/ProductListing/productListing.jsx";
import { useFetch } from "../../custom-hooks/useFetch.jsx";
const ShopNow = () => {
  const {
    data: products,
    error,
    loader,
  } = useFetch("/api/products", "products");
  return (
    <>
      <div className="flex-wrap-shop">
        <Filter />
            <div className="top-margin-7rem">
        <div className="grid-layout-3-col">
        {error && <p> {error}</p>}
        {loader && <p> Loading... </p>}
        {products &&
          products?.map((products) => <ProductListing products={products} />)}
          </div>
      </div>
      </div>
    </>
  );
};

export { ShopNow };
