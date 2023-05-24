import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../Redux/actions/cart.action";

function Cart() {
  const token = localStorage.getItem("token") || [];
  const {cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItem(token));
  },[]);
console.log(cartItems)
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2></h2>
          <span>Category: </span>
          <span>Rs: </span>
        </div>
        <div>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
      </div>
      <div>
        <h3>Gross Total: </h3>
        <h3>Shipping: </h3>
        <h3>Discount: </h3>
        <h3>Total: </h3>
      </div>
    </div>
  );
}

export { Cart };
