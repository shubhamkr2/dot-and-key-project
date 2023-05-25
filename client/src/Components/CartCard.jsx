import React from "react";
import styles from "../Styles/CartCard.module.css";

function CartCard({ item, setQuantity }) {
  let { image, title, category, price, quantity, _id } = item || {};

  return (
    <div className={styles.container}>
      <div className={styles.image_and_description}>
        <img src={image[0]} alt="product image" />
        <div className={styles.description}>
          <h2>{title}</h2>
          {/* <h3>GIVES INSTANT COOLING</h3> */}
          <h3>Category: {category}</h3>
          <h2>Rs: {price}</h2>
          <button className={styles.remove_btn}>Remove</button>
        </div>
      </div>
      <div className={styles.qty}>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          <option value="1">Qty 1</option>
          <option value="2">Qty 2</option>
          <option value="3">Qty 3</option>
          <option value="4">Qty 4</option>
          <option value="5">Qty 5</option>
        </select>
      </div>
    </div>
  );
}

export { CartCard };
