import React from "react";
import styles from "../Styles/Pagination.module.css";

function Pagination() {
  return (
    <div className={styles.pagination}>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <span>
        {page}/{Math.ceil(data?.count / 6)}
      </span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default Pagination;
