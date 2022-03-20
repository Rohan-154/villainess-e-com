import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Clothing",
    description:
      "Get your favorite anti-hero clothing for men and women like hoodies, sweatshirts etc.",
    img: "https://villainess-e-store.netlify.app/Assets/category-1.jpg",
    imgTheme: 'https://villainess-e-store.netlify.app/Assets/punisher.jpg',
    ThemeName: 'The Punisher'
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    description:
      "Get your favorite anti-hero accessories for men and women like The Captain America Shield and Deadpool Coffee Mug etc.",
    img: "https://villainess-e-store.netlify.app/Assets/Marvel-Must-Haves-Loki-Episode-5-1.jpg",
    imgTheme: 'https://villainess-e-store.netlify.app/Assets/daredevil-fire.jpg',
    ThemeName: 'Daredevil'
  },
  {
    _id: uuid(),
    categoryName: "Toys",
    description:
      "Get your favorite anti-hero toys for kids like Thanos Gaunglet with Iron Man, etc.",
    img: "https://villainess-e-store.netlify.app/Assets/toys.jpg",
    imgTheme: 'https://villainess-e-store.netlify.app/Assets/venom.jpg',
    ThemeName: 'Venom'
  },
  {
    _id: uuid(),
    categoryName: "Mobile-Covers",
    description:
      "Get your favorite anti-hero theme based mobile covers for your iPhone and android phones.",
      img: "https://villainess-e-store.netlify.app/Assets/category-4.jpg",
      imgTheme: 'https://villainess-e-store.netlify.app/Assets/deadpool.jpg',
      ThemeName: 'Deadpool'
  },
];
