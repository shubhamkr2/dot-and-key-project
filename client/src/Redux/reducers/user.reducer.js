import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "../actionTypes/user.actionTypes";

let initialState = {
  isAuth: false,
  token: "",
  isRegistered: false,
  loading: false,
  message: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.payload.token,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isRegistered: false,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isRegistered: true,
        message: action.payload,
      };
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        loading: false,
        message: "Something went wrong",
      };
    default:
      return state;
  }
}

export { userReducer };
