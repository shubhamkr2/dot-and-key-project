import React, { useEffect, useState } from "react";
import styles from "../Styles/LipCare.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";
import toast, { Toaster } from "react-hot-toast";

function LipCare() {
  // Retrieve 'loading' and 'data' from the product state in Redux store
  const { loading, data } = useSelector((state) => state.product);

  // Define state variables
  const [page, setPage] = useState(1); // Current page number
  const [sortAs, setSortAs] = useState(""); // Sort order
  const [filterAsRating, setFilterAsRating] = useState(""); // Rating filter

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch action to fetch products with the given parameters
    dispatch(getAllProduct("lipcare", page, sortAs, filterAsRating));
  }, [page, sortAs, filterAsRating]);

  return (
    <div className={styles.lipcare_container}>
      <NavigationBar />
      <div>
        <Toaster />
      </div>
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/files/DESK_e37f3ca9-dc02-41c0-95b8-159715e3646b.jpg?v=1682945740"
        alt="banner"
      />
      <h1 className={styles.category}>LipCare</h1>
      <div className={styles.sidebar_and_product}>
        <div className={styles.Sidebar}>
          {/* Render the Sidebar component and pass the setter functions for sortAs and filterAsRating */}
          <Sidebar setSortAs={setSortAs} setFilterAsRating={setFilterAsRating} />
        </div>
        {loading ? (
          <Skeleton /> // Render skeleton component while loading
        ) : (
          <div className={styles.product_list}>
            {/* Iterate over the product data and render ProductCard component for each product */}
            {data?.data?.map((product) => (
              <ProductCard product={product} key={product._id} toast={toast} />
            ))}
          </div>
        )}
      </div>
      {/* Render Pagination component and pass page, setPage, and data as props */}
      <Pagination page={page} setPage={setPage} data={data} />
      <Footer />
    </div>
  );
}

export { LipCare };
