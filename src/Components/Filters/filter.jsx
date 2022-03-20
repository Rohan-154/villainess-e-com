import "./filter.css";
import { Abbreviations } from "../../Reducer/reducer.jsx";
import { useProduct } from "../../Context/context.jsx";
const Filter = () => {
  const { state, dispatch } = useProduct();
  const { sortBy, price, categories, discount,rating} = state;
  const{clothing, accessories,toys, MobileCovers}= categories;
  return (
    <>
      <h3 className="res-top">
        Filter
        <a href="#">
          {" "}
          <i className="fa-solid fa-bars" id="btn-toggle-top">
            {" "}
          </i>
        </a>
      </h3>
      <div className="filter-wrapper">
        <div className="filter-class">
          <h3>FILTERS</h3>
          <a href="" className="create-acc">
            CLEAR ALL
          </a>
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
              <label htmlFor="filter-label" className="label-selector">
                <input type="radio" name="sort" value="highToLow" /> Price High
                to Low
              </label>
            </li>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="radio" name="sort" value="lowToHigh" /> Price Low
                to High
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
                <input type="checkbox" className="checkbox-select"  id="categories"
                name="categories"
                checked={clothing}
                onChange={()=>{
                  dispatch({type:Abbreviations.CLOTHING})
                }}
                 /> Clothing
              </label>
            </li>
            <li>
              <label for="accessories" className="label-selector">
              <input type="checkbox" className="checkbox-select"  id="accessories"
                name="accessories"
                checked={accessories}
                onChange={()=>{
                  dispatch({type:Abbreviations.ACCESSORIES})
                }}
                 /> accessories
              </label>
            </li>
            <li>
              <label for="toys" className="label-selector">
              <input type="checkbox" className="checkbox-select"  id="toys"
                name="toys"
                checked={toys}
                onChange={()=>{
                  dispatch({type:Abbreviations.TOYS})
                }}
                 /> Toys
              </label>
            </li>
            <li>
              <label for="MobileCovers" className="label-selector">
              <input type="checkbox" className="checkbox-select"  id="MobileCovers"
                name="toys"
                checked={MobileCovers}
                onChange={()=>{
                  dispatch({type:Abbreviations.MOBILECOVERS})
                }}
                 /> Mobile Covers
              </label>
            </li>
            <hr />
            <div className="spacer-1rem"></div>
            <li>
              <h3 className="underline">Customer Rating </h3>
            </li>
            <div className="spacer-1rem"></div>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" /> 4{" "}
                <i className="fa-solid fa-star"></i> & above
              </label>
            </li>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" /> 3{" "}
                <i className="fa-solid fa-star"></i> & above
              </label>
            </li>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" /> 2{" "}
                <i className="fa-solid fa-star"></i> & above
              </label>
            </li>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" /> 1{" "}
                <i className="fa-solid fa-star"></i> & above
              </label>
            </li>
            <div className="spacer-1rem"></div>

            <div className="spacer-1rem"></div>
            <hr />
            <div className="spacer-1rem"></div>
            <li>
              <h3 className="underline"> Character </h3>
            </li>
            <div className="spacer-1rem"></div>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" 
                name="punisher"
                checked={punisher}
                onChange={()=>{
                  dispatch({type:Abbreviations.PU})
                }}
                
                /> The
                Punisher
              </label>
            </li>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" /> Daredevil
              </label>
            </li>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" /> Venom
              </label>
            </li>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" /> Deadpool
              </label>
            </li>
            <li>
              <label for="filter-label" className="label-selector">
                <input type="checkbox" className="checkbox-select" /> Loki
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Filter };
