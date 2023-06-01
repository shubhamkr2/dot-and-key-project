import React from "react";
import styles from "../Styles/AddressCard.module.css";
function AddressCard({ Address }) {
  const { area, city, flat, landmark, name, number, pincode, state } = Address;
  return (
    <div className={styles.address_card}>
      <input type="radio" />
      <span>{name}</span>
      <span>{flat}, {area}, {landmark}, {pincode}, {city}, {state} </span>
    </div>
  );
}

export { AddressCard };
