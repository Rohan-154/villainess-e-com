const Rating = (products, rating) => {
  if (rating) {
    return products.filter((item) => item.rating >= rating);
  }
  return products;
};

export { Rating };
