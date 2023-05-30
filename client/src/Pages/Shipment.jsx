import React from "react";
import styles from "../Styles/Shipment.module.css";

function Shipment() {
  return (
    <div className={styles.shipment_container}>
      <div></div>
      <div className={styles.form_container}>
        <form>
          <div>
            <label>Full Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Mobile Number</label>
            <input type="text" />
          </div>
          <div>
            <label>Flat, House no., Building, Company, Apartment</label>
            <input type="text" />
          </div>
          <div>
            <label>Area, Street, Sector, Village</label>
            <input type="text" />
          </div>
          <div>
            <label>Landmark</label>
            <input type="text" />
          </div>
          <div>
            <label>Pincode</label>
            <input type="number" />
          </div>
          <div>
            <label>Town/City</label>
            <input type="text" />
          </div>
          <div>
            <label>State</label>
            <select>
              <option>Choose a state</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <button>Add address</button>
        </form>
      </div>
    </div>
  );
}

export { Shipment };
