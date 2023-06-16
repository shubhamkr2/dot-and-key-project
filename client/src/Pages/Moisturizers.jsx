import React, { useEffect, useState } from "react";
import styles from "../Styles/Moisturizing.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";
import { Toaster } from "react-hot-toast";

function Moisturizers() {
  const { loading, data } = useSelector((state) => state.product); // Retrieve product data and loading state from Redux store
  const [page, setPage] = useState(1); // State for current page
  const [sortAs, setSortAs] = useState(""); // State for sorting option
  const [filterAsRating, setFilterAsRating] = useState(""); // State for filtering by rating
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct("moisturizer", page, sortAs, filterAsRating)); // Fetch moisturizer products based on page, sorting, and filtering options
  }, [page, sortAs, filterAsRating]);

  return (
    <div className={styles.moisturizing_container}>
      <NavigationBar />
      <div>
        <Toaster />
      </div>
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/files/Sale_Banner_Desktop_fe27af49-265a-4c7b-9625-134e604bc09d.jpg?v=1684230611"
        alt="banner"
      />
      <h1 className={styles.category}>Moisturizers</h1>
      <div className={styles.sidebar_and_product}>
        <div className={styles.Sidebar}>
          <Sidebar
            setSortAs={setSortAs} // Pass the sorting option setter to the sidebar component
            setFilterAsRating={setFilterAsRating} // Pass the rating filter option setter to the sidebar component
          />
        </div>
        {loading ? (
          <Skeleton /> // Display a skeleton loader while products are being loaded
        ) : (
          <div className={styles.product_list}>
            {data?.data?.map((product) => (
              <ProductCard product={product} key={product._id} /> // Render each product card component
            ))}
          </div>
        )}
      </div>
      <Pagination page={page} setPage={setPage} data={data} /> // Render pagination component to navigate through pages
      <Footer />
    </div>
  );
}

export { Moisturizers };
