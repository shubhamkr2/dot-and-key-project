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
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {};
    case USER_LOGIN_SUCCESS:
      return {};
    case USER_LOGIN_FAILURE:
      return {};
    case USER_REGISTER_REQUEST:
      return {};
    case USER_REGISTER_SUCCESS:
      return {};
    case USER_REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

export { userReducer };
