import React, { useEffect } from 'react';
import styles from "../Styles/Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from '../Redux/actions/order.action';

function Order() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const orders = useSelector(state=>state.order);

  useEffect(()=>{
    dispatch(getOrders(token))
  },[dispatch]);

  console.log(orders)
  console.log(orders)
  return (
    <div className={styles.container}>
      {/* {orders?.data.map((order) =>(
        <div>{order._id}</div>
      ))} */}
    </div>
  )
}

export { Order };