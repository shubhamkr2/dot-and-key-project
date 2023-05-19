import React, { useEffect, useState } from "react";
import styles from "../Styles/SingleProductPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavigationBar } from "../Components/NavigationBar";
import { getSingleProduct } from "../Redux/actions/product.action";

function SingleProductPage() {
  const { id } = useParams();
  const { loading, single_product_data } = useSelector(
    (state) => state.product
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();
  const {data} = single_product_data||{};
  const {category,title,description,price,images,rating,highlights,stock} = data||{};
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);
  
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
    <div className={styles.single_page_container}>
    <div className={styles.image_container}>
      <div className={styles.main_image}>
        <img
          src={images[currentImageIndex]}
          alt="Product"
        />
      </div>
      <div className={styles.thumbnails}>
        {images?.map((image, index) => (
          <img
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
      </div>
    </div>
    </>
  );
}

export { SingleProductPage };
