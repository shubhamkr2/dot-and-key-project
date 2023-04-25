import React, { useState } from "react";
import styles from "../Styles/ResetPasswordModal.module.css";
import { FaRegWindowClose } from "react-icons/fa";
function ResetPasswordModal({ handleModal }) {
  const [formEmail, setFormEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(userLogin(formData, navigate, toast));
  }
  return (
    <div className={styles.container}>
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
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { ResetPasswordModal };
