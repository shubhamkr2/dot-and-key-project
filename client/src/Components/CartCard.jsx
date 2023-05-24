import React from "react";
import styles from "../Styles/CartCard.module.css";

function CartCard({quantity, setQuantity}) {
    
  return (
    <div className={styles.container}>
      <img
        src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-1.webp?v=1683526609"
        alt="product image"
      />
      <div className={styles.description}>
        <h2>Watermelon Cooling SPF 50 Face Sunscreen</h2>
        <h3>GIVES INSTANT COOLING</h3>
        <h3>Category: Sunscreens</h3>
        <h2>Rs: 458</h2>
      </div>
      <div>
        <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
          <option value="1" >1</option>
          <option value="2" >2</option>
          <option value="3" >3</option>
          <option value="4" >4</option>
          <option value="5" >5</option>
        </select>
      </div>
    </div>
  );
}

export { CartCard };
