import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGOUT,
} from "../actionTypes/user.actionTypes";
import { toast } from "react-hot-toast";

// Function for user login
function userLogin(userDetails, navigate) {
  return async function (dispatch) {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userDetails),
        }
      );
      let data = await res.json();
      if (data.token) {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        toast.success("User logged in successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        dispatch({ type: USER_LOGIN_FAILURE });
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: USER_LOGIN_FAILURE });
    }
  };
}

// Function for user registration
function userRegister(userDetails, navigate) {
  return async function (dispatch) {
    dispatch({ type: USER_REGISTER_REQUEST });
    // console.log(userDetails);
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
      if (data.message === "User Registered successfully") {
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data.message });
        toast.success(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        dispatch({ type: USER_REGISTER_FAILURE });
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: USER_REGISTER_FAILURE });
    }
  };
}

// Function for user logout
function userLogOut() {
  return async function (dispatch) {
    dispatch({ type: USER_LOGOUT });
  };
}

export { userLogin, userRegister, userLogOut };
