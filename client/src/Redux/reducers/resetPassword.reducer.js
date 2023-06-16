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
    // Confirm secret question request action
    case CONFIRM_SECRET_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // Confirm secret question success action
    case CONFIRM_SECRET_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        secret_question_confirmed: true,
        email_confirmed: false,
        token: action.payload.token,
      };
    // Confirm secret question failure action
    case CONFIRM_SECRET_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        secret_question_confirmed: false,
        token: "",
      };
    // Confirm email request action
    case CONFIRM_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // Confirm email success action
    case CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        email_confirmed: true,
        userId: action.payload.userId,
      };
    // Confirm email failure action
    case CONFIRM_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        email_confirmed: false,
      };
    // Reset password request action
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // Reset password success action
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        email_confirmed: false,
        secret_question_confirmed: false,
        token: "",
      };
    // Reset password failure action
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        email_confirmed: false,
        secret_question_confirmed: false,
      };
    // Reset modal data action
    case RESET_MODAL_DATA:
      return {
        ...initialState,
      };
    // Default case
    default:
      return state;
  }
}

export { resetPassword };
