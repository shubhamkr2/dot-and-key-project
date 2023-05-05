import React, { useState } from "react";
import styles from "../Styles/LogIn.module.css";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/actions/user.action";
import toast, { Toaster } from "react-hot-toast";
import { ResetPasswordModal } from "../Components/ResetPasswordModal";
import { resetModal } from "../Redux/actions/resetPassword.action";

const initialFormData = {
  email: "",
  password: "",
};

function LogIn() {
  const [formData, setFormData] = useState(initialFormData);
  const { loading } = useSelector((store) => store.user);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userLogin(formData, navigate, toast));
  }

  function handleModal() {
    setModal(!modal);
    dispatch(resetModal());
  }
  return (
    <>
      <div className={styles.container}>
        <div>
          <Toaster />
        </div>
        <h2>Log In</h2>
        <div className={styles.form_container}>
          <form onSubmit={(e) => handleSubmit(e)}>
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
              <span
                className={styles.forgot_password}
                onClick={() => handleModal()}
              >
                <Link>Forgot Password?</Link>
              </span>
            </div>
            <button disabled={loading ? true : false}>
              {" "}
              {loading ? (
                <BeatLoader color="#FFFFFF" cssOverride={{ margin: "auto" }} />
              ) : (
                "Log in"
              )}
            </button>
          </form>
        </div>
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </div>
      <div>

      {modal ? <ResetPasswordModal handleModal={handleModal} /> : ""}
      </div>
    </>
  );
}

export { LogIn };
