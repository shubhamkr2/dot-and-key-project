import React, { useEffect, useState } from "react";
import styles from "../Styles/SearchResult.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";

function SearchResult() {
  const { suggestions, isLoading } = useSelector((state) => state.search);
  const [page, setPage] = useState(1);
  const [sortAs, setSortAs] = useState("");
  const [filterAsRating, setFilterAsRating] = useState("");
  const dispatch = useDispatch();
  const url = useParams();

  useEffect(() => {
    dispatch(getAllProduct("", page, sortAs, filterAsRating));
  }, [page, sortAs, filterAsRating]);

  return (
    <div className={styles.all_container}>
      <NavigationBar />
      <h1>Search Results</h1>
      <div className={styles.sidebar_and_product}>
        {suggestions?.data?.length<1 ? (
          <img src="https://github.com/shubhamkr2/UploadImages/blob/main/no_result.gif?raw=true" alt="no result" />
        ) : (
          <div className={styles.product_list}>
            {suggestions?.data?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export { SearchResult };
