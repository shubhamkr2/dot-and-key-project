import React, { useEffect } from "react";
import styles from "../Styles/Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../Redux/actions/order.action";

function Order() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const orders = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders(token));
  }, [dispatch]);

  // console.log(orders);

  return (
    <div className={styles.container}>
      {orders.orders.length > 0 &&
        orders.orders?.map((order) => (
          <div key={order._id}>
            <h2>Order id: OID{order._id}</h2>
            {order.products?.length > 0 &&
              order.products?.map((product) => (
                <div key={product.id}>
                  {product.images && product.images.length > 0 && (
                    <div>
                      <img src={product.images[0]} alt="product" />
                      <div>
                        <h3>{product.title}</h3>
                        <h4>Quantity: {product.quantity}</h4>
                        <h4>Rating: {product.rating}</h4>
                        <h4>Cost: {product.price*product.quantity}</h4>
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
