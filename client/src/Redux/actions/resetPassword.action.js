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
} from "../actionTypes/resetPassword.actionTypes";

function confirmEmail(email, toast) {
  return async function (dispatch) {
    dispatch({ type: CONFIRM_EMAIL_REQUEST });
    console.log(email);
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/users/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email}),
        }
      );
      let data = await res.json();
      console.log(data);
      dispatch({ type: CONFIRM_EMAIL_SUCCESS, payload: data });
      if (data.userId) {
        toast.success("User verified successfully");
        setTimeout(() => {
          // navigate("/");
        }, 2000);
      } else {
        toast.error(data.message);;
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: CONFIRM_EMAIL_FAILURE });
    }
  };
}

export { confirmEmail };
