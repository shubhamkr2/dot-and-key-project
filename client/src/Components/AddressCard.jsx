import React from "react";
import styles from "../Styles/AddressCard.module.css";

function AddressCard({
  Address,
  handleRemove,
  selectedOption,
  handleOptionChange,
  index,
}) {
  const { area, city, flat, landmark, name, number, pincode, state, _id } =
    Address;
  return (
    <div className={styles.address_card}>
      <input
        type="radio"
        checked={selectedOption === index}
        onChange={() => handleOptionChange(index,_id)}
      />
      <span>
        <strong>{name}</strong> {flat}, {area}, {landmark}, {pincode}, {city},{" "}
        {state}, Phone number: {number}.{" "}
        <strong className={styles.edit}>Edit |</strong>
        <strong className={styles.remove} onClick={() => handleRemove(_id)}>
          {" "}
          Remove
        </strong>
      </span>
    </div>
  );
}

export { AddressCard };
