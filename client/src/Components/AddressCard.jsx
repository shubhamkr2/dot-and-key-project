import React from "react";
import styles from "../Styles/AddreessCard.module.css";
function AddressCard({ address }) {
  const { area, city, flat, landmark, name, number, pincode, state } = address;
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
        <state>State: {state}</state>
      </div>
    </div>
  );
}

export { AddressCard };
