import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../Redux/actions/cart.action";
import { CartCard } from "../Components/CartCard";
import styles from "../Styles/Cart.module.css";

function Cart() {
  const token = localStorage.getItem("token") || [];
  const [quantity, setQuantity] = useState(3);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItem(token));
  }, []);
  console.log(cartItems);
  return (
    <div className={styles.main_container}>
      <h1>Cart</h1>
      <div className={styles.cards_and_price}>
        <div className={styles.cards}>
          {cartItems?.data?.map((item) => (
            <CartCard
              key={item._id}
              item={item}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          ))}
        </div>
        <div className={styles.price}>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Total price:</span>
            <span className={styles.priceValue}>1000</span>
          </div>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Shipping:</span>
            <span className={styles.priceValue}>50</span>
          </div>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Discount:</span>
            <span className={styles.priceValue}>100</span>
          </div>
          <div className={styles.totalItem}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalValue}>1150</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Cart };
