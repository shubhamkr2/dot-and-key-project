import React, { useEffect, useState } from "react";
import styles from "../Styles/FaceMasks.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";
import toast, { Toaster } from "react-hot-toast";

function FaceMasks() {
  const { loading, data } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [sortAs, setSortAs] = useState("");
  const [filterAsRating, setFilterAsRating] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch all face masks products based on the selected page, sorting, and filtering options
    dispatch(getAllProduct("facemask", page, sortAs, filterAsRating));
  }, [page, sortAs, filterAsRating]);

  return (
    <div className={styles.facemask_container}>
      <NavigationBar />
      <div>
        <Toaster />
      </div>
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/files/Desktop_Top_banner.jpg?v=1684230503"
        alt="banner"
      />
      <h1 className={styles.category}>FaceMasks</h1>
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
              <ProductCard product={product} key={product._id} toast={toast}/>
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

export { FaceMasks };
