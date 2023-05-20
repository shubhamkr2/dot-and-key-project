import React, { useEffect, useState } from "react";
import styles from "../Styles/SingleProductPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavigationBar } from "../Components/NavigationBar";
import { getSingleProduct } from "../Redux/actions/product.action";
import { Footer } from "../Components/Footer";

function SingleProductPage() {
  const { id } = useParams();
  const { loading, single_product_data } = useSelector(
    (state) => state.product
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();
  const { data } = single_product_data || {};
  const {
    category,
    title,
    description,
    price,
    images,
    rating,
    highlights,
    stock,
  } = data || {};
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  const switchImage = (index) => {
    setCurrentImageIndex(index);
  };

  console.log(title);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NavigationBar />
      <h1 className={styles.category}>{category?.toUpperCase()}</h1>
      <div className={styles.single_page_container}>
        <div className={styles.image_container}>
          <div className={styles.main_image}>
            {images && <img src={images[currentImageIndex]} alt="Product" />}
          </div>
          <div className={styles.thumbnails}>
            {images?.map((image, index) => (
              <img
              className={index===currentImageIndex?styles.current_image:""}
                key={index}
                src={image}
                alt="Thumbnail"
                onClick={() => switchImage(index)}
              />
            ))}
          </div>
        </div>
        <div className={styles.description_container}>
          <h1>{title}</h1>
          <h3>{highlights}</h3>
          <h2>Rs {price}</h2>
          <div className={styles.quantity}>
            <label>Quantity:</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={styles.cart_buy_btn}>
            <button className={styles.add_to_cart_btn}>ADD TO CART</button>
            <button className={styles.buy_now_btn}>BUY NOW</button>
          </div>
          <div className={styles.description}>
          <h3>About this item</h3>
            {description?.map(list=>(<li>{list}</li>))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { SingleProductPage };
