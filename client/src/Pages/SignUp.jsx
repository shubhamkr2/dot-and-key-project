import React, { useEffect, useState } from "react";
import styles from "../Styles/SignUp.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Redux/actions/user.action";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import toast, { Toaster } from "react-hot-toast";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  question: "",
  answer: "",
};

function SignUp() {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const { isRegistered, loading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let userDetails = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      secret_question: {
        question: formData.question,
        answer: formData.answer,
      },
    };
    dispatch(userRegister(userDetails, navigate, toast));
  }

  return (
    <div className={styles.container}>
      <div>
        <Toaster />
      </div>
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
            {formData.name.length > 0 && formData.name.length < 4 ? (
              <div className={styles.error}>at least 4 characters</div>
            ) : (
              ""
            )}
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
            {!emailRegex.test(formData.email) && formData.email.length > 0 ? (
              <div className={styles.error}>Invalid email</div>
            ) : (
              ""
            )}
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
          <button disabled={loading ? true : false}>
            {loading ? (
              <BeatLoader color="#FFFFFF" cssOverride={{ margin: "auto" }} />
            ) : (
              "Create"
            )}
          </button>
        </form>
      </div>
      <span>
        Have an account? <Link to="/login">Log In</Link>
      </span>
    </div>
  );
}

export { SignUp };
