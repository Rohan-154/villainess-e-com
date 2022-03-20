const Abbreviations = {
  PRICE: "price",
  CLOTHING:'clothing',
  ACCESSORIES: 'accessories',
  TOYS:'toys',
  MOBILECOVERS : 'MobileCovers',
  PUNISHER: 'punisher',
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case Abbreviations.PRICE:
      return {
        ...state,
        price: action.payload,
      };
      case Abbreviations.CLOTHING:
        return{
          ...state,
          categories:{
            ...state.categories,
            clothing: !state.categories.clothing
          }
        };
        case Abbreviations.ACCESSORIES:
        return{
          ...state,
          categories:{
            ...state.categories,
            accessories: !state.categories.accessories
          }
        };
        case Abbreviations.TOYS:
        return{
          ...state,
          categories:{
            ...state.categories,
            toys: !state.categories.toys
          }
        };
        case Abbreviations.MOBILECOVERS:
        return{
          ...state,
          categories:{
            ...state.categories,
            MobileCovers: !state.categories.MobileCovers
          }
        };
    default:
      return state;
  }
};

export { reducerFunction, Abbreviations };
