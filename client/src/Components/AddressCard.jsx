import React from "react";
import styles from "../Styles/AddressCard.module.css";
function AddressCard({ Address }) {
  const { area, city, flat, landmark, name, number, pincode, state } = Address;
  return (
    <div className={styles.address_card}>
      <h2>Name: {name}</h2>
      <p>Area: {area}</p>
      <div>
        <span>City: {city}</span>
        <span>Pincode: {pincode}</span>
      </div>
      <div>
        <span>Mobile: {number}</span>
        <span>State: {state}</span>
      </div>
    </div>
  );
}

export { AddressCard };
