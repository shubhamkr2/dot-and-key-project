import { toast } from "react-hot-toast";
import * as actionTypes from "../actionTypes/cart.actionTypes";

export const addToCart = (product, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ADD_TO_CART_REQUEST });
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
      if (data.message === "Quantity limit exceeded") {
        toast.error(data.message);
      } else if (data.message === "Invalid token format") {
        toast.error("Please login first");
      } else if (data.message === "Unable to add item") {
        toast.error("Something went wrong");
      } else {
        toast.success(data.message);
        dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_TO_CART_FAILURE,
        payload: error.message,
      });
      // toast.error("Unable to add to cart");
    }
  };
};

export const getCartItems = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_CART_ITEMS_REQUEST });
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
      dispatch({ type: actionTypes.GET_CART_ITEMS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_CART_ITEMS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const updateCartItemQuantity = (token, id, quantity) => {
  // console.log(quantity, token, id)
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.UPDATE_CART_ITEM_QUANTITY_REQUEST });
      const response = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/carts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ quantity }),
        }
      );
      const data = await response.json();
      console.log(data);
      toast.success(`Quantity ${quantity} updated successfully`);
      dispatch({
        type: actionTypes.UPDATE_CART_ITEM_QUANTITY_SUCCESS,
        payload: { _id: id, quantity: quantity },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_CART_ITEM_QUANTITY_FAILURE,
        payload: error.message,
      });
      // toast.error("Failed to update the quantity");
    }
  };
};

export const removeFromCart = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.REMOVE_FROM_CART_REQUEST });
      const response = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/carts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      toast.success("Item removed successfully");
      dispatch({ type: actionTypes.REMOVE_FROM_CART_SUCCESS, payload: id });
    } catch (error) {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const deleteAllFromCart = (token) => {
  console.log(token);
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.DELETE_ALL_FROM_CART_REQUEST });
      const response = await fetch(
        "https://courageous-rose-nightgown.cyclic.app/carts/",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      // toast.success("Order Placed successfully");
      dispatch({
        type: actionTypes.DELETE_ALL_FROM_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_ALL_FROM_CART_FAILURE,
        payload: error.message,
      });
    }
  };
};
