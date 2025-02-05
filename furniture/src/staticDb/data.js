import { startIcon } from "@/components/icons/Icons";

export const SalesProductData = [
  {
    id: "1",
    img: "/product01.png",
    title: "Bought Together",
    alt: "sales product img1",
    badgeTitle: "-5%",
    price: 250,
    post: [{ name: "john" }],

    // reviews: [
    //   {
    //     id: "1",
    //     author: "Alice",
    //     rating: 5,
    //     comment: "Great product!",
    //     post: [
    //       {
    //         name: "john",
    //         stress: [
    //           {
    //             level: "john Stress",
    //             relief: [
    //               {
    //                 name: "john relief",
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: "2",
    img: "/product02.png",
    title: "Dining Chair",
    alt: "sales product img2",
    badgeTitle: "-16%",
    price: 500,
    post: [{ name: "john" }],
  },
  {
    id: "3",
    img: "/product03.png",
    title: "Domino Chair",
    alt: "sales product img3",
    badgeTitle: "",
    price: 300,
    post: [{ name: "john" }],
  },
  {
    id: "4",
    img: "/product04.png",
    title: "Domino Chair",
    alt: "sales product img4",
    badgeTitle: "-20%",
    price: 150,
    post: [{ name: "john" }],
  },
  {
    id: "5",
    img: "/product05.png",
    title: "Domino House",
    alt: "sales product img5",
    badgeTitle: "",
    price: 500,
    post: [{ name: "john" }],
  },
  {
    id: "6",
    img: "/product06.png",
    title: "Jeri Chair",
    alt: "sales product img6",
    badgeTitle: "-10%",
    price: 400,
    post: [{ name: "john" }],
  },
  {
    id: "7",
    img: "/product02.png",
    title: "Jeri Dining",
    alt: "sales product img2",
    badgeTitle: "",
    price: 250,
    post: [{ name: "john" }],
  },
  {
    id: "8",
    img: "/product03.png",
    title: "Jeri Dining Chair",
    alt: "sales product img3",
    badgeTitle: "-10%",
    price: 240.0,
    post: [{ name: "john" }],
  },
];

export const slides = [
  { id: 1, img: "/slide-1.png", alt: "blog wrap" },
  { id: 2, img: "/slide-2.png", alt: "blog wrap" },
  { id: 3, img: "/slide-2.png", alt: "blog wrap" },
];

export const logoSlides = [
  { id: 1, img: "/brand-1.png", alt: "brand logo" },
  { id: 2, img: "/brand-2.png", alt: "brand logo" },
  { id: 3, img: "/brand-3.png", alt: "brand logo" },
  { id: 4, img: "/brand-4.png", alt: "brand logo" },
  { id: 5, img: "/brand-5.png", alt: "brand logo" },
  { id: 6, img: "/brand-6.png", alt: "brand logo" },
];

export const categorySlides = [
  {
    id: 1,
    img: "/category_1.png",
    alt: "brand logo",
    title: "CABINET",
  },
  {
    id: 2,
    img: "/category_2.png",
    alt: "brand logo",
    title: "STOOL",
  },
  {
    id: 3,
    img: "/category_3.jpg",
    alt: "brand logo",
    title: "TABLE",
  },
  {
    id: 4,
    img: "/category_1.png",
    alt: "brand logo",
    title: "SOFA",
  },
];

export const reviews = [
  {
    id: 1,
    icon: Array.from({ length: 3 }, (_, index) => (
      <span key={index}>{startIcon}</span>
    )),
    title: "“UAM EXCEEDED MY EXPECTATIONS.”",
    imgTitle: "DENISE B.",
    description:
      "Let me start by saying, I love, love, love, Decrial. Thanks so much for capturing my vision and bringing my ordinary space to a...",
    img: "/category_1.png",
    alt: "brand logo",
  },
  {
    id: 2,
    icon: Array.from({ length: 4 }, (_, index) => (
      <div key={index}>{startIcon}</div>
    )),
    title: "“ABSOLUTELY LOVED UAM!!!!!”",
    imgTitle: "EVELYN HANSON",
    description:
      "Apart from helping with the design and selecting pieces, Uam helps with ordering, which is great and saves so much.",
    img: "/category_2.png",
    alt: "brand logo",
  },
  {
    id: 3,
    icon: Array.from({ length: 5 }, (_, index) => (
      <div key={index}>{startIcon}</div>
    )),
    title: "“EXCELLENT PIECE OF WORK”",
    imgTitle: "LINDA",
    description:
      "Let me start by saying, I love, love, love, Decrial. Thanks so much for capturing my vision and bringing my ordinary space to a...",
    img: "/category_3.jpg",
    alt: "brand logo",
  },
  {
    id: 4,
    icon: Array.from({ length: 4 }, (_, index) => (
      <div key={index}>{startIcon}</div>
    )),
    title: "“I LOVE ALMO”",
    imgTitle: "JENNIFER D.",
    description:
      "I’m impressed by the quality and variety of organic options available at this store. The range of locally sourced organic fruits…",
    img: "/category_1.png",
    alt: "brand logo",
  },
  {
    id: 5,
    icon: Array.from({ length: 4 }, (_, index) => (
      <div key={index}>{startIcon}</div>
    )),
    title: "“ABSOLUTELY LOVED UAM!!!!!”",
    imgTitle: "EVELYN HANSON",
    description:
      "Apart from helping with the design and selecting pieces, Uam helps with ordering, which is great and saves so much.",
    img: "/category_2.png",
    alt: "brand logo",
  },
  {
    id: 6,
    icon: Array.from({ length: 5 }, (_, index) => (
      <div key={index}>{startIcon}</div>
    )),
    title: "“EXCELLENT PIECE OF WORK”",
    imgTitle: "LINDA",
    description:
      "Let me start by saying, I love, love, love, Decrial. Thanks so much for capturing my vision and bringing my ordinary space to a...",
    img: "/category_3.jpg",
    alt: "brand logo",
  },
];

export const InstItems = [
  {
    id: 1,
    img: "/category_1.png",
    alt: "brand logo",
  },
  {
    id: 2,
    img: "/category_2.png",
    alt: "brand logo",
  },
  {
    id: 3,
    img: "/category_3.jpg",
    alt: "brand logo",
  },
  {
    id: 4,
    img: "/category_2.png",
    alt: "brand logo",
  },
  {
    id: 5,
    img: "/category_1.png",
    alt: "brand logo",
  },
  {
    id: 6,
    img: "/category_3.jpg",
    alt: "brand logo",
  },
];
