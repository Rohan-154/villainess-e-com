const Theme = (products, punisher, daredevil,venom,deadpool,loki) => {
    let FilterProducts = [];
  if (
    punisher === false &&
    daredevil === false &&
    venom === false &&
    deadpool === false &&
    loki === false
  ) {
    return products;
  }
  if (punisher) {
    let newList = products.filter(
      (items) => "punisher" === items.theme.toLowerCase()
    );
    FilterProducts.push(...newList);
  }
  if (daredevil) {
    let newList = products.filter(
      (items) => "daredevil" === items.theme.toLowerCase()
    );
    FilterProducts.push(...newList);
  }
  if (venom) {
    let newList = products.filter(
      (items) => "venom" === items.theme.toLowerCase()
    );
    FilterProducts.push(...newList);
  }
  if (deadpool) {
    let newList = products.filter(
      (items) => "deadpool" === items.theme
    );
    FilterProducts.push(...newList);
  }
  if (loki) {
    let newList = products.filter(
      (items) => "loki" === items.theme.toLowerCase()
    );
    FilterProducts.push(...newList);
  }

  return FilterProducts;
};
 
export  {Theme};