import React from "react";
import styles from "../Styles/Addreess.module.css";
function AddressCard({ address }) {
  const { area, city, flat, landmark, name, number, pincode, state } = address;
  return (
    <div className={styles.address_card}>
      <h2>Name: {name}</h2>
      <h3>Area: {area}</h3>
      <h3>Pincode- {pincode}</h3>
      <h3>Mob. No.- {number}</h3>
      <h3>City: {city}</h3>
      <h3>State: {state}</h3>
    </div>
  );
}

export { AddressCard };
