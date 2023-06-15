import React from "react";
import styles from "../Styles/Account.module.css";

function Account() {
  const name = localStorage.getItem("user_name") || "";

  return (
    <div className={styles.container}>
      <h1 className={styles.category}>My account</h1>
      <div>
        <h2>Name: {name}</h2>
      </div>
    </div>
  );
}

export { Account };
