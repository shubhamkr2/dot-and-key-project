import React from "react";
import { CarouselBanner } from "../Components/CarouselBanner";
import ProductCarousel from "../Components/ProductCarousel";
import styles from "../Styles/Home.module.css";
import { Carousel_Product_Card } from "../Components/Carousel_Product_Card";

const images = [
  "https://www.dotandkey.com/cdn/shop/files/pro_desk_552a0e39-53bd-4a71-98da-ceb1a8d819b7_1024x1024.jpg?v=1680865716",
  "https://www.dotandkey.com/cdn/shop/files/vit_c_range_8fe898e8-20cf-48b8-b793-7636da885b89_1024x1024.jpg?v=1682569560",
  "https://www.dotandkey.com/cdn/shop/files/vit_c_range_1_1024x1024.jpg?v=1681794075",
  "https://www.dotandkey.com/cdn/shop/files/CATE_DESK_4375de5a-9172-48e3-9308-938dcbe6759b_1024x1024.jpg?v=1681794124",
];
const cards = [
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/vitcsunscreen_large.jpg?v=1682746364",
    rating: 4.8,
    name: "Vitamin C + E SPF 50 Sunscreen",
    highlight: "WATERLIGHT TEXTURE",
    price: 495.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/watermelonsun_large.jpg?v=1682746380",
    rating: 4.8,
    name: "Watermelon Cooling SPF 50 Face Sunscreen",
    highlight: "GIVES INSTANT COOLING",
    price: 495.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/barrierfc_large.jpg?v=1682746724",
    rating: 4.8,
    name: "Barrier Repair Face Cream with Ceramides",
    highlight: "REPAIRS SKIN BARRIER",
    price: 395.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/RETINOLSERUMN_large.jpg?v=1682746909",
    rating: 4.9,
    name: "Pomegranate & 0.9% Retinol Serum with Collagen",
    highlight: "COLLAGEN BOOSTING",
    price: 595.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/serumcicanew_large.jpg?v=1682746934",
    rating: 4.8,
    name: "Cica & 10% Niacinamide Serum",
    highlight: "FADES DARK SPOTS",
    price: 599.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/pomemoist_large.jpg?v=1682746617",
    rating: 4.7,
    name: "Pomegranate + Multi-Peptide Anti Ageing Moisturizer SPF 30",
    highlight: "AGE-DEFYING MOISTURIZER",
    price: 565.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/lipmask_large.jpg?v=1682746973",
    rating: 4.7,
    name: "Lip Plumping Mask with Vitamin C + E",
    highlight: "3 SHADES AVAILABLE",
    price: 295.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/vitcsunscreen_large.jpg?v=1682746364",
    rating: 4.7,
    name: "Vitamin C + E SPF 50 Sunscreen",
    highlight: "WATERLIGHT TEXTURE",
    price: 495.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/watermelonsun_large.jpg?v=16827463804",
    rating: 4.7,
    name: "Watermelon Cooling SPF 50 Face Sunscreen",
    highlight: "GIVES INSTANT COOLING",
    price: 395.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/barrierfc_large.jpg?v=1682746724",
    rating: 4.8,
    name: "Barrier Repair Face Cream with Ceramides",
    highlight: "REPAIRS SKIN BARRIER",
    price: 395.0,
  },
];
const bestsellers = [
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/VITaminCMOIST.jpg?v=1682746715",
    rating: 4.8,
    name: "Vitamin C + E Moisturizer",
    highlight: "MAKES SKIN GLOW",
    price: 565.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/products/1-finall-1_1.webp?v=1682596648",
    rating: 4.6,
    name: "Lip Balm Duo | Make Your Own | SPF 30",
    highlight: "PACK OF 2",
    price: 374.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/cactusSERUM.jpg?v=1682746999",
    rating: 4.8,
    name: "Cica + 2% Salicylic Serum",
    highlight: "REDUCES ACTIVE ACNE",
    price: 550.0,
  },
  {
    image:
      "https://www.dotandkey.com/cdn/shop/files/strawberry.jpg?v=1682746462",
    rating: 4.8,
    name: "SPF 30 Strawberry Red Lip Balm",
    highlight: "HIGH TINTED",
    price: 249.0,
  },
];
function Home() {
  return (
    <div className={styles.container}>
      {/********Top banner carousel*********/}
      <CarouselBanner images={images} />

      {/********Product carousel*********/}
      <div className={styles.heading}>
        <span>SHOP OUR</span>
        <h2>NEW ARRIVALS</h2>
      </div>
      <ProductCarousel images={cards} />

      {/********Our bestsellers*********/}
      <div className={styles.heading}>
        <span>OUR</span>
        <h2>BESTSELLERS</h2>
        <p>FACE CREAMS | SUNSCREEN | FACE SERUMS | LIP CARE</p>
      </div>
      <div className={styles.bestsellers}>
        {bestsellers.map((item) => (
          <Carousel_Product_Card product={item} />
        ))}
      </div>
    </div>
  );
}

export { Home };
