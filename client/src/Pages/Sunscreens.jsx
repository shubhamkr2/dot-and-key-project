import React, { useEffect, useState } from "react";
import styles from "../Styles/Sunscreens.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";
import { Toaster } from "react-hot-toast";

function Sunscreens() {
  const { loading, data } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [sortAs, setSortAs] = useState("");
  const [filterAsRating, setFilterAsRating] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct("sunscreens", page, sortAs, filterAsRating));
  }, [page, sortAs, filterAsRating]);

  return (
    <div className={styles.sunscreens_container}>
      <NavigationBar />
      <div>
        <Toaster />
      </div>
      <img
        className={styles.banner}
        src="https://www.dotandkey.com/cdn/shop/files/CATE_DESK_70f0f8fb-6857-4d23-bb4f-86449f2dcbd1.jpg?v=1682937797"
        alt="sunscreens"
      />
      <h1 className={styles.category}>Sunscreens</h1>
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

export { Sunscreens };

