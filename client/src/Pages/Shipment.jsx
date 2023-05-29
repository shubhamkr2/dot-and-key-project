import React from "react";
import styles from "../Styles/Shipment.module.css";

function Shipment() {
  return (
    <div className={styles.shipment_container}>
      <div></div>
      <div>
        <form>
          <label>Full Name</label>
          <input type="text" />
          <label>Mobile Number</label>
          <input type="text" />
          <label>Flat, House no., Building, Company, Apartment</label>
          <input type="text" />
          <label>Area, Street, Sector, Village</label>
          <input type="text" />
          <label>Landmark</label>
          <input type="text" />
          <label>Pincode</label>
          <input type="number" />
          <label>Town/City</label>
          <input type="text" />
          <label>State</label>
          <select>
            <option>Choose a state</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button>Add address</button>
        </form>
      </div>
    </div>
  );
}

export { Shipment };
