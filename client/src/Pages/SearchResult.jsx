import React, { useEffect, useState } from "react";
import styles from "../Styles/SearchResult.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";

function SearchResult() {
  // Get suggestions and loading state from Redux store
  const { suggestions, isLoading } = useSelector((state) => state.search);

  return (
    <div className={styles.all_container}>
      {/* Render the navigation bar */}
      <NavigationBar />

      <h1>Search Results</h1>

      <div className={styles.sidebar_and_product}>
        {suggestions?.data?.length < 1 ? (
          // If no results found, display a message or image
          <img
            src="https://github.com/shubhamkr2/UploadImages/blob/main/no_result.gif?raw=true"
            alt="no result"
          />
        ) : (
          // Render the list of products
          <div className={styles.product_list}>
            {suggestions?.data?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>

      {/* Render the footer */}
      <Footer />
    </div>
  );
}

export { SearchResult };
