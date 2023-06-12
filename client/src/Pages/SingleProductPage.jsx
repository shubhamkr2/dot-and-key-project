import React, { useEffect, useState } from "react";
import styles from "../Styles/SingleProductPage.module.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavigationBar } from "../Components/NavigationBar";
import { getSingleProduct } from "../Redux/actions/product.action";
import { Footer } from "../Components/Footer";
import { SinglePageSkeleton } from "../Components/SinglePageSkeleton";
import { SingleImageCarousel } from "../Components/SingleImageCarousel";
import { addToCart, getCartItems } from "../Redux/actions/cart.action";
import toast, { Toaster } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const { loading, single_product_data } = useSelector(
    (state) => state.product
  );
  const { isLoading } = useSelector((state) => state.cart);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data } = single_product_data || {};
  const token = localStorage.getItem("token") || [];
  const navigate = useNavigate();
  const {
    _id,
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

  if (loading) {
    return <SinglePageSkeleton />;
  }
  async function handleAddToCart() {
    const product = {
      productId: _id,
      category: category,
      title: title,
      description: description,
      price: price,
      image: images,
      rating: rating,
      stock: stock,
      quantity: quantity,
    };
    try {
      await dispatch(addToCart(product, token, toast));
      dispatch(getCartItems(token));
    } catch (err) {
      console.log(err);
    }
  }

  function handleBuyNow() {
    navigate(
      `/shipment?id=${id}&amount=${price * quantity}&items=${quantity}`
    );
  }
  return (
    <div className={styles.container}>
      <NavigationBar />
      <h1 className={styles.category}>{category?.toUpperCase()}</h1>
      <div>
        <Toaster />
      </div>
      <div className={styles.single_page_container}>
        <div className={styles.image_container}>
          <div className={styles.main_image}>
            {images && <img src={images[currentImageIndex]} alt="Product" />}
          </div>
          <div className={styles.thumbnails}>
            {images?.map((image, index) => (
              <img
                className={
                  index === currentImageIndex ? styles.current_image : ""
                }
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
          <div className={styles.carousel}>
            <SingleImageCarousel images={images} />
          </div>
          <h3>{highlights}</h3>
          <h2>Rs {price}</h2>
          <div className={styles.quantity}>
            <label>Quantity:</label>
            <select onChange={(e) => setQuantity(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={styles.cart_buy_btn}>
            <button
              className={styles.add_to_cart_btn}
              onClick={handleAddToCart}
              disabled={isLoading ? true : false}
            >
              {isLoading ? (
                <BeatLoader color="#FFFFFF" cssOverride={{ margin: "auto" }} />
              ) : (
                "ADD TO CART"
              )}
            </button>

            <button className={styles.buy_now_btn} onClick={handleBuyNow}>
              BUY NOW
            </button>
          </div>
          <div className={styles.description}>
            <h3>About this item</h3>
            {description?.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { SingleProductPage };
