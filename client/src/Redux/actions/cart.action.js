import * as actionTypes from "../actionTypes/cart.actionTypes";

export const addToCart = (product, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ADD_TO_CART_REQUEST });
      const response = await fetch("https://courageous-rose-nightgown.cyclic.app/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      console.log(data)
      dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.ADD_TO_CART_FAILURE, payload: error.message });
    }
  };
};

export const getCartItems = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_CART_ITEMS_REQUEST });
      const response = await fetch("https://courageous-rose-nightgown.cyclic.app/carts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      dispatch({ type: actionTypes.GET_CART_ITEMS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.GET_CART_ITEMS_FAILURE, payload: error.message });
    }
  };
};

export const updateCartItemQuantity = (token, id, quantity) => {
  // console.log(quantity, token, id)
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.UPDATE_CART_ITEM_QUANTITY_REQUEST });
      const response = await fetch(`https://courageous-rose-nightgown.cyclic.app/carts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity }),
      });
      const data = await response.json();
      console.log(data);
      dispatch({ type: actionTypes.UPDATE_CART_ITEM_QUANTITY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.UPDATE_CART_ITEM_QUANTITY_FAILURE, payload: error.message });
    }
  };
};

export const removeFromCart = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.REMOVE_FROM_CART_REQUEST });
      const response = await fetch(`https://courageous-rose-nightgown.cyclic.app/carts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      dispatch({ type: actionTypes.REMOVE_FROM_CART_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: actionTypes.REMOVE_FROM_CART_FAILURE, payload: error.message });
    }
  };
};
