import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import styles from "../Styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems } from "../Redux/actions/cart.action";


function ProductCard({ product, toast }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") || [];

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
  } = product || {};
  async function handleAddToCart() {
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
    }
  }
  // console.log(product);
  return (
    <div className={styles.container}>
      <Link to={product._id}>
        <img src={product.images[0]} />
      </Link>
      <div className={styles.rating}>
        <IconContext.Provider value={{ color: "rgb(235, 182, 10)" }}>
          <AiFillStar />
        </IconContext.Provider>
        <span>{product.rating}/5</span>
      </div>
      <h4>{product.title}</h4>
      <h5 className={styles.highlights}>{product.highlights}</h5>
      <h4 className={styles.price}>Rs: {product.price}</h4>
      <button onClick={handleAddToCart}>ADD TO CART</button>
    </div>
  );
}

export default ProductCard;
