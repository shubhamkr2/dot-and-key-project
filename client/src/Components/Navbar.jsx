import React from "react";
import styles from "../Styles/Navbar.module.css";
import { ImSearch } from "react-icons/im";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { NavigationBar } from "./NavigationBar";

function Navbar() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://github.com/shubhamkr2/Dot-Key-Project/blob/main/dot_and_key_clone/src/Logo/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?raw=true"
          alt="logo"
        />
      </div>
      <div className={styles.Search_Box}>
        <input type="text" placeholder="Search your product" />
        <IconContext.Provider value={{ size: "2rem", color:"white" }}>
          <ImSearch />
        </IconContext.Provider>
      </div>
      <div className={styles.cartLogo_profileIcon}>
      <div className={styles.cart_logo}>
        <IconContext.Provider value={{ size: "2rem" }}>
          <FiShoppingCart />
        </IconContext.Provider>
      </div>
      <div className={styles.user_profile}>
        <IconContext.Provider value={{ size: "2rem" }}>
          <CgProfile />
        </IconContext.Provider>
      </div>
      </div>
    </div>
    <NavigationBar />
    </>
  );
}

export { Navbar };
