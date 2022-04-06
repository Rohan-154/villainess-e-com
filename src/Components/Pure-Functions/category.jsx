const Categories = (products, clothing, accessories, toys, electronics) => {
  let FilterProducts = [];
  if (
    clothing === false &&
    accessories === false &&
    toys === false &&
    electronics === false
  ) {
    return products;
  }
  if (clothing) {
    let newList = products.filter(
      (items) => "clothing" === items.categoryName.toLowerCase()
    );
    FilterProducts.push(...newList);
  }
  if (accessories) {
    let newList = products.filter(
      (items) => "accessories" === items.categoryName.toLowerCase()
    );
    FilterProducts.push(...newList);
  }
  if (toys) {
    let newList = products.filter(
      (items) => "toys" === items.categoryName.toLowerCase()
    );
    FilterProducts.push(...newList);
  }
  if (electronics) {
    let newList = products.filter(
      (items) => "electronics" === items.categoryName
    );
    FilterProducts.push(...newList);
  }

  return FilterProducts;
};

export { Categories };
