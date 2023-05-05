import React from "react";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
import styles from "../Styles/MenuSideBar.module.css";
import { Link } from "react-router-dom";
import { Sunscreens } from "../Pages/Sunscreens";
import { Moisturizers } from "../Pages/Moisturizers";
import { FaceSerums } from "../Pages/FaceSerums";
import { LipBalms } from "../Pages/LipBalms";
import { FaceWash } from "../Pages/FaceWash";
import { FaceMasks } from "../Pages/FaceMasks";
import { FaceToners } from "../Pages/FaceToners";

function MenuSideBar({ name }) {
  return (
    <div className={styles.MenuSidebar_container}>
      <div className={styles.sidebar_profile}>
        <IconContext.Provider value={{ size: "2rem" }}>
          <CgProfile />
        </IconContext.Provider>
        <h3>Hello, {name}</h3>
      </div>
      <div className={styles.profile}>
        <h2>Profile</h2>
        <Link to="/account" element={<Sunscreens />}>
        Account
      </Link>
      <Link to="/order" element={<Moisturizers />}>
        Order History
      </Link>
      <Link to="/login" element={<FaceSerums />}>
        Sign Out
      </Link>
      </div>
      <div className={styles.menuNavigationBar}>
      <h2>Browse, Dot&Key</h2>
      <Link to="/sunscreens" element={<Sunscreens />}>
        Sunscreens
      </Link>
      <Link to="/moisturizers" element={<Moisturizers />}>
        Moisturizers
      </Link>
      <Link to="/faceserums" element={<FaceSerums />}>
        Face Serums
      </Link>
      <Link to="/lipbalm" element={<LipBalms />}>
        Lip Balms & Masks
      </Link>
      <Link to="/facewash" element={<FaceWash />}>
        Face Wash
      </Link>
      <Link to="/facemasks" element={<FaceMasks />}>
        Face Masks
      </Link>
      <Link to="/facetonners" element={<FaceToners />}>
        Face Toners
      </Link>
      </div>
    </div>
  );
}

export { MenuSideBar };
