import {
  CART_REQUEST,
  CART_SUCCESS,
  CART_FAILURE,
  GET_CART_PRODUCTS_DATA,
  GET_CART_PRODUCTS_LOADING,
  GET_CART_PRODUCTS_ERROR,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART,
} from "../actionTypes/cart.actionTypes";

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cartItems: [...state.cartItems, action.payload],
      };
    case CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CART_PRODUCTS_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        cartItems: action.payload,
      };
    case GET_CART_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CART_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        cartItems: [],
      };
    case UPDATE_QUANTITY:
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.productId === action.payload.productId) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case REMOVE_FROM_CART:
      const filteredCartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload.productId
      );
      return {
        ...state,
        cartItems: filteredCartItems,
      };
    default:
      return state;
  }
}

export { cartReducer };
