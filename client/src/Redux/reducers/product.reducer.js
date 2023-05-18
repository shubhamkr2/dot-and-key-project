import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  SINGLE_PRODUCTS_REQUEST,
  SINGLE_PRODUCTS_SUCCESS,
  SINGLE_PRODUCTS_FAIL,
} from "../actionTypes/product.actionTypes.js";
let initialState = {
  loading: true,
  data: [],
  single_product_data: [],
};
function productReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_PRODUCTS_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SINGLE_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        single_product_data: action.payload,
      };
    case SINGLE_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export { productReducer };
