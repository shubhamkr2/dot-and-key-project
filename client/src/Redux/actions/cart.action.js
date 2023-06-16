import { toast } from "react-hot-toast";
import * as actionTypes from "../actionTypes/cart.actionTypes";

// Add a product to the cart
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
        toast.error(data.message); // Display error message if quantity limit is exceeded
      } else if (data.message === "Invalid token format") {
        toast.error("Please login first"); // Display error message for invalid token format
      } else if (data.message === "Unable to add item") {
        toast.error("Something went wrong"); // Display generic error message for other issues
      } else {
        toast.success(data.message); // Display success message for successful addition
        dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_TO_CART_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Get the items in the cart
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

// Update the quantity of a cart item
export const updateCartItemQuantity = (token, id, quantity) => {
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
      toast.success(`Quantity ${quantity} updated successfully`); // Display success message for quantity update
      dispatch({
        type: actionTypes.UPDATE_CART_ITEM_QUANTITY_SUCCESS,
        payload: { _id: id, quantity: quantity },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_CART_ITEM_QUANTITY_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Remove a cart item
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
      toast.success("Item removed successfully"); // Display success message for item removal
      dispatch({ type: actionTypes.REMOVE_FROM_CART_SUCCESS, payload: id });
    } catch (error) {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Delete all items from the cart
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
