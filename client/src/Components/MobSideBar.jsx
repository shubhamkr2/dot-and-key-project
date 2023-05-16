import React from "react";
import styles from "../Styles/MobSideBar.module.css";

function MobSideBar({setSortAs}) {
  return (
    <div className={styles.mob_sidebar}>
    
      <h3>Sort By</h3>
      <select
        className={styles.sort_options}
        onChange={(e) => setSortAs(e.target.value)}
      >
        <option value="">Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <h3>Filter By</h3>
      <select className={styles.filter_options}>
        <option value="all">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Star</option>
      </select>
    </div>
  );
}

export { MobSideBar };
