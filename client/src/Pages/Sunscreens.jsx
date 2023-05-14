import React, { useEffect } from "react";
import styles from "../Styles/Sunscreens.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import { useParams } from "react-router-dom";

function Sunscreens() {
  const { loading, data } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const url = useParams();
  useEffect(() => {
    dispatch(getAllProduct("sunscreens")).then(() => {});
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(url)
  return (
    <div className={styles.sunscreens_container}>
      <NavigationBar />
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/collections/CATE-DESK_1_1512x.jpg?v=1682595235"
        alt="sunscreens"
      />
    </div>
  );
}

export { Sunscreens };
