import React, { useEffect, useState } from "react";
import styles from "../Styles/Serums.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";

function Serums() {
  const { loading, data } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [sortAs, setSortAs] = useState("");
  const [filterAsRating, setFilterAsRating] = useState("");
  const dispatch = useDispatch();
  const url = useParams();

  useEffect(() => {
    dispatch(getAllProduct("serums", page, sortAs, filterAsRating)).then(
      () => {}
    );
  }, [page, sortAs, filterAsRating]);

  console.log(data);
  return (
    <div className={styles.serums_container}>
      <NavigationBar />
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/files/desk-47.webp?v=1679037760"
        alt="banner"
      />
      <div className={styles.sidebar_and_product}>
        <div className={styles.Sidebar}>
          <Sidebar
            setSortAs={setSortAs}
            setFilterAsRating={setFilterAsRating}
          />
        </div>
        {loading ? (
          <Skeleton />
        ) : (
          <div className={styles.product_list}>
            {data?.data?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
      <Pagination page={page} setPage={setPage} data={data} />
      <Footer />
    </div>
  );
}

export { Serums };
