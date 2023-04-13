import {
  CART_REQUEST,
  CART_SUCCESS,
  CART_FAILURE,
  GET_PRODUCTS_DATA,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_ERROR,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART,
} from "../actionTypes/cart.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cartData: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_REQUEST:
      return {};
    case CART_SUCCESS:
      return {};
    case CART_FAILURE:
      return {};
    case GET_PRODUCTS_DATA:
      return {};
    case GET_PRODUCTS_LOADING:
      return {};
    case GET_PRODUCTS_ERROR:
      return {};
    case UPDATE_QUANTITY:
      return {};
    case REMOVE_FROM_CART:
      return {};
    default:
      return state;
  }
}

export { cartReducer };
