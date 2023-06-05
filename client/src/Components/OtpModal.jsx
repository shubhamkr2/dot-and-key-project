import React, { useState } from "react";
import styles from "../Styles/OtpModal.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

function OtpModal({ handleModal }) {
  const { loading, email_confirmed, userId, secret_question_confirmed, token } =
    useSelector((store) => store.reset);
  const dispatch = useDispatch();

  function handleEmailSubmit(e) {
    e.preventDefault();
  }

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
        {/* {!email_confirmed && !secret_question_confirmed && ( */}
        <form onSubmit={(e) => handleEmailSubmit(e)}>
          <h2>OTP</h2>
          <div className={styles.otp_container}>
            <div>
              <input type="text" required />
              <input type="text" required />
              <input type="text" required />
              <input type="text" required />
            </div>
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
        {/* )} */}
      </div>
    </div>
  );
}

export { OtpModal };
