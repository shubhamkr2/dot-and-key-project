import React, { useEffect, useState } from "react";
import styles from "../Styles/FaceWash.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";
import { Toaster } from "react-hot-toast";

function FaceWash() {
  const { loading, data } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [sortAs, setSortAs] = useState("");
  const [filterAsRating, setFilterAsRating] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch all face wash products based on the selected page, sorting, and filtering options
    dispatch(getAllProduct("facewash", page, sortAs, filterAsRating));
  }, [page, sortAs, filterAsRating]);

  return (
    <div className={styles.facewash_container}>
      <NavigationBar />
      <div>
        <Toaster />
      </div>
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/files/vit_cDesktop_copy_26623988-3be2-43c7-8d96-bf2c3ce56ae9.jpg?v=1684345468"
        alt="banner"
      />
      <h1 className={styles.category}>FaceWash</h1>
      <div className={styles.sidebar_and_product}>
        <div className={styles.Sidebar}>
          {/* Sidebar component for sorting and filtering options */}
          <Sidebar
            setSortAs={setSortAs}
            setFilterAsRating={setFilterAsRating}
          />
        </div>
        {loading ? (
          <Skeleton />
        ) : (
          <div className={styles.product_list}>
            {/* Render product cards for each product */}
            {data?.data?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
      {/* Pagination component for navigating through pages */}
      <Pagination page={page} setPage={setPage} data={data} />
      <Footer />
    </div>
  );
}

export { FaceWash };
