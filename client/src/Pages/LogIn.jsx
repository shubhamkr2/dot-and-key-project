import React from "react";
import styles from "../Styles/LogIn.module.css";
import { Link } from "react-router-dom";

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
            <span className={styles.forgot_password}><Link>Forgot Password?</Link></span>
          </div>
          <button>Log in</button>
        </form>
      </div>
      <span>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </span>
    </div>
  );
}

export { LogIn };
