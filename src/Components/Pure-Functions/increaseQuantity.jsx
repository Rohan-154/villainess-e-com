const FuncIncreaseQuantity = (state, action) => {
  return {
    ...state,
    itemInCart: state.itemsInCart + 1,
    totalPrice: state.totalPrice + action.payload.price,
    discountPrice: state.discountPrice + action.payload.discardPrice,
    productsInCart: state.productsInCart.map((items) =>
      items._id === action.payload._id
        ? { ...items, qty: action.payload.qty + 1 }
        : items
    ),
  };
};
export { FuncIncreaseQuantity };
