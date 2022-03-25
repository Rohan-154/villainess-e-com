const DecreaseQuantity = (state,action) => {
  return {
    ...state,
    itemsInCart: state.itemsInCart - 1,
    totalPrice: state.totalPrice - action.payload.price,
    discountPrice: state.discountPrice - action.payload.discardPrice,
    productsInCart:
      action.payload.qty > 1
        ? state.productsInCart?.map((item) =>
            item._id === action.payload._id
              ? { ...item, qty: item.qty - 1 }
              : item
          )
        : state.productsInCart.filter((item) => item._id !== action.payload._id),
  };
};

export { DecreaseQuantity };
