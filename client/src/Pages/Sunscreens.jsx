import React from "react";
import styles from "../Styles/Sunscreens.module.css";
import { NavigationBar } from "../Components/NavigationBar";
function Sunscreens() {
  return (
    <div className={styles.sunscreens_container}> 
      <NavigationBar />
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/collections/CATE-DESK_1_1512x.jpg?v=1682595235"
        alt="sunscreens"
      />
    </div>
  );
}

export { Sunscreens };
