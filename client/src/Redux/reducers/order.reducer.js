import * as actionTypes from "../actionTypes/order.actionTypes";

// Initial state of the order
const initialState = {
  orders: [],
  loading: false,
  error: null,
};

// Order reducer function
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    // Request actions
    case actionTypes.ADD_ORDER_REQUEST:
    case actionTypes.GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // Success actions
    case actionTypes.ADD_ORDER_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.GET_ORDER_SUCCESS:
      return {
        ...state,
        orders: [...action.payload.data],
        loading: false,
        error: null,
      };

    // Failure actions
    case actionTypes.ADD_ORDER_FAILURE:
    case actionTypes.GET_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Default case
    default:
      return state;
  }
};

export { orderReducer };
