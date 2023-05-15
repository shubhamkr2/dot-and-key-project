import React, { useEffect, useState } from "react";
import styles from "../Styles/Sunscreens.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";

function Sunscreens() {
  const { loading, data } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const url = useParams();

  useEffect(() => {
    dispatch(getAllProduct("sunscreens", page)).then(() => {});
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(data.data);
  return (
    <div className={styles.sunscreens_container}>
      <NavigationBar />
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/collections/CATE-DESK_1_1512x.jpg?v=1682595235"
        alt="sunscreens"
      />
      <div className={styles.product_list}>
        {data?.data?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <span>
          {page}/{Math.ceil(data?.count / 6)}
        </span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <Footer />
    </div>
  );
}

export { Sunscreens };
