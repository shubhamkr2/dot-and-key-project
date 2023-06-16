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
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isFormValidated, setIsFormValidated] = useState(false);
  const dispatch = useDispatch();
  const { isRegistered, loading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  useEffect(() => {
    // Check if all fields are valid
    const isFormValid =
      formData.name.length >= 4 &&
      emailRegex.test(formData.email) &&
      formData.password.length >= 8 &&
      passwordStrength === 5 &&
      formData.question.length > 0 &&
      formData.answer.length > 0;

    setIsFormValidated(isFormValid);
  }, [formData, emailRegex, passwordStrength]);

  function checkPasswordStrength(password) {
    let strength = 0;
    const length = password.length;

    // Check for length
    if (length >= 8) {
      strength += 1;
      setPasswordStrength(strength);
    }

    // Check for numbers
    if (/\d/.test(password)) {
      strength += 1;
      setPasswordStrength(strength);
    }

    // Check for lowercase
    if (/[a-z]/.test(password)) {
      strength += 1;
      setPasswordStrength(strength);
    }

    // Check for uppercase
    if (/[A-Z]/.test(password)) {
      strength += 1;
      setPasswordStrength(strength);
    }

    // Check for special characters
    if (/[\W_]/.test(password)) {
      strength += 1;
      setPasswordStrength(strength);
    }

    return strength;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    checkPasswordStrength(formData.password);
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
    setIsFormValidated(false);
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
            {/* Input for Name */}
            <label className={styles.required}>NAME</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              required
            />
            {/* Error message for name length */}
            {formData.name.length > 0 && formData.name.length < 4 && (
              <div className={styles.error}>at least 4 characters</div>
            )}
          </div>
          <div>
            {/* Input for Email */}
            <label className={styles.required}>EMAIL</label>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              required
            />
            {/* Error message for invalid email */}
            {!emailRegex.test(formData.email) && formData.email.length > 0 && (
              <div className={styles.error}>Invalid email</div>
            )}
          </div>
          <div>
            {/* Input for Password */}
            <label className={styles.required}>PASSWORD</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              required
            />
            {/* Password strength indicator */}
            {formData.password.length > 0 && passwordStrength < 5 ? (
              <div className={styles.error}>
                {passwordStrength < 3 ? (
                  "Weak"
                ) : (
                  <div className={styles.error_medium}>Medium</div>
                )}
              </div>
            ) : (
              <div className={styles.error_strong}>
                {formData.password.length > 0 ? "Strong" : ""}
              </div>
            )}
          </div>
          <div>
            {/* Select for Secret Question */}
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
            {/* Input for Secret Question Answer */}
            <input
              type="text"
              placeholder="Your answer"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit button */}
          <button disabled={!isFormValidated || loading}>
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
