import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import styles from "../Styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems } from "../Redux/actions/cart.action";

// let data = {
//   _id: "645e1551062c3fbde39b9667",
//   category: "sunscreens",
//   title: "Vitamin C + E SPF 50 Sunscreen",
//   description: [
//     "2-in-1 glow + protect SPF 50 sunscreen for even-toned, glowing & protected skin every day.",
//     "Activates Vitamin D receptors, making it beneficial to be in the sun.",
//     "Infused with Triple Vitamin C & Sicilian Blood Orange to fight dullness & pigmentation while boosting collagen.",
//     "Powered by UV filters to protect skin against damaging UVA, UVB & blue light rays.",
//     "Water-light texture that provides full absorbency for an invisible finish on all skin tones with zero white cast.",
//   ],
//   price: 470,
//   images: [
//     "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-3.webp?v=1683526593",
//     "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/7.webp?v=1683526593",
//     "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3-1.webp?v=1683526593",
//     "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/certif.jpg?v=1683526592",
//   ],
//   rating: 4.2,
//   highlights: "WATERLIGHT TEXTURE",
//   stock: true,
//   __v: 0,
// };
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
