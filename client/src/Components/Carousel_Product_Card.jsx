import React, { useState } from "react";
import styles from "../Styles/Carousel_Product_Card.module.css";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems } from "../Redux/actions/cart.action";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

function Carousel_Product_Card({ product, toast }) {
  const {
    _id,
    images,
    category,
    title,
    description,
    price,
    rating,
    highlights,
    stock,
  } = product;
  const token = localStorage.getItem("token") || [];
  const dispatch = useDispatch();

  // Add a loading state for the current product card
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddToCart() {
    setIsLoading(true); // Set the loading state to true for the current card
    const cart_product = {
      productId: _id,
      category: category,
      title: title,
      description: description,
      price: price,
      image: images,
      rating: rating,
      stock: stock,
      quantity: 1,
    };
    try {
      await dispatch(addToCart(cart_product, token, toast));
      dispatch(getCartItems(token));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Set the loading state back to false
    }
  }

  return (
    <div className={styles.container}>
      <Link to={`/product/${_id}`}>
        <img src={images[0]} />
      </Link>
      <div className={styles.rating}>
        <IconContext.Provider value={{ color: "rgb(235, 182, 10)" }}>
          <AiFillStar />
        </IconContext.Provider>

        <span>{rating}/5</span>
      </div>
      <h4>{title}</h4>
      <h5 className={styles.highlights}>{highlights}</h5>
      <h4 className={styles.price}>RS: {price}</h4>
      <button onClick={handleAddToCart} disabled={isLoading ? true : false}>
        {isLoading ? (
          <BeatLoader color="#FFFFFF" cssOverride={{ margin: "auto" }} />
        ) : (
          "ADD TO CART"
        )}
      </button>
    </div>
  );
}

export { Carousel_Product_Card };
