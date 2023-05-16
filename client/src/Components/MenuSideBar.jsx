import React, { useEffect } from "react";
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
import { All } from "../Pages/All";
import { FaRegWindowClose } from "react-icons/fa";
import { LogIn } from "../Pages/LogIn";
import { SignUp } from "../Pages/SignUp";
import { useDispatch } from "react-redux";
import { userLogOut } from "../Redux/actions/user.action";

function MenuSideBar({ name, isOpen, setIsOpen, login }) {
  const dispatch = useDispatch();

  // useEffect(()=>{

  // },[login])
  function handleSignOut() {
    dispatch(userLogOut());
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.MenuSidebar_container}>
      <div className={styles.sidebar_profile}>
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <CgProfile />
        </IconContext.Provider>
        <h3>Hello, {name}</h3>
        <div className={styles.close_btn} onClick={() => setIsOpen(!isOpen)}>
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <FaRegWindowClose />
          </IconContext.Provider>
        </div>
      </div>
      {login ? (
        <div className={styles.profile}>
          <h2>Profile</h2>
          <Link
            to="/account"
            element={<Sunscreens />}
            onClick={() => setIsOpen(!isOpen)}
          >
            Account
          </Link>
          <Link
            to="/order"
            element={<Moisturizers />}
            onClick={() => setIsOpen(!isOpen)}
          >
            Order History
          </Link>
          <Link to="/login" element={<LogIn />} onClick={handleSignOut}>
            Sign Out
          </Link>
        </div>
      ) : (
        <div className={styles.profile}>
          <h2>Profile</h2>
          <Link
            to="/login"
            element={<LogIn />}
            onClick={() => setIsOpen(!isOpen)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            element={<SignUp />}
            onClick={() => setIsOpen(!isOpen)}
          >
            Register
          </Link>
        </div>
      )}
      <div className={styles.menuNavigationBar}>
        <h2>Browse, Dot&Key</h2>
        <Link to="/all" element={<All />} onClick={() => setIsOpen(!isOpen)}>
          All
        </Link>
        <Link
          to="/sunscreens"
          element={<Sunscreens />}
          onClick={() => setIsOpen(!isOpen)}
        >
          Sunscreens
        </Link>
        <Link
          to="/moisturizers"
          element={<Moisturizers />}
          onClick={() => setIsOpen(!isOpen)}
        >
          Moisturizers
        </Link>
        <Link
          to="/faceserums"
          element={<FaceSerums />}
          onClick={() => setIsOpen(!isOpen)}
        >
          Face Serums
        </Link>
        <Link
          to="/lipbalm"
          element={<LipBalms />}
          onClick={() => setIsOpen(!isOpen)}
        >
          Lip Balms & Masks
        </Link>
        <Link
          to="/facewash"
          element={<FaceWash />}
          onClick={() => setIsOpen(!isOpen)}
        >
          Face Wash
        </Link>
        <Link
          to="/facemasks"
          element={<FaceMasks />}
          onClick={() => setIsOpen(!isOpen)}
        >
          Face Masks
        </Link>
      </div>
    </div>
  );
}

export { MenuSideBar };
