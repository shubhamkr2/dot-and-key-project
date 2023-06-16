import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  SINGLE_PRODUCTS_REQUEST,
  SINGLE_PRODUCTS_SUCCESS,
  SINGLE_PRODUCTS_FAIL,
} from "../actionTypes/product.actionTypes.js";

// Initial state of the product
let initialState = {
  loading: true,
  data: [],
  single_product_data: [],
};

// Product reducer function
function productReducer(state = initialState, action) {
  switch (action.type) {
    // All products request action
    case ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    // All products success action
    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    // All products fail action
    case ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
      };

    // Single product request action
    case SINGLE_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    // Single product success action
    case SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        single_product_data: action.payload,
      };

    // Single product fail action
    case SINGLE_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
      };

    // Default case
    default:
      return state;
  }
}

export { productReducer };
