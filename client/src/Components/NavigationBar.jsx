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

function NavigationBar() {
  return (
    <div className={styles.container}>
      <Link to="/all" element={<All />}>
        All
      </Link>
      <Link to="/sunscreens" element={<Sunscreens />}>
        Sunscreens
      </Link>
      <Link to="/moisturizers" element={<Moisturizers />}>
        Moisturizers
      </Link>
      <Link to="/serums" element={<Serums />}>
        Serums
      </Link>
      <Link to="/lipcare" element={<LipCare />}>
        Lip Care & Masks
      </Link>
      <Link to="/facewash" element={<FaceWash />}>
        Face Wash
      </Link>
      <Link to="/facemasks" element={<FaceMasks />}>
        Face Masks
      </Link>
    </div>
  );
}

export { NavigationBar };
