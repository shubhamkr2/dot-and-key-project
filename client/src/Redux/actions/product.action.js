import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  SINGLE_PRODUCTS_REQUEST,
  SINGLE_PRODUCTS_SUCCESS,
  SINGLE_PRODUCTS_FAIL,
} from "../actionTypes/product.actionTypes.js";

function getAllProduct() {
  return async function (dispatch) {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/products`
      );
      let data = await res.json();
      dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data });
      console.log(data);
    } catch (err) {
      console.log(err);
      dispatch({ type: ALL_PRODUCTS_FAIL });
    }
  };
}
function getSingleProduct() {}

export { getAllProduct, getSingleProduct };
