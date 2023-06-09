import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  SINGLE_PRODUCTS_REQUEST,
  SINGLE_PRODUCTS_SUCCESS,
  SINGLE_PRODUCTS_FAIL,
} from "../actionTypes/product.actionTypes.js";

// Get all products
function getAllProduct(category, page, sortAs, filterAsRating) {
  return async function (dispatch) {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/products?category=${category}&&rating=${filterAsRating}&&page=${page}&&limit=6&&sortBy=${sortAs}`
      );
      let data = await res.json();
      dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data }); // Dispatch success action with the retrieved data
    } catch (err) {
      console.log(err);
      dispatch({ type: ALL_PRODUCTS_FAIL }); // Dispatch failure action if an error occurs
    }
  };
}

// Get single product
function getSingleProduct(id) {
  return async function (dispatch) {
    dispatch({ type: SINGLE_PRODUCTS_REQUEST });
    try {
      let res = await fetch(
        `https://courageous-rose-nightgown.cyclic.app/products/${id}`
      );
      let data = await res.json();
      dispatch({ type: SINGLE_PRODUCTS_SUCCESS, payload: data }); // Dispatch success action with the retrieved data
    } catch (err) {
      console.log(err);
      dispatch({ type: SINGLE_PRODUCTS_FAIL }); // Dispatch failure action if an error occurs
    }
  };
}

export { getAllProduct, getSingleProduct };
