const Abbreviations = {
  PRICE: "price",
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case Abbreviations.PRICE:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};

export { reducerFunction, Abbreviations };
