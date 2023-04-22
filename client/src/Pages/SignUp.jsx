import React from "react";
import styles from "../Styles/SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className={styles.container}>
      <h2>Create Account</h2>
      <div className={styles.form_container}>
        <form>
          <div>
            <label>FIRST NAME</label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div>
            <label>LAST NAME</label>
            <input type="text" placeholder="Enter your last name" />
          </div>
          <div>
            <label>EMAIL</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div>
            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button>Create</button>
        </form>
      </div>
      <span>
        Have an account? <Link to="/login">Log In</Link>
      </span>
    </div>
  );
}

export { SignUp };
