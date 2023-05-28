import React from "react";
import { Link } from "react-router-dom";
import { Sunscreens } from "../Pages/Sunscreens";
import { Moisturizers } from "../Pages/Moisturizers";
import { Serums } from "../Pages/Serums";
import { LipCare } from "../Pages/LipCare";
import { FaceWash } from "../Pages/FaceWash";
import { FaceMasks } from "../Pages/FaceMasks";
import { All } from "../Pages/All";
import styles from "../Styles/NavigationBar.module.css";
import { useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();
  const {pathname}=location;
  const path = pathname.trim().split("/");

  // console.log(path[1]);

  return (
    <div className={styles.container}>
      <Link to="/all" element={<All />} className={path[1] === "all" ? styles.activeLink : ''}>
        All
      </Link>
      <Link to="/sunscreens" element={<Sunscreens />} className={path[1] === "sunscreens" ? styles.activeLink : ''}>
        Sunscreens
      </Link>
      <Link to="/moisturizers" element={<Moisturizers />} className={path[1] === "moisturizers" ? styles.activeLink : ''}>
        Moisturizers
      </Link>
      <Link to="/serums" element={<Serums />} className={path[1] === "serums" ? styles.activeLink : ''}>
        Serums
      </Link>
      <Link to="/lipcare" element={<LipCare />} className={path[1] === "lipcare" ? styles.activeLink : ''}>
        Lip Care
      </Link>
      <Link to="/facewash" element={<FaceWash />} className={path[1] === "facewash" ? styles.activeLink : ''}>
        Face Wash
      </Link>
      <Link to="/facemasks" element={<FaceMasks />} className={path[1] === "facemasks" ? styles.activeLink : ''}>
        Face Masks
      </Link>
    </div>
  );
}

export { NavigationBar };
