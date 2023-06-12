import React, { useEffect, useState } from "react";
import styles from "../Styles/Moisturizing.module.css";
import { NavigationBar } from "../Components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/product.action";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Sidebar from "../Components/Sidebar";
import { Skeleton } from "../Components/Skeleton";
import toast, { Toaster } from "react-hot-toast";

function Moisturizers() {
  const { loading, data } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [sortAs, setSortAs] = useState("");
  const [filterAsRating, setFilterAsRating] = useState("");
  const dispatch = useDispatch();
  const url = useParams();

  useEffect(() => {
    dispatch(getAllProduct("moisturizer", page, sortAs, filterAsRating)).then(() => {});
  }, [page, sortAs, filterAsRating]);

  console.log(data);
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
            setSortAs={setSortAs}
            setFilterAsRating={setFilterAsRating}
          />
        </div>
        {loading ? (
          <Skeleton />
        ) : (
          <div className={styles.product_list}>
            {data?.data?.map((product) => (
              <ProductCard product={product} key={product._id} toast={toast}/>
            ))}
          </div>
        )}
      </div>
      <Pagination page={page} setPage={setPage} data={data} />
      <Footer />
    </div>
  );
}

export { Moisturizers };
