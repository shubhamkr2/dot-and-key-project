import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/actions/cart.action";
import { CartCard } from "../Components/CartCard";
import styles from "../Styles/Cart.module.css";

const Cart = () => {
  const token = localStorage.getItem("token");
  const { cartItems, loading } = useSelector((state) => state.cart);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
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
  function handlePromo() {
    if (promoCode === "GET30") {
      setDiscount(() => totalPrice * (30 / 100));
    } else if (promoCode === "GET50") {
      setDiscount(() => totalPrice * (50 / 100));
    } else {
      setDiscount(0);
    }
  }
  return (
    <div className={styles.main_container}>
      <h1>Cart</h1>
      <div className={styles.cards_and_price}>
        <div className={styles.cards}>
          <div className={styles.row_heading}>
            <h2>Items</h2>
            <h2>Quantity</h2>
          </div>
          {cartItems?.data?.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </div>
        <div className={styles.price}>
          <div className={styles.total_qty}>
            <h2>Total {totalQuantity} items</h2>
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
            <span className={styles.priceValue}>{discount}</span>
          </div>
          <div className={styles.totalItem}>
            <span className={styles.totalLabel}>Subtotal:</span>
            <span className={styles.totalValue}>
              {totalPrice + 50 - discount}
            </span>
          </div>
          <div className={styles.promo_code}>
            <input
              type="text"
              placeholder="Apply Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromo}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cart };
