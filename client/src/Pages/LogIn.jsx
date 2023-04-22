import React from "react";
import styles from "../Styles/LogIn.module.css";

function LogIn() {
  return (
    <div className={styles.container}>
      <h2>Log In</h2>
      <div className={styles.form_container}>
        <form>
          <div>
            <label>EMAIL</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div>
            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
}

export { LogIn };
