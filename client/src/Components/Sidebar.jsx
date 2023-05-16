import React from "react";
import styles from "../Styles/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Sort By</h3>
      <select className={styles.sort_options}>
        <option value="relevance">Relevance</option>
        <option value="popularity">Popularity</option>
        <option value="date">Date</option>
      </select>

      <h3>Filter By</h3>
      <select className={styles.filter_options}>
        <option value="all">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
    </div>
  );
}

export default Sidebar;
