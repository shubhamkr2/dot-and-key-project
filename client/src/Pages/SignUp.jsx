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
            <label>NAME</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>EMAIL</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div>
            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div>
            {/* <label>Select a Security question</label> */}
            <select>
              <option value="">Secret Question</option>
              <option value="">What is the first name of your favourite teacher?</option>
              <option value="">Who is your favourite person in history?</option>
              <option value="">What was your first job?</option>
              <option value="">What was your first phone number?</option>
              <option value="">Who is your favourite character?</option>
            </select>
            <input type="text" placeholder="Your answer" />
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
