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

let initialState = {
  loading: false,
  email_confirmed: false,
  userId: "",
  secret_question_confirmed: false,
  token: "",
};

function resetPassword(state = initialState, action) {
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
        secret_question_confirmed: true,
        email_confirmed: false,
        token: action.payload.token,
      };
    case CONFIRM_SECRET_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        secret_question_confirmed: false,
        token: "",
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
        email_confirmed: true,
        userId: action.payload.userId,
      };
    case CONFIRM_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        email_confirmed: false,
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
        email_confirmed: false,
        secret_question_confirmed: false,
        token: "",
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        email_confirmed: false,
        secret_question_confirmed: false,
      };
    case RESET_MODAL_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export { resetPassword };
