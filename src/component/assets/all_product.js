import p1_img from "./product_1.jpg";
import p2_img from "./product_2.jpg";
import p3_img from "./product_3.jpg";
import p4_img from "./product_4.jpg";
import p5_img from "./product_5.jpg";
import p6_img from "./product_6.jpg";
import p7_img from "./product_7.jpg";
import p8_img from "./product_8.jpg";
import p9_img from "./product_9.jpg";
import p10_img from "./product_10.jpg";
import p11_img from "./product_11.jpg";
import p12_img from "./product_12.jpg";
import p13_img from "./product_13.jpg";
import p14_img from "./product_14.jpg";
import p15_img from "./product_15.jpg";
import p16_img from "./product_16.jpg";
import p17_img from "./product_17.jpg";
import p18_img from "./product_18.jpg";
import p19_img from "./product_19.jpg";
import p20_img from "./product_20.jpg";
import p21_img from "./product_21.jpg";
import p22_img from "./product_22.jpg";
import p23_img from "./product_23.jpg";
import p24_img from "./product_24.jpg";
import p25_img from "./product_25.jpg";
import p26_img from "./product_26.jpg";
import p27_img from "./product_27.jpg";
import p28_img from "./product_28.jpg";
import p29_img from "./product_29.jpg";
import p30_img from "./product_30.jpg";
import p31_img from "./product_31.jpg";
import p32_img from "./product_32.jpg";
import p33_img from "./product_33.jpg";
import p34_img from "./product_34.jpg";
import p35_img from "./product_35.jpg";
import p36_img from "./product_36.jpg";


let all_products = [
  {
    id: 1,
    name: "Phantom",
    image: p1_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new", "popular"],
  },
  {
    id: 2,
    name: "Black Pink",
    image: p2_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new", "popular"],
  },
  {
    id:3,
    name:"Candyfloss Prism",
    image:p3_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id:4,
    name:"Sugar-Coated Bullet",
    image:p4_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id:5,
    name:"Galactic",
    image:p5_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 6,
    name: "Mocha Delight",
    image: p6_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 7,
    name: "Bubble Bliss",
    image: p7_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 8,
    name: "Pearlescent",
    image: p8_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "popular", "new"],
  },
  {
    id: 9,
    name: "Secret Garden",
    image: p9_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 10,
    name: "Galactic",
    image: p10_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 11,
    name: "Cranberry",
    image: p11_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 12,
    name: "Velvet Touch",
    image: p12_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 13,
    name: "Alloy",
    image: p13_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 14,
    name: "Socialite",
    image: p14_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 15,
    name: "Purr-fect Cat Eye",
    image: p15_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 16,
    name: "Night Sky",
    image: p16_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 17,
    name: "Merlot",
    image: p17_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 18,
    name: "Americano",
    image: p18_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 19,
    name: "Electric Dreams",
    image: p19_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 20,
    name: "Silver Lining",
    image: p20_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new", "popular"],
  },
  {
    id: 21,
    name: "Stellar",
    image: p21_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 22,
    name: "Starburst",
    image: p22_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 23,
    name: "Celestial",
    image: p23_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 24,
    name: "Y2K",
    image: p24_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 25,
    name: "Caramel Macchiato",
    image: p25_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 26,
    name: "Champagne Pop",
    image: p26_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 27,
    name: "Dark Fairytale",
    image: p27_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 28,
    name: "Sugar",
    image: p28_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 29,
    name: "London Fog",
    image: p29_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 30,
    name: "Jade",
    image: p30_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 31,
    name: "Psychedelic",
    image: p31_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 32,
    name: "Genesis",
    image: p32_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 33,
    name: "Cozy",
    image: p33_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
  },
  {
    id: 34,
    name: "Bleeding Heart",
    image: p34_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 35,
    name: "Milk Chocolate",
    image: p35_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
  {
    id: 36,
    name: "Zen Garden",
    image: p36_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
  },
];

export default all_products;