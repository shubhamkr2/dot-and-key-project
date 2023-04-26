import React, { useState } from "react";
import styles from "../Styles/ResetPasswordModal.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import { confirmEmail } from "../Redux/actions/resetPassword.action";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

function ResetPasswordModal({ handleModal }) {
  const [formEmail, setFormEmail] = useState("");
  const { loading, email_confirmed } = useSelector((store) => store.reset);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(confirmEmail(formEmail, navigate, toast));
    dispatch(confirmEmail(formEmail, toast));
  }
  console.log(loading, email_confirmed);
  return (
    <div className={styles.container}>
      <div>
        <Toaster />
      </div>
      <div className={styles.form_container}>
        <div className={styles.close_btn}>
          <FaRegWindowClose
            className={styles.close_icon}
            onClick={() => handleModal()}
          />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Registered Mail-id</h2>
          <div>
            <label className={styles.required}>Email-id</label>
            <input
              type="text"
              placeholder="Your registered email-id"
              required
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <button disabled={loading ? true : false}>
              {" "}
              {loading ? (
                <BeatLoader color="#FFFFFF" cssOverride={{ margin: "auto" }} />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { ResetPasswordModal };
