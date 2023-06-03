import React from "react";
import styles from "../Styles/AddressCard.module.css";

function AddressCard({ Address }) {
  const { area, city, flat, landmark, name, number, pincode, state } = Address;
  return (
    <div className={styles.address_card}>
      <input type="radio" />
      <span>
        <strong>{name}</strong> {flat}, {area}, {landmark}, {pincode}, {city},{" "}
        {state}, Phone number: {number}.{" "}
        <strong className={styles.remove}> Remove</strong>
      </span>
    </div>
  );
}

export { AddressCard };
