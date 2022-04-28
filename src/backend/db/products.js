import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    id:1,
    title: "The Punisher Hoodie",
    catchName: "the popular kid",
    price: 525,
    discardPrice: 1125,
    categoryName: "clothing",
    discount: 67,
    rating: 5,
    theme: "punisher",
    img: "https://villainess-e-store.netlify.app/Assets/product-images/punisher-hoodie.jpg",
    description:"Punisher Skull (Glow In The Dark) Marvel Official Hoodie Franks Castle was an honest ex-marine officer who loved his family. He lived a happy life but fate had planned other horrid plans for him. He lost his family when his destiny was crossed in witnessing a wrong mafia deal. After that incident, everything changed for him. He became a gruesome murderer, a vigilante who was feared by all.He had only one motive to Punish the people who poison this society. He's the Punisher. Get this gruesome new Marvel official Punisher Skull hoodie now! This design comes screen printed to perfection on a black Redwolf hoodie."
  },
  {
    _id: uuid(),
    id:2,
    title: "loki Scepter",
    catchName: "the most clever kid",
    price: 2578,
    discardPrice: 4897,
    categoryName: "accessories",
    discount: 49,
    rating: 4,
    theme: "loki",
    img: "https://sc02.alicdn.com/kf/H5ad909d212b345c39bf07405d11eaa24D/228714741/H5ad909d212b345c39bf07405d11eaa24D.jpg_.webp",
  },
  {
    _id: uuid(),
    id:3,
    title: "Venom Robot",
    catchName: "the mad-man",
    price: 1278,
    discardPrice: 2556,
    categoryName: "toys",
    discount: 50,
    rating: 5,
    theme: "venom",
    img: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFNMWpOMEtUT0wuX0FDX1NMMTUwMF8uanBn.jpg",
  },
  {
    _id: uuid(),
    id:4,
    title: "Venom Realme X3 Mobile Cover",
    catchName: "the mad-man",
    price: 399,
    discardPrice: 798,
    categoryName: "accessories",
    discount: 50,
    rating: 4,
    theme: "venom",
    img: "https://villainess-e-store.netlify.app/Assets/product-images/venom-mobile.jpg",
  },
  {
    _id: uuid(),
    id:5,
    title: "Deadpool Loves Coffee Mug",
    catchName: "the comedy kid who fights seriously",
    price: 150,
    discardPrice: 400,
    categoryName: "accessories",
    discount: 20,
    rating: 3,
    theme: "deadpool",
    img: "https://villainess-e-store.netlify.app/Assets/product-images/deadpool-mug.jpg",
  },
  {
    _id: uuid(),
    id:6,
    title: "Official Daredevil T-Shirt",
    catchName: "the smartest kid",
    price: 299,
    discardPrice: 799,
    categoryName: "clothing",
    discount: 49,
    rating: 2,
    theme: "daredevil",
    img: "https://villainess-e-store.netlify.app/Assets/product-images/dardevil-tees.jpg",
  },
  {
    _id: uuid(),
    id:7,
    title: "Loki Laptop Stickers",
    catchName: "the most clever kid",
    price: 99,
    discardPrice: 199,
    categoryName: "accessories",
    discount: 48,
    rating: 4,
    theme: "loki",
    img: "https://villainess-e-store.netlify.app/Assets/product-images/loki-product.jpg",
  },
 
  {
    _id: uuid(),
    id:8,
    title: "The Iron Fist Wallpaper",
    catchName: "the Power Punch",
    price: 425,
    discardPrice: 125,
    categoryName: "toys",
    discount: 37,
    rating: 3,
    theme: "Iron Fist ",
    img: "https://static3.cbrimages.com/wordpress/wp-content/uploads/2018/08/Freidrick-Estrada-Iron-Fist.jpg?q=50&fit=crop&w=740&h=986&dpr=1.5",
  },
  {
    _id: uuid(),
    id:9,
    title: "The Iron Fist Mask",
    catchName: "the monk mask",
    price: 165,
    discardPrice: 257,
    categoryName: "clothing",
    discount: 6,
    rating: 2,
    theme: "Iron Fist",
    img: "https://m.media-amazon.com/images/I/5157mi1+DwL._UX569_.jpg",
  },
  {
    _id: uuid(),
    id:10,
    title: "The Wolverine Claws",
    catchName: "the angry wolve",
    price: 525,
    discardPrice: 1125,
    categoryName: "accessories",
    discount: 43,
    rating: 3,
    theme: "wolverine",
    img: "https://m.media-amazon.com/images/I/51Ez3KsGFFL._SX425_.jpg",
  },
  {
    _id: uuid(),
    id:11,
    title: "The Wolverine Robot",
    catchName: "the angry wolve",
    price: 1525,
    discardPrice: 4125,
    categoryName: "electronics",
    discount: 67,
    rating: 5,
    theme: "wolverine",
    img: "https://cdn-r.fishpond.co.nz/0054/217/910/106753870/6.jpeg",
  },
  {
    _id: uuid(),
    id:12,
    title: "The Wolverine Dummy",
    catchName: "the angry wolve",
    price: 525,
    discardPrice: 1125,
    categoryName: "clothing",
    discount: 37,
    rating: 2,
    theme: "wolverine",
    img: "https://i.ebayimg.com/images/g/A84AAOSwutpZlkvx/s-l400.jpg",
  },
  {
    _id: uuid(),
    id:13,
    title: "The Wolverine Rubber Model",
    catchName: "the wolverine action figure",
    price: 625,
    discardPrice: 1425,
    categoryName: "toys",
    discount: 32,
    rating: 4,
    theme: "wolverine",
    img: "https://m.media-amazon.com/images/I/81cLjz5j5nL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    id:14,
    title: "The Deadpool Starter Pack",
    catchName: "the funny punk",
    price: 1325,
    discardPrice: 6425,
    categoryName: "accessories",
    discount: 10,
    rating: 4,
    theme: "deadpool",
    img: "https://i.pinimg.com/originals/47/95/c7/4795c771bf22444543a13208c7b300b8.jpg",
  },
  {
    _id: uuid(),
    id:15,
    title: "The Deadpool Weapons",
    catchName: "the deadpool action figure",
    price: 825,
    discardPrice: 1125,
    categoryName: "toys",
    discount: 18,
    rating: 3,
    theme: "deadpool",
    img: "https://www.u-buy.jp/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvNjFmMzQ2YjUtYWE0Ni00NDYzLWI3YzgtNjIwOThlY2Q3ZWM1LmIxMDM0MTEyZjViMDZlYTY1NDQ3NGRiNDg2MDQ0NDRiLmpwZWc.jpg",
  },
  {
    _id: uuid(),
    id:16,
    title: "The Deadpool Headphones",
    catchName: "the wireless headphone",
    price: 2055,
    discardPrice: 4125,
    categoryName: "electronics",
    discount: 48,
    rating: 5,
    theme: "deadpool",
    img: "https://cdn.shopify.com/s/files/1/0036/7637/3061/products/dad.jpg?v=1596293273",
  },
  {
    _id: uuid(),
    id:17,
    title: "The Ghost Rider Mobile Cover",
    catchName: "the ghost rider phone cover",
    price: 405,
    discardPrice: 495,
    categoryName: "accessories",
    discount: 8,
    rating: 3,
    theme: "ghost rider",
    img: "https://m.media-amazon.com/images/I/616D8YvlW3L._SL1000_.jpg",
  },
  {
    _id: uuid(),
    id:18,
    title: "The Ghost Rider T-Shirt",
    catchName: "the ghost rider t-shirt",
    price: 400,
    discardPrice: 700,
    categoryName: "clothing",
    discount: 58,
    rating: 2,
    theme: "ghost rider",
    img: "https://m.media-amazon.com/images/I/519y9qvCX3L.jpg",
  },
];
