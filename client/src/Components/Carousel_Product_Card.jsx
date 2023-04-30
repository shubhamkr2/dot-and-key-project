import React from "react";
import styles from "../Styles/Carousel_Product_Card.module.css";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";

function Carousel_Product_Card({product}) {
  return (
    <div className={styles.container}>
      <img src="https://www.dotandkey.com/cdn/shop/files/vitcsunscreen_large.jpg?v=1682746364" />
      <div className={styles.rating}>
        <IconContext.Provider value={{ color: "rgb(235, 182, 10)" }}>
          <AiFillStar />
        </IconContext.Provider>

        <span>{product.rating}/5 (278)</span>
      </div>
      <h4>{product.name}</h4>
      <h5 className={styles.highlights}>{product.highlights}</h5>
      <h4 className={styles.price}>{product.price}</h4>
      <button>ADD TO CART</button>
    </div>
  );
}

export { Carousel_Product_Card };
