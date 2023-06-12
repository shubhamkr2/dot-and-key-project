import React, { useState } from "react";
import styles from "../Styles/OtpModal.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import BeatLoader from "react-spinners/BeatLoader";

function OtpModal({ handleModal, toast, finalSubmit }) {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");

  let loading = false;
  function handleSubmit(e) {
    e.preventDefault();
    if (digit1 == 1 && digit2 == 2 && digit3 == 3 && digit4 == 4) {
      // toast.success("OTP varified successfully");
      finalSubmit();
    } else {
      toast.error("Wrong OTP");
    }
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
        {/* {!email_confirmed && !secret_question_confirmed && ( */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>OTP</h2>
          <div className={styles.otp_container}>
            <div>
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => setDigit1(e.target.value)}
              />
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => setDigit2(e.target.value)}
              />
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => setDigit3(e.target.value)}
              />
              <input
                type="text"
                maxLength="1"
                required
                onChange={(e) => setDigit4(e.target.value)}
              />
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
