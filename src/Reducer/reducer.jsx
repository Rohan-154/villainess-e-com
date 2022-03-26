const Abbreviations = {
  PRICE: "price",
  CLOTHING: "clothing",
  ACCESSORIES: "accessories",
  TOYS: "toys",
  MOBILECOVERS: "MobileCovers",
  PUNISHER: "punisher",
  DAREDEVIL: "daredevil",
  VENOM: "venom",
  DEADPOOL: "deadpool",
  LOKI: "loki",
  RATING: "rating",
  DISCOUNT: "discount",
  HIGHTOLOW: "highToLow",
  LOWTOHIGH: "lowToHigh",
  CLEARFILTER: "clearFilter",
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case Abbreviations.PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case Abbreviations.CLOTHING:
      return {
        ...state,
        categories: {
          ...state.categories,
          clothing: !state.categories.clothing,
        },
      };
    case Abbreviations.ACCESSORIES:
      return {
        ...state,
        categories: {
          ...state.categories,
          accessories: !state.categories.accessories,
        },
      };
    case Abbreviations.TOYS:
      return {
        ...state,
        categories: {
          ...state.categories,
          toys: !state.categories.toys,
        },
      };
    case Abbreviations.MOBILECOVERS:
      return {
        ...state,
        categories: {
          ...state.categories,
          MobileCovers: !state.categories.MobileCovers,
        },
      };
    case Abbreviations.PUNISHER:
      return {
        ...state,
        theme: {
          ...state.theme,
          punisher: !state.theme.punisher,
        },
      };
    case Abbreviations.DAREDEVIL:
      return {
        ...state,
        theme: {
          ...state.theme,
          daredevil: !state.theme.daredevil,
        },
      };
    case Abbreviations.VENOM:
      return {
        ...state,
        theme: {
          ...state.theme,
          venom: !state.theme.venom,
        },
      };
    case Abbreviations.DEADPOOL:
      return {
        ...state,
        theme: {
          ...state.theme,
          deadpool: !state.theme.deadpool,
        },
      };
    case Abbreviations.LOKI:
      return {
        ...state,
        theme: {
          ...state.theme,
          loki: !state.categories.loki,
        },
      };
    case Abbreviations.RATING:
      return {
        ...state,
        rating: parseInt(action.value, 10),
      };
    case Abbreviations.DISCOUNT:
      return {
        ...state,
        discount: parseInt(action.value, 10),
      };
    case Abbreviations.LOWTOHIGH:
      return {
        ...state,
        sortBy: action.type,
      };
    case Abbreviations.HIGHTOLOW:
      return {
        ...state,
        sortBy: action.type,
      };
    case Abbreviations.CLEARFILTER:
      return {
        sortBy: '',
        price: 4000,
        categories: {
          clothing: false,
          accessories: false,
          toys: false,
          MobileCovers: false,
        },
        discount: "",
        rating: "",
        theme: {
          punisher: false,
          daredevil: false,
          venom: false,
          deadpool: false,
          loki: false,
        },
      };
    default:
      return state;
  }
};

export { reducerFunction, Abbreviations };
