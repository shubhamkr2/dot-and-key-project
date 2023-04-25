import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../actionTypes/resetPassword.actionTypes";

let initialState = {
  loading: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.payload.token,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
      };

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
