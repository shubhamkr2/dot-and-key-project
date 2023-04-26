import React, { useState } from "react";
import styles from "../Styles/ResetPasswordModal.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import {
  confirmEmail,
  confirmQuestion,
} from "../Redux/actions/resetPassword.action";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

function ResetPasswordModal({ handleModal }) {
  const [formEmail, setFormEmail] = useState("");
  const [formSecretQuestionAns, setFormSecretQuestionAns] = useState({
    question: "",
    answer: "",
  });
  const { loading, email_confirmed, userId, secret_question_confirmed, token } =
    useSelector((store) => store.reset);
  const dispatch = useDispatch();

  function handleSecretQuestion(e) {
    const { name, value } = e.target;
    setFormSecretQuestionAns({ ...formSecretQuestionAns, [name]: value });
  }

  function handleEmailSubmit(e) {
    e.preventDefault();
    // dispatch(confirmEmail(formEmail, navigate, toast));
    dispatch(confirmEmail(formEmail, toast));
  }

  function handleQuestionSubmit(e) {
    e.preventDefault();
    dispatch(confirmQuestion(formSecretQuestionAns, userId, toast));
  }
  console.log(loading, secret_question_confirmed, token);
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
        {!email_confirmed && (
          <form onSubmit={(e) => handleEmailSubmit(e)}>
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
                  <BeatLoader
                    color="#FFFFFF"
                    cssOverride={{ margin: "auto" }}
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        )}
        {email_confirmed && (
          <form onSubmit={(e) => handleQuestionSubmit(e)}>
            <h2>Select your secret question</h2>
            <div>
              <select
                name="question"
                value={formSecretQuestionAns.question}
                onChange={(e) => handleSecretQuestion(e)}
                className={styles.question}
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
                value={formSecretQuestionAns.answer}
                onChange={(e) => handleSecretQuestion(e)}
                required
              />
              <button disabled={loading ? true : false}>
                {" "}
                {loading ? (
                  <BeatLoader
                    color="#FFFFFF"
                    cssOverride={{ margin: "auto" }}
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        )}
        
      </div>
    </div>
  );
}

export { ResetPasswordModal };
