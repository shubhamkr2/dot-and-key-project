import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "../actionTypes/user.actionTypes";

function userLogin() {}

function userRegister(userDetails) {
  return async function (dispatch) {
    dispatch({ type: USER_REGISTER_REQUEST });
    console.log(userDetails);
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userDetails),
        }
      );
      let data = await res.json();
      // if (data.message === "User Registered successfully") {
        console.log(data.message);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: true });
      // }else{
      // }
    } catch (err) {
      console.log(err);
      dispatch({ type: USER_REGISTER_FAILURE });
    }
  };
}

export { userLogin, userRegister };
