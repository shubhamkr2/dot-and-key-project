import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  SINGLE_PRODUCTS_REQUEST,
  SINGLE_PRODUCTS_SUCCESS,
  SINGLE_PRODUCTS_FAIL,
} from "../actionTypes/product.actionTypes.js";

function productReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {};
    case ALL_PRODUCTS_SUCCESS:
      return {};
    case ALL_PRODUCTS_FAIL:
      return {};
    case SINGLE_PRODUCTS_REQUEST:
      return {};
    case SINGLE_PRODUCTS_SUCCESS:
      return {};
    case SINGLE_PRODUCTS_FAIL:
      return {};
    default:
      return state;
  }
}

export { productReducer };
