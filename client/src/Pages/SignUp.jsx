import React, { useState } from "react";
import styles from "../Styles/SignUp.module.css";
import { Link } from "react-router-dom";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  question: "",
  answer: "",
};

function SignUp() {
  const [formData, setFormData] = useState(initialFormData);

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
      <h2>Create Account</h2>
      <div className={styles.form_container}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className={styles.required}>NAME</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label className={styles.required}>EMAIL</label>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label className={styles.required}>PASSWORD</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <select
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            >
              <option value="">Select a Secret Question</option>
              <option value="What is the first name of your favourite teacher?">
                What is the first name of your favourite teacher?
              </option>
              <option value="Who is your favourite person in history?">
                Who is your favourite person in history?
              </option>
              <option value="What was your first job?">
                What was your first job?
              </option>
              <option value="What was your first phone number?">
                What was your first phone number?
              </option>
              <option value="Who is your favourite character?">
                Who is your favourite character?
              </option>
            </select>
            <input
              type="text"
              placeholder="Your answer"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
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
