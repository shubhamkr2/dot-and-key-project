import React from "react";
import { CarouselBanner } from "../Components/CarouselBanner";
import ProductCarousel from "../Components/ProductCarousel";
import styles from "../Styles/Home.module.css";
import { Carousel_Product_Card } from "../Components/Carousel_Product_Card";
import { Footer } from "../Components/Footer";
import { NavigationBar } from "../Components/NavigationBar";
import { Toaster } from "react-hot-toast";

const images = [
  "https://www.dotandkey.com/cdn/shop/files/vit_c_range_2_3db9ac7c-72cb-4cdd-b3fc-a14e367e6113.jpg?v=1694971486",
  "https://www.dotandkey.com/cdn/shop/files/desk_1_1.jpg?v=1695020502",
  "https://www.dotandkey.com/cdn/shop/files/CATE_DESK_83a75687-70e2-4b85-9461-e76234271980.jpg?v=1694972157",
  "https://www.dotandkey.com/cdn/shop/files/desk_6_fe6ac7ac-4400-4907-b4f3-66bb19bd3be0.jpg?v=1694881644",
];
const cards = [
  {
    _id: "6465ed0fa52babea98ecdcb1",
    category: "lipcare",
    title: "SPF 30 Strawberry Red Lip Balm",
    description: [
      "Delicious buttery lip balm with the fruity goodness of strawberries",
      "With SPF 30 for daily sun protection",
      "Treats dry, pigmented lips with Vitamin C+E",
      "Shea butter & Avocado oil to deeply moisturize",
      "Adds a fresh juicy tint & non-stop shine",
      "100% Vegan with non sticky, lightweight texture",
    ],
    price: 199,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Retinol-Eye-Cream1_5a81d19d-a46f-47c0-a374-f6ebeda47c81_360x.png?v=1695126946",
      "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Dot/Hcard/strawbewrry%20(1).webp",
      "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Dot/Hcard/3-2_1.webp",
      "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Dot/Hcard/2_05c691a5-cf1b-4c94-af97-e4149b6ce588.webp",
    ],
    rating: 2.5,
    highlights: "HIGH TINTED",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1556062c3fbde39b96a3",
    category: "facewash",
    title: "Vitamin C Foaming Face Wash",
    description: [
      "This vitamin C foaming face wash has 3 types of Vitamin C from kakadu plum, ethyl ascorbic acid & sodium ascorbyl phosphate",
      "Gentle sulphate-free foaming face wash that cleanses the skin without drying it out",
      "This vitamin C face wash fights dark spots and pigmentation & sun tan",
      "Of the many vitamin c face wash benefits, one is to prevent oxidative damage from environmental stressors to increase skin elasticity and firmness",
      "This papaya-enriched foaming face wash gently exfoliates to even skin texture",
      "In a potent blend of blood orange, hyaluronic acid & pro-vitamin B5 this vitamin C foaming face wash is your 1-step glow getter",
    ],
    price: 285,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Deep-Pore-Cleanser_360x.jpg?v=1692902752",
      "https://github.com/shubhamkr2/UploadImages/blob/main/Dot/Hcard/Artboard2-2_5.jpg?raw=true",
      "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Dot/Hcard/Artboard1-2_22.webp",
      "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Dot/Hcard/Artboard2_9_c42cab18-c6e0-4b8b-97d4-5af66d9d802a.webp",
    ],
    rating: 4.4,
    highlights: "CLEAN, GLOWING SKIN",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1551062c3fbde39b966b",
    category: "sunscreens",
    title: "Cica & Niacinamide SPF 50 Face Sunscreen",
    description: [
      "Broad spectrum daily UV protection SPF 50 face sunscreen",
      "Niacinamide & Super Cica boosted sun protection formula to calm & soothe skin while correcting uneven skin tone & dark spots",
      "Easy blendability into the skin that leaves no white cast or heavy, sticky residue",
      "Lightweight, oil-free, quick-absorbing texture that lends a fuss-free matte finish",
      "Reverses the effects of sun exposure on your skin to prevent aging and tanning from harsh UV rays",
      "SPF 50 face sunscreen for oily skin. Also suitable for acne-prone, sensitive & all skin types. ",
      "This SPF 50 is OMC Oxybenzone free, non comedogenic, water & sweat resistant",
    ],
    price: 310,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/eyecica-1_360x.jpg?v=1692902424",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/spf_1_2.png?v=1683526566",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Website2_fc09aa58-6509-446e-8945-8edd6c742f7e.jpg?v=1683526566",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Website3_31668387-6bdc-42a6-b5c5-4a92b1cc51c1.jpg?v=1683526566",
    ],
    rating: 4.5,
    highlights: "ACNE-PRONE SKIN FRIENDLY",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1552062c3fbde39b967b",
    category: "moisturizer",
    title: "Barrier Repair Face Cream with Ceramides",
    description: [
      "Daily intense moisturising face cream for nourished, soft & healthy skin.",
      "Prevents trans-epidermal water loss (TEWL) by locking in moisture.",
      "With 5 essential ceramides to protect skin & accelerate skin barrier repair.",
      "Deeply hydrates skin with hyaluronic acid to heal dry, distressed skin.",
      "Japanese Rice Water soothes inflammation, irritation & itchiness.",
      "Balances skin's microbiome level & improves skin resilience with probiotics.",
      "Smooth, creamy & non-comedogenic formula for dry to very dry skin.",
      "Fragrance Free, Colour Free Formula ideal for sensitive skin.",
    ],
    price: 375,
    images: [
      "http://cdn.shopify.com/s/files/1/0361/8553/8692/products/barrcream_1_540x_30017c57-3909-4ddf-9181-453749dc965b.webp?v=1683526469",
      "http://cdn.shopify.com/s/files/1/0361/8553/8692/products/2.jpg?v=1683526469",
      "http://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_fa136b44-dbe0-408c-9849-574a415155aa.jpg?v=1683526469",
      "http://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_d10bbdbc-6bb3-4fbb-a78e-69402d04a25c.jpg?v=1683526469",
    ],
    rating: 4.2,
    highlights: "REPAIRS SKIN BARRIER",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1556062c3fbde39b969b",
    category: "serums",
    title: "Alpha Arbutin + Azelaic Biphasic Radiance Serum",
    description: [
      "India's first dual-phase serum with distinct oil+water parts for a clear, even-toned, radiant complexion. ",
      "The oil part is infused with rosehip oil to combat hyperpigmentation.",
      "The water part combines alpha arbutin and azelaic acid to inhibit melanin production.",
      "Safe for all skin types, it will also fight blemishes & discolouration.",
      "Mix it well before application & enjoy visibly nourished, even-toned skin.",
    ],
    price: 518,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofalpha.jpg?v=1683526817",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_10.webp?v=1683526817",
    ],
    rating: 4.3,
    highlights: "OIL + WATER SERUM",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1552062c3fbde39b9675",
    category: "sunscreens",
    title: "SPF 30 Mango Non -Tinted Lip Balm",
    description: [
      "Delicious buttery lip balm with the fruity goodness of strawberries",
      "With SPF 30 for daily sun protection",
      "Treats dry, pigmented lips with Vitamin C+E",
      "Shea butter & Avocado oil to deeply moisturize",
      "Adds a fresh juicy tint & non-stop shine",
      "100% Vegan with non sticky, lightweight texture",
    ],
    price: 236,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/mango_8f10f236-66b6-45fb-a684-adf7f7f5d28d.webp?v=1683527284",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_24.jpg?v=1683527284",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-2_3.jpg?v=1683527284",
      "cdn.shopify.com/s/files/1/0361/8553/8692/products/4_25.jpg?v=1683527284",
    ],
    rating: 4.8,
    highlights: "NON TINTED",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1552062c3fbde39b9671",
    category: "sunscreens",
    title: "SPF 30 Watermelon Pink Lip Balm",
    description: [
      "Delicious buttery lip balm with the fruity goodness of strawberries",
      "With SPF 30 for daily sun protection",
      "Treats dry, pigmented lips with Vitamin C+E",
      "Shea butter & Avocado oil to deeply moisturize",
      "Adds a fresh juicy tint & non-stop shine",
      "100% Vegan with non sticky, lightweight texture",
    ],
    price: 236,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/waterlipo_1.jpg?v=1683527320",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/strawlip_1.jpg?v=1683527381",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/orangelip_1.jpg?v=1683527264",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/mangolip_1.jpg?v=1683527194",
    ],
    rating: 4.2,
    highlights: "HIGH TINTED",
    stock: true,
    __v: 0,
  },
  {
    _id: "6465231f955ff2cd31929962",
    category: "lipcare",
    title: "Lip Plumping Mask with Vitamin C + E",
    description: [
      "Ultra-moisturizing, antioxidant-rich lip mask for soft, smooth & plump lips",
      "A lip treatment infused with Vitamin C to fade lip pigmentation & reveal natural lip colour over time.",
      "Powered by the Triple Hydration Action of hyaluronic acid, natural plant oils & 20% shea butter to heal dry, chapped & flakey lips.",
      "Provides deep moisturisation & locks it in to prevent further dryness for fuller lips.",
      "Soft, buttery texture that's lightweight & glides on easily without any sticky feeling.",
      "Blends natural fruit colour & flavour which makes it a perfect tinted lip balm or lipstick topper with added benefits.",
    ],
    price: 236,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lipmask.jpg?v=1684303226",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lippurple_66d6a7be-7861-4172-b874-b3e4918dc69e.jpg?v=1684303349",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lippeach.jpg?v=1684303349",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/88EB42FB-BA83-4B80-9FAB-0150FC67F6B4.jpg?v=1684303349",
    ],
    rating: 3.2,
    highlights: "3 SHADES AVAILABLE",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1552062c3fbde39b9673",
    category: "sunscreens",
    title: "SPF 30 Cocoa Nude Lip Balm with Vitamin C+E",
    description: [
      "Delicious buttery lip balm with the fruity goodness of strawberries",
      "With SPF 30 for daily sun protection",
      "Treats dry, pigmented lips with Vitamin C+E",
      "Shea butter & Avocado oil to deeply moisturize",
      "Adds a fresh juicy tint & non-stop shine",
      "100% Vegan with non sticky, lightweight texture",
    ],
    price: 236,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/coco.jpg?v=1683527256",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_23.jpg?v=1683527256",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_23.jpg?v=1683527256",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_24.jpg?v=1683527256",
    ],
    rating: 3.7,
    highlights: "LOW TINTED",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1556062c3fbde39b96a3",
    category: "facewash",
    title: "Vitamin C Foaming Face Wash",
    description: [
      "This vitamin C foaming face wash has 3 types of Vitamin C from kakadu plum, ethyl ascorbic acid & sodium ascorbyl phosphate",
      "Gentle sulphate-free foaming face wash that cleanses the skin without drying it out",
      "This vitamin C face wash fights dark spots and pigmentation & sun tan",
      "Of the many vitamin c face wash benefits, one is to prevent oxidative damage from environmental stressors to increase skin elasticity and firmness",
      "This papaya-enriched foaming face wash gently exfoliates to even skin texture",
      "In a potent blend of blood orange, hyaluronic acid & pro-vitamin B5 this vitamin C foaming face wash is your 1-step glow getter",
    ],
    price: 285,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CopyofVITAMINFOAMINGFACEWASHcopy.webp?v=1683526774",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard2-2_5.jpg?v=1683526774",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_22.jpg?v=1683526774",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_34.jpg?v=1683526774",
    ],
    rating: 4.4,
    highlights: "CLEAN, GLOWING SKIN",
    stock: true,
    __v: 0,
  },
];
const bestsellers = [
  {
    _id: "645e1553062c3fbde39b967d",
    category: "moisturizer",
    title: "CICA & Niacinamide Night Gel",
    description: [
      "Dot & Key Cica Niacinamide Night Gel also contains Green Tea, Tea Tree and Hyaluronic",
      "Lightweight night gel for sensitive, oily, acne-prone skin",
      "Clinically proven to reduce acne, pigmentation and dark spot",
      "Calms and soothes redness & irritation due to acne",
      "With no added synthetic fragrance",
      "Skin appears acne-free, calm & clear",
    ],
    price: 470,
    images: [
      "http://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Cica-Night-Gel.jpg?v=1683526482",
      "http://cdn.shopify.com/s/files/1/0361/8553/8692/products/2-Cica-Night-Gel_1.jpg?v=1683526482",
      "http://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-Cica-Night-Gel_1.jpg?v=1683526482",
      "http://cdn.shopify.com/s/files/1/0361/8553/8692/products/4-Cica-Night-Gel_1.jpg?v=1683526482",
    ],
    rating: 4.9,
    highlights: "FADES ACNE SCARS",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1551062c3fbde39b9669",
    category: "sunscreens",
    title: "Watermelon Cooling SPF 50 Face Sunscreen",
    description: [
      "Daily wear, instantly cooling sunscreen with SPF 50 for smooth, luminous & protected skin every day.",
      "Powered by UV filters to protect skin against damaging UVA, UVB, blue light, IR & HEV rays.",
      "Promotes better absorption of Vitamin D into the skin, making it beneficial to be in the sun.",
      "Infused with Watermelon to fight dullness, treat uneven skin tone & correct uneven skin texture.",
      "Infused with Hyaluronic Acid to provide lightweight hydration without any greasiness for a dewy, silky finish.",
      "Lightweight, Gel cream texture that provides full absorbency with zero white cast.",
    ],
    price: 470,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-1.webp?v=1683526609",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2-listing.webp?v=1683526609",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-listing.webp?v=1683526609",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4-listing.webp?v=1683526609",
    ],
    rating: 4.5,
    highlights: "GIVES INSTANT COOLING",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1555062c3fbde39b9699",
    category: "serums",
    title: "Hyaluronic & Vitamin C Face Serum",
    description: [
      "Featuring hyaluronic acid, this hydrating face serum replenishes skin’s moisture reservoirs. ",
      "Contains Vitamin C and antioxidants from acai berries",
      "Formulated with ceramides and botanicals elements like soothing bulgarian rose",
      "Improves skin’s barrier function and restores plump, dewy complexion",
      "Can be used alone or along with your favourite moisturising cream",
    ],
    price: 632,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-HA-SERUM.jpg?v=1683526891",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2-HA-SERUM.jpg?v=1683526891",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-HA-SERUM.jpg?v=1683526891",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4-HA-SERUM.jpg?v=1683526891",
    ],
    rating: 3.6,
    highlights: "IMPROVES SKIN BARRIER",
    stock: true,
    __v: 0,
  },
  {
    _id: "6465f738d10dbe249dcb9960",
    category: "lipcare",
    title: "SPF 30 Mango Non -Tinted Lip Balm",
    description: [
      "Delicious buttery lip balm with the fruity goodness of mangoes",
      "With SPF 30 for daily sun protection",
      "Treats dry, pigmented lips with Vitamin C+E",
      "Shea butter & Avocado oil to deeply moisturize",
      "Adds a fresh juicy tint & non-stop shine",
      "100% Vegan with non-sticky, lightweight texture",
    ],
    price: 399,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/mango_9dc0f4f2-713c-476a-9716-7e6fb1ba6d50.jpg?v=1686770639",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/mango_8f10f236-66b6-45fb-a684-adf7f7f5d28d.webp?v=1684303406",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_24.jpg?v=1684303406",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-2_3.jpg?v=1684303406",
    ],
    rating: 4.1,
    highlights: "NON TINTED",
    stock: true,
    __v: 0,
  },
];
const category = [
  {
    _id: "6465e2162367bf0c482bb1ca",
    category: "facemask",
    title: "Green Tea & Sandalwood Face Mask",
    description: [
      "This skin polishing, sun tan removal clay mask promotes a naturally radiant glow",
      "Sandalwood and lemon verbena effectively remove stubborn tan",
      "A de-tan face pack that gives you visibly brighter skin after the very first application",
      "Also infused with kaolin and green tea for a refreshing experience",
      "A bright yellow clay, thick, fresh smelling clay mask for glowing skin",
    ],
    price: 467,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/detan_360x.jpg?v=1684821266",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Detan-Clay-Mask.jpg?v=1684303093",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2-Detan-Clay-Mask.jpg?v=1684303093",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-Detan-Clay-Mask.jpg?v=1684303093",
    ],
    rating: 5,
    highlights: "DE-TAN FACE PACK",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1557062c3fbde39b96a9",
    category: "facewash",
    title: "AHA BHA & Pineapple Foaming Face Wash",
    description: [
      "Daily exfoliation in a luxurious cleansing foam wash to enhance skin glow",
      "Gentle sulphate-free foaming face wash suitable for oily, acne prone skin",
      "This AHA face wash has glycolic & lactic acid along with BHA salicylic acid",
      "Unclogs pores to treat active acne and prevents future breakouts",
      "Controls excess oil, sebum, blackheads and whiteheads",
      "With antioxidant-rich pineapple extracts to even skin tone and boost skin glow",
    ],
    price: 295,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CopyofAHAFOAMINGFACEWASH.webp?v=1683526711",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/aha.webp?v=1683526711",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_17.jpg?v=1683526711",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard2_10.jpg?v=1683526711",
    ],
    rating: 3.8,
    highlights: "GENTLE EXFOLIATION",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1554062c3fbde39b968d",
    category: "serums",
    title: "Cica & 10% Niacinamide Serum",
    description: [
      "An ideal acne aftercare treatment for blemish-free, spotless & glowing skin.",
      "10% Niacinamide works effectively to fade acne scars & dark spots.",
      "Super Cica helps soothe inflammation & controls further breakouts.",
      "Helps control excess oil & minimizes the appearance of pores.",
      "Infused with Alpha Arbutin to correct pigmentation for clear skin.",
      "Lightweight, quick absorbing & non-comedogenic, it treats oily, acne-prone & sensitive skin with 2x efficacy.",
    ],
    price: 570,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cica-serum-1.webp?v=1683526848",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2-cica-serum.webp?v=1683526848",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-cica-serum.webp?v=1683526848",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4-cica-serum.webp?v=1683526848",
    ],
    rating: 4.8,
    highlights: "FADES DARK SPOTS",
    stock: true,
    __v: 0,
  },
  {
    _id: "645e1552062c3fbde39b9677",
    category: "moisturizer",
    title: "Vitamin C + E Moisturizer",
    description: [
      "Skin brightening Vitamin C moisturizer with 3 types of Vitamin C",
      "Made with the goodness of Kakadu Plum, Ethyl Ascorbic Acid & Sodium Ascorbic Phosphate",
      "Fades dark spots & hyperpigmentation",
      "Lightweight, sorbet-like texture ideal for all skin types",
      "Skin appears even-toned, moisturized & glowing",
    ],
    price: 565,
    images: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1_2.jpg?v=1683526535",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2-56.webp?v=1683526535",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-44.webp?v=1683526535",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4-40.webp?v=1683526535",
    ],
    rating: 4.7,
    highlights: "MAKES SKIN GLOW",
    stock: true,
    __v: 0,
  },
];
const offerImages = [
  "https://www.dotandkey.com/cdn/shop/files/gua_desk_874e0fed-6bbc-4f1b-ba76-ec91ea1f9c73.jpg?v=1683570933",
  "https://www.dotandkey.com/cdn/shop/files/3_Sale_Banner_Desktop_copy-2.jpg?v=1683616545",
  "https://www.dotandkey.com/cdn/shop/files/Sale_Banner_Desktop_copy_ae7b83d8-b192-4808-b2e5-bbd703a788f5.jpg?v=1682592139",
];
function Home() {
  return (
    <div className={styles.container}>
      {/* NavigationBar component */}
      <div className={styles.navigationBar}>
        <NavigationBar />
      </div>
      <div>
        <Toaster />
      </div>
      {/********Top banner carousel*********/}
      <CarouselBanner images={images} />

      {/********Product carousel*********/}
      <div className={styles.heading}>
        <span>SHOP OUR</span>
        <h2>NEW ARRIVALS</h2>
      </div>
      <ProductCarousel cards={cards} />

      {/******** Offer banner carousel*********/}
      <div className={styles.heading}>
        <span>Loved By</span>
        <h2>2M + Customers</h2>
      </div>
      <CarouselBanner images={offerImages} />

      {/********Our BESTSELLERS*********/}
      <div className={styles.heading}>
        <span>OUR</span>
        <h2>BESTSELLERS</h2>
        <p>FACE CREAMS | SUNSCREEN | FACE SERUMS | LIP CARE</p>
      </div>
      <div className={styles.bestsellers}>
        {bestsellers.map((item, i) => (
          <Carousel_Product_Card product={item} key={i} />
        ))}
      </div>

      {/********Our SPOTLIGHT*********/}
      <div className={styles.spotlight}>
        <div className={styles.heading}>
          <span>IN THE</span>
          <h2>SPOTLIGHT</h2>
        </div>
        <div className={styles.spotlight_img}>
          <img
            src="https://www.dotandkey.com/cdn/shop/files/desk-45_ccef1097-f1b8-4f09-8ed3-7d0837ea216a.webp?v=1678876894"
            alt="banner"
          />
          <img
            src="https://www.dotandkey.com/cdn/shop/files/desk_resize.jpg?v=1679570858"
            alt="banner"
          />
        </div>
        <img
          src="https://www.dotandkey.com/cdn/shop/files/desk-47.webp?v=1679037760"
          alt="banner"
        />
      </div>

      {/********Our CATEGORIES*********/}
      <div className={styles.heading}>
        <span>SHOP OUR</span>
        <h2>TOP CATEGORIES</h2>
        <p>SKIN | HAIRCARE | BODYCARE </p>
      </div>
      <div className={styles.category}>
        {category.map((item, i) => (
          <Carousel_Product_Card product={item} key={i} />
        ))}
      </div>

      {/********Footer*********/}
      <Footer />
    </div>
  );
}

export { Home };
