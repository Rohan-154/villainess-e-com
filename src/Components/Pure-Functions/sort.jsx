import { Abbreviations } from "../../Reducer/reducer";

const Sort = (products, sortBy) => {
  if (sortBy === Abbreviations.LOWTOHIGH) {
    return [...products].sort((item1, item2) => item1.price - item2.price);
  }
  if (sortBy === Abbreviations.HIGHTOLOW) {
    return [...products].sort((item1, item2) => item2.price - item1.price);
  }
  return products;
};

export { Sort };
