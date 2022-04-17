import { Filter } from "../../Components/Filters/filter.jsx";
import { ProductListing } from "../../Components/ProductListing/productListing.jsx";
import { useFetch } from "../../custom-hooks/useFetch.jsx";
import { PriceSlider } from "../../Components/Pure-Functions/priceSlider.jsx";
import { useProduct } from "../../Context/product.jsx";
import { Categories } from "../../Components/Pure-Functions/category.jsx";
import { Theme } from "../../Components/Pure-Functions/theme.jsx";
import { Rating } from "../../Components/Pure-Functions/rating.jsx";
import { Discount } from "../../Components/Pure-Functions/discount.jsx";
import { Sort } from "../../Components/Pure-Functions/sort.jsx";
import { Footer } from "../../Components/Footer/footer.jsx";
import { Helmet } from 'react-helmet';
import SearchByName from "../../Components/Pure-Functions/searchbyName.jsx";
const ShopNow = () => {
  const {
    data: products,
    error,
    loader,
  } = useFetch("/api/products", "products");
  const { state,searchInput } = useProduct();
  const { clothing, accessories, toys, electronics } = state.categories;
  const { punisher, daredevil, venom, deadpool, loki } = state.theme;
  const searchFiltered = SearchByName(products,searchInput )
  const priceFiltered = PriceSlider(searchFiltered, state.price);
  const categoryFiltered = Categories(
    priceFiltered,
    clothing,
    accessories,
    toys,
    electronics
  );
  const themeFiltered = Theme(
    categoryFiltered,
    punisher,
    daredevil,
    venom,
    deadpool,
    loki
  );
  const ratingFiltered = Rating(themeFiltered, state.rating);
  const discountFiltered = Discount(ratingFiltered, state.discount);
  const sortFiltered = Sort(discountFiltered, state.sortBy);
  return (
    <>
      <Helmet>
          <title> Shop Now </title>
        </Helmet>
      <div className="flex-wrap-shop">
        <Filter />

        <div className="grid-layout-3-col">
          {error && <p> {error}</p>}
          {loader && <p> Loading... </p>}
          {sortFiltered &&
            sortFiltered?.map((products) => (
              <ProductListing products={products} key={products._id} />
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export { ShopNow };
