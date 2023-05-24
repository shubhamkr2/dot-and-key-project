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

function addToCart(product, token) {
  return async (dispatch) => {
    try {
      dispatch({ type: CART_REQUEST });
      const response = await fetch(
        "https://courageous-rose-nightgown.cyclic.app/carts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(product),
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CART_FAILURE, payload: error.message });
    }
  };
}

function getProducts() {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CART_PRODUCTS_LOADING });
      const response = await fetch(
        "https://courageous-rose-nightgown.cyclic.app/carts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: GET_CART_PRODUCTS_DATA, payload: data });
    } catch (error) {
      dispatch({ type: GET_CART_PRODUCTS_ERROR, payload: error.message });
    }
  };
}
function updateQty() {}
function removeFromCart() {}

export { addToCart, getProducts, updateQty, removeFromCart };
