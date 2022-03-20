import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "The Punisher",
    catchName: "the popular kid",
    price: 525,
    discardPrice: 1125,
    categoryName: "clothing",
    discount: 67,
    rating: 5,
    theme: 'punisher',
    img: 'https://villainess-e-store.netlify.app/Assets/product-images/punisher-hoodie.jpg'
  },
  {
    _id: uuid(),
    title: "loki Scepter",
    catchName: "the most clever kid",
    price: 2578,
    discardPrice: 4897,
    categoryName: "accessories",
    discount: 49,
    rating: 4,
    theme: 'loki',
    img: 'https://sc02.alicdn.com/kf/H5ad909d212b345c39bf07405d11eaa24D/228714741/H5ad909d212b345c39bf07405d11eaa24D.jpg_.webp'
  },
  {
    _id: uuid(),
    title: "Venom Robot",
    catchName: "the mad-man",
    price: 1278,
    discardPrice: 2556,
    categoryName: "toys",
    discount: 50,
    rating: 5,
    theme: 'venom',
    img:'http://walyou.com/wp-content/uploads//2013/07/Venom-Bot-e1373904509760.jpg'
  },
  {
    _id: uuid(),
    title: "Venom Realme X3 Mobile Covert",
    catchName: "the mad-man",
    price: 399,
    discardPrice: 798,
    categoryName: "MobileCovers",
    discount: 50,
    rating: 4,
    theme: 'venom',
    img: 'https://villainess-e-store.netlify.app/Assets/product-images/venom-mobile.jpg'
  },
  {
    _id: uuid(),
    title: "Deadpool Loves Coffee Mug",
    catchName: "the comedy kid who fights seriously",
    price: 150,
    discardPrice: 400,
    categoryName: "accessories",
    discount: 20,
    rating: 3,
    theme: 'deadpool',
    img: 'https://villainess-e-store.netlify.app/Assets/product-images/deadpool-mug.jpg'
  },
  {
    _id: uuid(),
    title: "Official Daredevil T-Shirt",
    catchName: "the smartest kid",
    price: 299,
    discardPrice: 799,
    categoryName: "clothing",
    discount: 49,
    rating: 2,
    theme: 'daredevil',
    img: 'https://villainess-e-store.netlify.app/Assets/product-images/dardevil-tees.jpg'
  },
  {
    _id: uuid(),
    title: "Loki Laptop Stickers",
    catchName: "the most clever kid",
    price: 99,
    discardPrice: 199,
    categoryName: "accessories",
    discount: 48,
    rating: 4,
    theme: 'loki',
    img: 'https://villainess-e-store.netlify.app/Assets/product-images/loki-product.jpg'
  },
];
