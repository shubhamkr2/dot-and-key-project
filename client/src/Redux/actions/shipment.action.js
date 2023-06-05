import { toast } from "react-hot-toast";
import * as actionTypes from "../actionTypes/shipment.actionTypes";

export const addAddress = (address, token, toast) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ADD_ADDRESS_REQUEST });
      const response = await fetch(
        "https://courageous-rose-nightgown.cyclic.app/address",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(address),
        }
      );
      const data = await response.json();
      if (data.message === "Unable to add address") {
        toast.error(data.message);
      } else if (data.message === "Invalid token format") {
        toast.error("Please login first");
      } else {
        toast.success(data.message);
      }
      dispatch({ type: actionTypes.ADD_ADDRESS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_ADDRESS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const getAddress = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ADDRESS_REQUEST });
      const response = await fetch(
        "https://courageous-rose-nightgown.cyclic.app/address",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      dispatch({ type: actionTypes.GET_ADDRESS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ADDRESS_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const getAddressById = (token,id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ADDRESS_REQUEST });
      const response = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/address/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      dispatch({ type: actionTypes.GET_ADDRESS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ADDRESS_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const updateAddress = (token, id, newAddress, toast) => {
  // console.log(quantity, token, id)
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.UPDATE_ADDRESS_REQUEST });
      const response = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/address/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ newAddress }),
        }
      );
      const data = await response.json();
      console.log(data);
      toast.success(`Address updated successfully`);
      dispatch({
        type: actionTypes.UPDATE_ADDRESS_SUCCESS,
        payload: { _id: id, newAddress: newAddress },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ADDRESS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const removeAddress = (token, id, toast) => {
  console.log(id, token)
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.REMOVE_ADDRESS_REQUEST });
      const response = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/address/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      toast.success("address removed successfully");
      dispatch({ type: actionTypes.REMOVE_ADDRESS_SUCCESS, payload: id });
    } catch (error) {
      dispatch({
        type: actionTypes.REMOVE_ADDRESS_FAILURE,
        payload: error.message,
      });
    }
  };
};
