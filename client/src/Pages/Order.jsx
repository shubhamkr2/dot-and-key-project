import React, { useEffect } from "react";
import styles from "../Styles/Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../Redux/actions/order.action";

function Order() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const orders = useSelector((state) => state.order);
  // const {data} = orders;
  useEffect(() => {
    dispatch(getOrders(token));
  }, [dispatch]);

  // const totalPrice =
  // orders?.data?.products?.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // ) || 0;
  // console.log(orders.data);

  return (
    <div className={styles.container}>
      {orders.orders.length > 0 &&
        orders.orders?.map((order) => (
          <div key={order._id} className={styles.order}>
            <h2>Order id: OID{order._id}</h2>
            <div className={styles.price_and_time}>
              <h3>Total paid: &#x20B9;{order.totalamt}</h3>
              <h3>Paid on: {new Date(order.createdAt).toLocaleString()}</h3>
            </div>
            {order.products?.length > 0 &&
              order.products?.map((product) => (
                <div key={product.id} className={styles.product}>
                  {product.images && product.images.length > 0 && (
                    <div className={styles.image_and_details_container}>
                      <img src={product.images[0]} alt="product" />
                      <div>
                        <h3>{product.title}</h3>
                        <h4>Quantity: {product.quantity}</h4>
                        <h4>Rating: {product.rating}</h4>
                        <h4>Price: {product.price}</h4>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

export { Order };
