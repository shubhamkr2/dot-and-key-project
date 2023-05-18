import React from "react";
import styles from "../Styles/Pagination.module.css";

function Pagination({page, setPage, data}) {
  const totalPage=Math.ceil(data?.count / 6);
  return (
    <div className={styles.pagination}>
      <button disabled={page<2} className={styles.prev_btn} onClick={() => setPage(page - 1)}>Prev</button>
      <span>
        {page} Out Of {totalPage}
      </span>
      <button disabled={page===totalPage} className={styles.next_btn} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default Pagination;
