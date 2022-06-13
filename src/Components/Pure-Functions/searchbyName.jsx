const SearchByName = (products, searchInput) => {
  return products.filter((item) =>
    item.title.toLowerCase().includes(searchInput.trim().toLowerCase())
  );
};

export default SearchByName;
