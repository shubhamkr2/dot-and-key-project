import React from "react";
import styles from "../Styles/Sidebar.module.css";

function Sidebar({setSortAs}) {
  return (
    <div className={styles.sidebar}>
      <h3>Sort By</h3>
      <select className={styles.sort_options} onChange={(e)=>setSortAs(e.target.value)}>
        <option value="">Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <h3>Filter By</h3>
      <select className={styles.filter_options}>
        <option value="">All Ratings</option>
        <option value="5">Minimum 5 Stars</option>
        <option value="4">Minimum 4 Stars</option>
        <option value="3">Minimum 3 Stars</option>
        <option value="2">Minimum 2 Stars</option>
        <option value="1">Minimum 1 Star</option>
      </select>
    </div>
  );
}

export default Sidebar;
