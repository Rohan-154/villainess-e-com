import "./filter.css";
import { Abbreviations } from "../../Reducer/reducer.jsx";
import { useProduct } from "../../Context/product.jsx";
import { useState } from "react";
const Filter = () => {
  const { state, dispatch } = useProduct();
  const { sortBy, price, categories, discount, rating, theme } = state;
  const { clothing, accessories, toys, electronics } = categories;
  const { punisher, daredevil, venom, deadpool, loki } = theme;
  const [filter, setFilter] = useState(false);
  return (
    <>
      <h3 className="res-top">
        Filter
        <button onClick={()=> setFilter(filter=> !filter)} className='hamburger-filter'>
          {" "}
          <i className="fa-solid fa-bars" id="btn-toggle-top">
            {" "}
          </i>
        </button>
      </h3>
      <div className={`filter-wrapper ${ filter ? 'active-top' : ''}`}>
        <div className="filter-class">
          <h3>FILTERS</h3>
          <button
            className="create-acc underline"
            onClick={() => dispatch({ type: Abbreviations.CLEARFILTER })}
            style={{
              border: "none",
              backgroundColor: "#e0e0eb",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            CLEAR ALL
          </button>
        </div>
        <hr />

        <div className="list-filter-wrap">
          <ul className="filter-ul">
            <li>
              <h3 className="underline"> Price </h3>
            </li>
            <li>
              <div className="slider">
                <input
                  type="range"
                  min="500"
                  max="4000"
                  step="500"
                  value={price}
                  list="range-labeller"
                  className="slider-ranger"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.PRICE,
                      payload: e.target.value,
                    });
                  }}
                />

                <datalist id="range-labeller">
                  <option value="500" label="0.5k"></option>
                  <option value="1000" label="1k"></option>
                  <option value="1500" label="1.5k"></option>
                  <option value="2000" label="2k"></option>
                  <option value="2500" label="2.5k"></option>
                  <option value="3000" label="3k"></option>
                  <option value="3500" label="3.5k"></option>
                  <option value="4000" label="4k"></option>
                </datalist>
              </div>
            </li>
            <li>
              <h3 className="underline">Sort</h3>
            </li>
            <div className="spacer-1rem"></div>
            <li>
              <label htmlFor="sort-highToLow" className="label-selector">
                <input
                  type="radio"
                  name="sort"
                  value="highToLow"
                  id="sort-highToLow"
                  checked={sortBy === Abbreviations.HIGHTOLOW}
                  onChange={() => {
                    dispatch({ type: Abbreviations.HIGHTOLOW });
                  }}
                />{" "}
                Price High to Low
              </label>
            </li>
            <li>
              <label htmlFor="sort-lowToHigh" className="label-selector">
                <input
                  type="radio"
                  name="sort"
                  value="lowToHigh"
                  id="sort-lowToHigh"
                  checked={sortBy === Abbreviations.LOWTOHIGH}
                  onChange={() => {
                    dispatch({ type: Abbreviations.LOWTOHIGH });
                  }}
                />{" "}
                Price Low to High
              </label>
            </li>
            <div className="spacer-1rem"></div>
            <hr />
            <div className="spacer-1rem"></div>
            <li>
              <h3 className="underline">Categories</h3>
            </li>
            <div className="spacer-1rem"></div>
            <li>
              <label htmlFor="categories" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="categories"
                  name="categories"
                  checked={clothing}
                  onChange={() => {
                    dispatch({ type: Abbreviations.CLOTHING });
                  }}
                />{" "}
                Clothing
              </label>
            </li>
            <li>
              <label htmlFor="accessories" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="accessories"
                  name="accessories"
                  checked={accessories}
                  onChange={() => {
                    dispatch({ type: Abbreviations.ACCESSORIES });
                  }}
                />{" "}
                accessories
              </label>
            </li>
            <li>
              <label htmlFor="toys" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="toys"
                  name="toys"
                  checked={toys}
                  onChange={() => {
                    dispatch({ type: Abbreviations.TOYS });
                  }}
                />{" "}
                Toys
              </label>
            </li>
            <li>
              <label htmlFor="electronics" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="electronics"
                  name="toys"
                  checked={electronics}
                  onChange={() => {
                    dispatch({ type: Abbreviations.ELECTRONICS });
                  }}
                />{" "}
               Electronics
              </label>
            </li>
            <div className="spacer-1rem"></div>
            <hr />
            <div className="spacer-1rem"></div>
            <li>
              <h3 className="underline">Customer Rating </h3>
            </li>
            <div className="spacer-1rem"></div>
            <li>
              <label htmlFor="4-star" className="label-selector">
                <input
                  type="radio"
                  className="checkbox-select"
                  id="4-star"
                  name="radio-rating"
                  checked={rating === 4}
                  value="4"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.RATING,
                      value: e.target.value,
                    });
                  }}
                />{" "}
                4 <i className="fa-solid fa-star"></i> & above
              </label>
            </li>
            <li>
              <label htmlFor="3-star" className="label-selector">
                <input
                  type="radio"
                  className="checkbox-select"
                  id="3-star"
                  name="radio-rating"
                  checked={rating === 3}
                  value="3"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.RATING,
                      value: e.target.value,
                    });
                  }}
                />{" "}
                3 <i className="fa-solid fa-star"></i> & above
              </label>
            </li>
            <li>
              <label htmlFor="2-star" className="label-selector">
                <input
                  type="radio"
                  className="checkbox-select"
                  id="2-star"
                  name="radio-rating"
                  checked={rating === 2}
                  value="2"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.RATING,
                      value: e.target.value,
                    });
                  }}
                />{" "}
                2 <i className="fa-solid fa-star"></i> & above
              </label>
            </li>
            <li>
              <label htmlFor="1-star" className="label-selector">
                <input
                  type="radio"
                  className="checkbox-select"
                  id="1-star"
                  name="radio-rating"
                  checked={rating === 1}
                  value="1"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.RATING,
                      value: e.target.value,
                    });
                  }}
                />{" "}
                1 <i className="fa-solid fa-star"></i> & above
              </label>
            </li>
            <div className="spacer-1rem"></div>
            <hr />
            <div className="spacer-1rem"></div>
            <li>
              <h3 className="underline"> Discount </h3>
            </li>
            <div className="spacer-1rem"></div>
            <li>
              <label htmlFor="40%" className="label-selector">
                <input
                  type="radio"
                  className="checkbox-select"
                  id="40%"
                  name="radio-discount"
                  checked={discount === 40}
                  value="40"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.DISCOUNT,
                      value: e.target.value,
                    });
                  }}
                />{" "}
                40% & above
              </label>
            </li>
            <li>
              <label htmlFor="30%" className="label-selector">
                <input
                  type="radio"
                  className="checkbox-select"
                  id="30%"
                  name="radio-discount"
                  checked={discount === 30}
                  value="30"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.DISCOUNT,
                      value: e.target.value,
                    });
                  }}
                />{" "}
                30% & above
              </label>
            </li>
            <li>
              <label htmlFor="20%" className="label-selector">
                <input
                  type="radio"
                  className="checkbox-select"
                  id="20%"
                  name="radio-discount"
                  checked={discount === 20}
                  value="20"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.DISCOUNT,
                      value: e.target.value,
                    });
                  }}
                />{" "}
                20% & above
              </label>
            </li>
            <li>
              <label htmlFor="10%" className="label-selector">
                <input
                  type="radio"
                  className="checkbox-select"
                  id="10%"
                  name="radio-discount"
                  checked={discount === 10}
                  value="10"
                  onChange={(e) => {
                    dispatch({
                      type: Abbreviations.DISCOUNT,
                      value: e.target.value,
                    });
                  }}
                />{" "}
                10% & above
              </label>
            </li>
            <div className="spacer-1rem"></div>
            <hr />
            <div className="spacer-1rem"></div>
            <li>
              <h3 className="underline"> Character </h3>
            </li>
            <div className="spacer-1rem"></div>
            <li>
              <label htmlFor="punisher" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="punisher"
                  name="punisher"
                  checked={punisher}
                  onChange={() => {
                    dispatch({ type: Abbreviations.PUNISHER });
                  }}
                />{" "}
                The Punisher
              </label>
            </li>
            <li>
              <label htmlFor="daredevil" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="daredevil"
                  name="daredevil"
                  checked={daredevil}
                  onChange={() => {
                    dispatch({ type: Abbreviations.DAREDEVIL });
                  }}
                />{" "}
                Daredevil
              </label>
            </li>
            <li>
              <label htmlFor="venom" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="venom"
                  name="venom"
                  checked={venom}
                  onChange={() => {
                    dispatch({ type: Abbreviations.VENOM });
                  }}
                />{" "}
                Venom
              </label>
            </li>
            <li>
              <label htmlFor="deadpool" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="deadpool"
                  name="deadpool"
                  checked={deadpool}
                  onChange={() => {
                    dispatch({ type: Abbreviations.DEADPOOL });
                  }}
                />{" "}
                Deadpool
              </label>
            </li>
            <li>
              <label htmlFor="loki" className="label-selector">
                <input
                  type="checkbox"
                  className="checkbox-select"
                  id="loki"
                  name="loki"
                  checked={loki}
                  onChange={() => {
                    dispatch({ type: Abbreviations.LOKI });
                  }}
                />{" "}
                Loki
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Filter };
