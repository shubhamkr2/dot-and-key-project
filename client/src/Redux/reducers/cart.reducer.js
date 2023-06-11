import * as actionTypes from "../actionTypes/cart.actionTypes";

const initialState = {
  cartItems: [],
  isLoading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_REQUEST:
    case actionTypes.GET_CART_ITEMS_REQUEST:
    case actionTypes.UPDATE_CART_ITEM_QUANTITY_REQUEST:
    case actionTypes.REMOVE_FROM_CART_REQUEST:
    case actionTypes.DELETE_ALL_FROM_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        isLoading: false,
        error: null,
      };
    case actionTypes.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.UPDATE_CART_ITEM_QUANTITY_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        isLoading: false,
        error: null,
      };
    case actionTypes.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
        isLoading: false,
        error: null,
      };
    case actionTypes.DELETE_ALL_FROM_CART_SUCCESS:
      return {
        ...state,
        cartItems: [],
        isLoading: false,
        error: null,
      };
    case actionTypes.ADD_TO_CART_FAILURE:
    case actionTypes.GET_CART_ITEMS_FAILURE:
    case actionTypes.UPDATE_CART_ITEM_QUANTITY_FAILURE:
    case actionTypes.REMOVE_FROM_CART_FAILURE:
    case actionTypes.DELETE_ALL_FROM_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { cartReducer };
