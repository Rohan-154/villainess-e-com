const PriceSlider = (products, price) => {
  return products.filter((item) => item.price <= price);
};

export { PriceSlider };
