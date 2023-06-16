import { toast } from "react-hot-toast";
import * as actionTypes from "../actionTypes/order.actionTypes";

// Add orders
export const addOrders = (orders, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ADD_ORDER_REQUEST });
      const response = await fetch(
        "https://courageous-rose-nightgown.cyclic.app/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...orders }),
        }
      );
      const data = await response.json();
      if (data.message === "Order added successfully") {
        toast.success("Order Placed Successfully, redirecting to home page"); // Display success message for successful order placement
        dispatch({ type: actionTypes.ADD_ORDER_SUCCESS, payload: data });
      } else {
        toast.error(data.message); // Display error message if order placement fails
      }
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_ORDER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Get orders
export const getOrders = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ORDER_REQUEST });
      const response = await fetch(
        "https://courageous-rose-nightgown.cyclic.app/orders",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      dispatch({ type: actionTypes.GET_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ORDER_FAILURE,
        payload: error.message,
      });
    }
  };
};
