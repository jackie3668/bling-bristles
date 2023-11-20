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
    keywords: ["green", "metallic", "y2k", "saturn", "planet", "silver", "galaxy", "abstract"],
    description: "Unleash your inner trendsetter with our Phantom press-on nails. These striking green metallic nails are a nod to the cool Y2K aesthetic, bringing a touch of futuristic style to your fingertips. Whether you're making a bold statement or simply staying on-trend, the Phantom nails are the perfect accessory. Embrace the allure of metallic hues and elevate your nail game effortlessly."
  },
  {
    id: 2,
    name: "Black Pink",
    image: p2_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new", "popular"],
    keywords: ["black", "pink", "heart", "star", "gem", "ombre", "sheer", "cool", "sweet"],
    description: "Discover the enchantment of our Black Pink press-on nails. With a delightful blend of black and pink, adorned with charming hearts and stars, these nails offer a sweet and cool aesthetic. Elevate your nail game with the perfect mix of style and sweetness. Whether you're a fan of ombre or adore charming gem-like details, the Black Pink nails are a must-have for trendy and stylish fingertips."
  },
  {
    id: 3,
    name: "Candyfloss Prism",
    image: p3_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["candyfloss", "prism", "colorful", "pastel","pink","metallic"],
    description: "Indulge in the whimsical charm of our Candyfloss Prism press-on nails. These colorful and pastel-hued nails bring a touch of magic to your fingertips, creating a dreamy and vibrant look. Embrace the beauty of a candyfloss-inspired palette and let your nails become a canvas for self-expression."
  },
  {
    id: 4,
    name: "Sugar-Coated Bullet",
    image: p4_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["sugar-coated", "bullet", "edgy", "bold","pink"],
    description: "Make a bold and edgy statement with our Sugar-Coated Bullet press-on nails. These fierce and daring nails feature a sugar-coated design that adds an element of rebellion to your style. Embrace the powerful and confident look of the Sugar-Coated Bullet nails and let your nails reflect your unique personality."
  },
  {
    id: 5,
    name: "Galactic",
    image: p5_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["galactic", "space", "stars", "cosmic", "metallic"],
    description: "Embark on a cosmic journey with our Galactic press-on nails. Featuring mesmerizing space-inspired designs and twinkling stars, these nails evoke the magic of the universe. Transform your fingertips into a celestial masterpiece and embrace the cosmic beauty of the Galactic nails."
  },
  {
    id: 6,
    name: "Mocha Delight",
    image: p6_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["mocha", "delight", "neutral", "subtle"],
    description: "Experience the subtle elegance of our Mocha Delight press-on nails. With a neutral and mocha-inspired palette, these nails exude sophistication and charm. Whether you're going for a classic look or adding a touch of subtlety to your style, the Mocha Delight nails are the perfect choice."
  },
  {
    id: 7,
    name: "Bubble Bliss",
    image: p7_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["bubble", "bliss", "pastel", "whimsical"],
    description: "Step into a world of whimsy with our Bubble Bliss press-on nails. Featuring a pastel and bubble-inspired design, these nails bring a sense of joy and playfulness to your fingertips. Embrace the blissful and carefree vibe of the Bubble Bliss nails and let your nails become a canvas for happiness."
  },
  {
    id: 8,
    name: "Pearlescent",
    image: p8_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "popular", "new"],
    keywords: ["pearlescent", "shimmer", "elegant", "classic"],
    description: "Elevate your style with the timeless elegance of our Pearlescent press-on nails. Featuring a shimmering and pearlescent finish, these nails add a touch of sophistication to any look. Whether you're attending a special event or simply want to radiate classic beauty, the Pearlescent nails are the perfect choice."
  },
  {
    id: 9,
    name: "Secret Garden",
    image: p9_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["secret", "garden", "floral", "whimsical"],
    description: "Immerse yourself in the enchanting beauty of our Secret Garden press-on nails. Featuring whimsical floral designs, these nails transport you to a hidden oasis of beauty. Embrace the romantic and delicate look of the Secret Garden nails and let your fingertips bloom with elegance."
  },
  {
    id: 10,
    name: "Emeralds",
    image: p10_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["galactic", "space", "stars", "cosmic", "metallic"],
    description: "Embark on a cosmic journey with our Galactic press-on nails. Featuring mesmerizing space-inspired designs and twinkling stars, these nails evoke the magic of the universe. Transform your fingertips into a celestial masterpiece and embrace the cosmic beauty of the Galactic nails."
  },
  {
    id: 11,
    name: "Cranberry",
    image: p11_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["cranberry", "red", "bold", "vibrant"],
    description: "Add a pop of vibrant color to your nails with our Cranberry press-on nails. These bold and striking nails feature a rich cranberry hue that demands attention. Whether you're making a statement or complementing your adventurous style, the Cranberry nails are the perfect choice."
  },
  {
    id: 12,
    name: "Velvet Touch",
    image: p12_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["velvet","shimmer", "touch", "luxurious", "regal", "pink"],
    description: "Indulge in the luxurious and regal feel of our Velvet Touch press-on nails. With a velvety smooth texture, these nails bring a touch of opulence to your fingertips. Elevate your look with the sumptuous and sophisticated Velvet Touch nails."
  },
  {
    id: 13,
    name: "Alloy",
    image: p13_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["green", "neon", "alloy", "metallic", "industrial", "modern"],
    description: "Embrace the modern and industrial aesthetic with our Alloy press-on nails. Featuring a metallic alloy-inspired design, these nails add a touch of contemporary style to your fingertips. Whether you're a fan of industrial chic or simply want to make a bold statement, the Alloy nails are the perfect choice."
  },
  {
    id: 14,
    name: "Socialite",
    image: p14_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["socialite", "glamorous", "elegant", "sophisticated"],
    description: "Step into the world of glamour with our Socialite press-on nails. These glamorous and elegant nails are perfect for any social event or special occasion. Whether you're attending a gala or a sophisticated soirée, let your nails reflect the grace and charm of a true socialite."
  },
  {
    id: 15,
    name: "Purr-fect Cat Eye",
    image: p15_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["cat eye", "purr-fect", "feline", "mysterious", "pink"],
    description: "Unleash your inner feline with our Purr-fect Cat Eye press-on nails. Featuring a captivating cat-eye design, these nails exude mystery and allure. Whether you're a fan of feline-inspired fashion or simply want to add a touch of mystique to your style, the Purr-fect Cat Eye nails are the ideal choice."
  },
  {
    id: 16,
    name: "Night Sky",
    image: p16_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["night sky", "celestial", "stars", "dark"],
    description: "Embrace the enchantment of the Night Sky with our press-on nails. Featuring celestial designs and twinkling stars against a dark backdrop, these nails evoke the magic of a starry night. Transform your fingertips into a canvas of cosmic beauty with the Night Sky nails."
  },
  {
    id: 17,
    name: "Merlot",
    image: p17_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["merlot", "wine", "rich", "sophisticated", "sexy"],
    description: "Indulge in the rich and sophisticated allure of our Merlot press-on nails. Inspired by the deep tones of merlot wine, these nails add a touch of luxury to your fingertips. Whether you're a wine connoisseur or simply appreciate the beauty of deep hues, the Merlot nails are a perfect choice."
  },
  {
    id: 18,
    name: "Americano",
    image: p18_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["americano", "coffee", "earthy", "warm"<"cozy"],
    description: "Warm up your style with our Americano press-on nails. Featuring earthy tones inspired by a cup of rich Americano coffee, these nails bring a touch of warmth to your look. Whether you're a coffee enthusiast or simply love warm, earthy hues, the Americano nails are a delightful choice."
  },
  {
    id: 19,
    name: "Electric Dreams",
    image: p19_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["electric dreams", "neon", "vibrant", "retro"],
    description: "Step into the world of retro-futurism with our Electric Dreams press-on nails. Featuring vibrant neon colors and bold designs, these nails capture the essence of electric dreams. Whether you're a fan of retro aesthetics or simply want to make a bold statement, the Electric Dreams nails are the perfect choice."
  },
  {
    id: 20,
    name: "Silver Lining",
    image: p20_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new", "popular"],
    keywords: ["silver lining", "metallic", "shimmer", "elegant","y2k","cool"],
    description: "Discover the beauty of our Silver Lining press-on nails. With a metallic shimmer that adds an elegant touch to your fingertips, these nails are a timeless choice. Whether you're attending a special event or simply want to radiate classic beauty, the Silver Lining nails are the perfect accessory."
  },
  {
    id: 21,
    name: "Stellar",
    image: p21_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["stellar", "space", "galactic", "mystical"],
    description: "Embark on a cosmic journey with our Stellar press-on nails. Inspired by the mysteries of space and the galaxy, these nails feature captivating designs that evoke a sense of wonder. Whether you're a space enthusiast or simply want to embrace a mystical vibe, the Stellar nails are the perfect choice."
  },
  {
    id: 22,
    name: "Starburst",
    image: p22_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["starburst", "radiant", "dynamic", "energetic"],
    description: "Add a burst of radiance to your style with our Starburst press-on nails. Featuring dynamic and energetic designs inspired by starbursts, these nails are a celebration of vibrant beauty. Whether you're looking to make a bold statement or simply want to exude positive energy, the Starburst nails are a stellar choice."
  },
  {
    id: 23,
    name: "Celestial",
    image: p23_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["celestial", "cosmic", "galaxy", "dreamy"],
    description: "Transport yourself to a dreamy celestial realm with our Celestial press-on nails. These nails feature cosmic designs that evoke a sense of wonder and enchantment. Whether you're a dreamer or simply want to add a touch of the galaxy to your style, the Celestial nails are the perfect choice."
  },
  {
    id: 24,
    name: "Y2K",
    image: p24_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["Y2K", "retro", "nostalgic", "futuristic"],
    description: "Step back in time with our Y2K press-on nails. Inspired by the Y2K aesthetic that blends retro vibes with a futuristic twist, these nails are a nod to the turn of the millennium. Whether you're feeling nostalgic or want to embrace a unique blend of styles, the Y2K nails are a must-have."
  },
  {
    id: 25,
    name: "Caramel Macchiato",
    image: p25_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["caramel macchiato", "coffee", "warm", "cozy"],
    description: "Indulge in the warmth and coziness of our Caramel Macchiato press-on nails. Inspired by the rich tones of a caramel macchiato, these nails bring a touch of warmth to your fingertips. Whether you're a coffee lover or simply want to add a cozy vibe to your style, the Caramel Macchiato nails are a delightful choice."
  },
  {
    id: 26,
    name: "Champagne Pop",
    image: p26_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["champagne pop", "celebratory", "effervescent", "elegant"],
    description: "Celebrate in style with our Champagne Pop press-on nails. Featuring designs inspired by the effervescence of champagne bubbles, these nails add a touch of celebration to your look. Whether you're attending a special occasion or simply want to exude elegance, the Champagne Pop nails are the perfect accessory."
  },
  {
    id: 27,
    name: "Dark Fairytale",
    image: p27_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["dark fairytale", "mysterious", "enchanted", "gothic"],
    description: "Step into an enchanted world with our Dark Fairytale press-on nails. Featuring mysterious and gothic-inspired designs, these nails transport you to a realm of magic and intrigue. Whether you're a fan of dark aesthetics or simply want to embrace a fairytale vibe, the Dark Fairytale nails are a captivating choice."
  },
  {
    id: 28,
    name: "Sugar",
    image: p28_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["sugar", "sweet", "pastel", "delightful"],
    description: "Indulge in the sweetness of our Sugar press-on nails. With delightful pastel hues and charming designs, these nails add a touch of sweetness to your fingertips. Whether you're a fan of sugary aesthetics or simply want to embrace a delightful vibe, the Sugar nails are a whimsical choice."
  },
  {
    id: 29,
    name: "London Fog",
    image: p29_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["London Fog", "classic", "elegant", "sophisticated"],
    description: "Elevate your style with the classic and sophisticated charm of our London Fog press-on nails. Inspired by the iconic drink, these nails feature elegant designs that exude timeless beauty. Whether you're strolling through the city or attending a formal event, the London Fog nails are a chic and versatile choice."
  },
  {
    id: 30,
    name: "Jade",
    image: p30_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["Jade", "green", "earthy", "serene"],
    description: "Connect with nature through our Jade press-on nails. Featuring earthy green tones inspired by jade, these nails bring a touch of serenity to your style. Whether you're a nature enthusiast or simply want to embrace a calm and earthy vibe, the Jade nails are a refreshing choice."
  },
  {
    id: 31,
    name: "Psychedelic",
    image: p31_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["psychedelic", "vibrant", "colorful", "retro"],
    description: "Take a trip back to the psychedelic era with our Psychedelic press-on nails. Featuring vibrant and colorful designs inspired by the retro aesthetic, these nails add a burst of energy to your style. Whether you're a fan of bold colors or want to embrace a nostalgic vibe, the Psychedelic nails are a statement-making choice."
  },
  {
    id: 32,
    name: "Genesis",
    image: p32_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["Genesis", "abstract", "modern", "artistic"],
    description: "Embrace the artistic allure of our Genesis press-on nails. With abstract and modern designs, these nails are a canvas for self-expression. Whether you're an art lover or simply want to make a creative statement, the Genesis nails are a unique and artistic choice."
  },
  {
    id: 33,
    name: "Cozy",
    image: p33_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "new"],
    keywords: ["cozy", "warm", "neutral", "comfort"],
    description: "Wrap your nails in cozy warmth with our Cozy press-on nails. Featuring warm and neutral tones, these nails add a touch of comfort to your fingertips. Whether you're snuggled up by the fireplace or enjoying a chilly day, the Cozy nails are a perfect companion for moments of comfort and warmth."
  },
  {
    id: 34,
    name: "Bleeding Heart",
    image: p34_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["bleeding heart", "romantic", "passionate", "dramatic"],
    description: "Express your romantic and passionate side with our Bleeding Heart press-on nails. Featuring dramatic and heart-inspired designs, these nails add a touch of romance to your style. Whether you're celebrating love or simply want to embrace a passionate vibe, the Bleeding Heart nails are a captivating choice."
  },
  {
    id: 35,
    name: "Milk Chocolate",
    image: p35_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["milk chocolate", "brown", "warm", "indulgent"],
    description: "Indulge in the rich and warm tones of our Milk Chocolate press-on nails. Inspired by the decadence of milk chocolate, these nails bring a touch of indulgence to your fingertips. Whether you're a chocolate lover or simply want to add a warm and rich vibe to your style, the Milk Chocolate nails are a delightful choice."
  },
  {
    id: 36,
    name: "Zen Garden",
    image: p36_img,
    new_price: 35.00,
    old_price: 40.00,
    category: ["all", "sale"],
    keywords: ["Zen Garden", "tranquil", "serene", "minimalist"],
    description: "Find tranquility in our Zen Garden press-on nails. With serene and minimalist designs inspired by Zen gardens, these nails add a touch of calm to your style. Whether you're a fan of minimalist aesthetics or simply want to create a tranquil atmosphere, the Zen Garden nails are a peaceful choice."
  },
];

export default all_products;