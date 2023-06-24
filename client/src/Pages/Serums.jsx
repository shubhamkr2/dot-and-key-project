import React, { useEffect, useState } from "react";
import styles from "../Styles/Serums.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";
import { Toaster } from "react-hot-toast";

function Serums() {
  const { loading, data } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [sortAs, setSortAs] = useState("");
  const [filterAsRating, setFilterAsRating] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch serum products based on page, sortAs, and filterAsRating values
    dispatch(getAllProduct("serums", page, sortAs, filterAsRating)).then(() => {});
  }, [page, sortAs, filterAsRating, dispatch]);

  console.log(data);
  return (
    <div className={styles.serums_container}>
      <NavigationBar />
      <div>
        <Toaster />
      </div>
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/files/desk-47.webp?v=1679037760"
        alt="banner"
      />
      <h1 className={styles.category}>Serums</h1>
      <div className={styles.sidebar_and_product}>
        <div className={styles.Sidebar}>
          {/* Sidebar component for sorting and filtering options */}
          <Sidebar setSortAs={setSortAs} setFilterAsRating={setFilterAsRating} />
        </div>
        {loading ? (
          // Skeleton component for showing loading state
          <Skeleton />
        ) : (
          <div className={styles.product_list}>
            {/* Render product cards for each serum product */}
            {data?.data?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
      {/* Pagination component for navigating through product pages */}
      <Pagination page={page} setPage={setPage} data={data} />
      <Footer />
    </div>
  );
}

export { Serums };
