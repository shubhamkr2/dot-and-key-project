import React from "react";
import styles from "../Styles/ResetPasswordModal.module.css";
import { FaRegWindowClose } from "react-icons/fa";
function ResetPasswordModal({ handleModal }) {
  return (
    <div className={styles.container} onClick={() => handleModal()}>
      <div className={styles.form_container}>
        <div className={styles.close_btn}>
          <FaRegWindowClose
            className={styles.close_icon}
            onClick={() => handleModal()}
          />
        </div>
        <form>
          <h2>Registered Mail-id</h2>
          <div>
            <label>Email-id</label>
            <input type="text" placeholder="Your registered email-id" />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { ResetPasswordModal };
