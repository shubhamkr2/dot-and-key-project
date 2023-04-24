import React, { useState } from "react";
import styles from "../Styles/LogIn.module.css";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useSelector } from "react-redux";

const initialFormData = {
  email: "",
  password: "",
};

function LogIn() {
  const [formData, setFormData] = useState(initialFormData);
  const { loading } = useSelector((store) => store.user);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <h2>Log In</h2>
      <div className={styles.form_container}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className={styles.required}>EMAIL</label>
            <input type="text" placeholder="Enter your email" name="email" value={formData.email} onChange={(e) => handleChange(e)} required />
          </div>
          <div>
            <label className={styles.required}>PASSWORD</label>
            <input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={(e) => handleChange(e)} required />
            <span className={styles.forgot_password}><Link>Forgot Password?</Link></span>
          </div>
          <button disabled={loading ? true : false}> {loading ? (
              <BeatLoader color="#FFFFFF" cssOverride={{ margin: "auto" }} />
            ) : (
              "Log in"
            )}</button>
        </form>
      </div>
      <span>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </span>
    </div>
  );
}

export { LogIn };
