import { toast } from "react-hot-toast";
import * as actionTypes from "../actionTypes/order.actionTypes";

export const addOrders = (product, token, toast) => {
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
      } else if(data.message === "Invalid token format"){
        toast.error("Please login first");
      }else {
        toast.success(data.message);
      }
      dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_TO_CART_FAILURE,
        payload: error.message,
      });
      // toast.error("Unable to add to cart");
    }
  };
};

export const getOrders = (token) => {
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

