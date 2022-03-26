const Discount = (products, discount) => {
    if (discount) {
      return products.filter((items) => items.discount >= discount);
    }
    return products;
  };
  
  export { Discount };
  