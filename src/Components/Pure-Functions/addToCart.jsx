const FuncAddToCart = (state, action) => {
  const productExist = state.productsInCart.find(
    (items) => items._id === action.payload._id
  );
  return {
    ...state,
    totalPrice: state.totalPrice + action.payload.price,
    discountPrice: state.discountPrice + action.payload.discardPrice,
    productsInCart: !productExist
      ? [
          ...state.productsInCart,
          {
            ...action.payload,
            qty: 1,
          },
        ]
      : state.productsInCart.map((items) =>
          items._id === action.payload._id
            ? { ...items, qty: items.qty + 1 }
            : items
        ),
    itemsInCart: state.itemsInCart + 1,
  };
};
export { FuncAddToCart };
