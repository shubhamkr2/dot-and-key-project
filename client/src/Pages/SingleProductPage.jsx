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

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);
  console.log(single_product_data);
  if (loading) {
    return <div>Loading...</div>;
  }

  const switchImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <h1>Product Name</h1>
      <div>
        <img
          src={single_product_data?.data.images[currentImageIndex]}
          alt="Product"
        />
      </div>
      <div>
        {single_product_data?.data.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Thumbnail"
            onClick={() => switchImage(index)}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              marginRight: "5px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export { SingleProductPage };
