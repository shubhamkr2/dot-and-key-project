import React from "react";
import styles from "../Styles/CartCard.module.css";

function CartCard({item, setQuantity}) {
    let {image, title, category, price, quantity, _id } = item || {};
    
  return (
    <div className={styles.container}>
      <img
        src={image[0]}
        alt="product image"
      />
      <div className={styles.description}>
        <h2>{title}</h2>
        {/* <h3>GIVES INSTANT COOLING</h3> */}
        <h3>Category: {category}</h3>
        <h2>Rs: {price}</h2>
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
