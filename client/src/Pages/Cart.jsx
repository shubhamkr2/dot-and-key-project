import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/actions/cart.action";
import { CartCard } from "../Components/CartCard";
import styles from "../Styles/Cart.module.css";

const Cart = () => {
  const token = localStorage.getItem("token");
  const { cartItems, loading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems(token));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const totalPrice = cartItems?.data?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems?.data?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className={styles.main_container}>
      <h1>Cart</h1>
      <div className={styles.cards_and_price}>
        <div className={styles.cards}>
          {cartItems?.data?.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </div>
        <div className={styles.price}>
          <div className={styles.total_qty}>
            <h2>Total {totalQuantity} Items</h2>
          </div>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Total price:</span>
            <span className={styles.priceValue}>{totalPrice}</span>
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
            <span className={styles.totalValue}>{totalPrice + 50 - 100}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cart };
