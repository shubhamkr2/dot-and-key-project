import React, { useEffect } from "react";
import styles from "../Styles/Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../Redux/actions/order.action";

function Order() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token"); // Retrieve the token from localStorage
  const { orders, loading } = useSelector((state) => state.order); // Retrieve orders and loading state from Redux store

  useEffect(() => {
    dispatch(getOrders(token)); // Fetch the user's orders using the token
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.category}>My orders</h1>
      {loading ? (
        <>
          <h1>Loading...</h1> // Display a loading message while the orders are being fetched
        </>
      ) : (
        <>
          {orders.length > 0 &&
            orders?.map((order) => (
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
        </>
      )}
    </div>
  );
}

export { Order };
