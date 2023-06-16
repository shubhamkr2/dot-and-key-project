import {
  CONFIRM_SECRET_QUESTION_REQUEST,
  CONFIRM_SECRET_QUESTION_SUCCESS,
  CONFIRM_SECRET_QUESTION_FAILURE,
  CONFIRM_EMAIL_REQUEST,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_MODAL_DATA,
} from "../actionTypes/resetPassword.actionTypes";

// Confirm email
function confirmEmail(email, toast) {
  return async function (dispatch) {
    dispatch({ type: CONFIRM_EMAIL_REQUEST });
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/users/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      let data = await res.json();
      if (data.userId) {
        dispatch({ type: CONFIRM_EMAIL_SUCCESS, payload: data });
        toast.success("User verified successfully");
        setTimeout(() => {
          // navigate("/");
        }, 2000);
      } else {
        dispatch({ type: CONFIRM_EMAIL_FAILURE });
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: CONFIRM_EMAIL_FAILURE });
    }
  };
}

// Confirm secret question
function confirmQuestion(secret_question, userId, toast) {
  return async function (dispatch) {
    dispatch({ type: CONFIRM_SECRET_QUESTION_REQUEST });
    console.log(secret_question, userId);
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/users/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ secret_question }),
        }
      );
      let data = await res.json();
      if (data.token) {
        dispatch({ type: CONFIRM_SECRET_QUESTION_SUCCESS, payload: data });
        toast.success("Question verified successfully");
        setTimeout(() => {
          // navigate("/");
        }, 2000);
      } else {
        dispatch({ type: CONFIRM_SECRET_QUESTION_FAILURE });
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: CONFIRM_SECRET_QUESTION_FAILURE });
    }
  };
}

// Reset password
function resetPassword(newPassword, userId, token, toast, handleModal) {
  return async function (dispatch) {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/users/reset/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ newPassword }),
        }
      );
      let data = await res.json();
      if (data.message === "Password updated successfully") {
        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data });
        toast.success(data.message);
        setTimeout(() => {
          handleModal();
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: RESET_PASSWORD_FAILURE });
    }
  };
}

// Reset modal data
function resetModal() {
  return {
    type: RESET_MODAL_DATA,
  };
}

export { confirmEmail, confirmQuestion, resetPassword, resetModal };
