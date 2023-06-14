import React from "react";
import styles from "../Styles/CartCard.module.css";
import { useDispatch } from "react-redux";
import {
  updateCartItemQuantity,
  removeFromCart,
  getCartItems,
} from "../Redux/actions/cart.action";

function CartCard({ item, toast }) {
  const { _id, images, title, category, price, quantity } = item;
  const token = localStorage.getItem("token") || "";
  const dispatch = useDispatch();

  const handleQuantityChange = async (e) => {
    const newQuantity = parseInt(e.target.value);
    try {
      await dispatch(updateCartItemQuantity(token, _id, newQuantity, toast));
      dispatch(getCartItems(token));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async () => {
    try {
      await dispatch(removeFromCart(token, _id, toast));
      dispatch(getCartItems(token));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.image_and_description}>
        <img src={images[0]} alt="product image" />
        <div className={styles.description}>
          <h2>{title}</h2>
          <h3>Category: {category}</h3>
          <h2>Rs: {price}</h2>
          <button className={styles.remove_btn} onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
      <div className={styles.qty}>
        <select value={quantity} onChange={handleQuantityChange}>
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
