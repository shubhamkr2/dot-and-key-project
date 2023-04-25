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

let initialState = {
  loading: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CONFIRM_SECRET_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONFIRM_SECRET_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CONFIRM_SECRET_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case CONFIRM_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CONFIRM_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export { userReducer };
