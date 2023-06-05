import * as actionTypes from "../actionTypes/order.actionTypes";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_REQUEST:
    case actionTypes.GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
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
        orders: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.ADD_ORDER_FAILURE:
    case actionTypes.GET_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { orderReducer };
