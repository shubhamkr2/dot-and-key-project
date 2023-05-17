import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import styles from "../Styles/ProductCard.module.css";
let data = {
  _id: "645e1551062c3fbde39b9667",
  category: "sunscreens",
  title: "Vitamin C + E SPF 50 Sunscreen",
  description: [
    "2-in-1 glow + protect SPF 50 sunscreen for even-toned, glowing & protected skin every day.",
    "Activates Vitamin D receptors, making it beneficial to be in the sun.",
    "Infused with Triple Vitamin C & Sicilian Blood Orange to fight dullness & pigmentation while boosting collagen.",
    "Powered by UV filters to protect skin against damaging UVA, UVB & blue light rays.",
    "Water-light texture that provides full absorbency for an invisible finish on all skin tones with zero white cast.",
  ],
  price: 470,
  images: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-3.webp?v=1683526593",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/7.webp?v=1683526593",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-1.webp?v=1683526593",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/certif.jpg?v=1683526592",
  ],
  rating: 4.2,
  highlights: "WATERLIGHT TEXTURE",
  stock: true,
  __v: 0,
};
function ProductCard({ product }) {
  // console.log(product);
  return (
    <div className={styles.container}>
      <img src={product.images[0]} />
      <div className={styles.rating}>
        <IconContext.Provider value={{ color: "rgb(235, 182, 10)" }}>
          <AiFillStar />
        </IconContext.Provider>
        <span>{product.rating}/5</span>
      </div>
      <h4>{product.title}</h4>
      <h5 className={styles.highlights}>{product.highlights}</h5>
      <h4 className={styles.price}>Rs: {product.price}</h4>
      <button>ADD TO CART</button>
    </div>
  );
}

export default ProductCard;
