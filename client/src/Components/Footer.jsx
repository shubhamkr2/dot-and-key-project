import React from "react";
import styles from "../Styles/Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div>
        <h2>GET TO KNOW US</h2>
        <div className={styles.row}>
          <Link to="#">ABOUT US</Link>
          <Link to="#">CONTACT US</Link>
          <Link to="#">EARTHCARE</Link>
          <Link to="#">AFFILIATE PROGRAM</Link>
          <Link to="#">TERMS & CONDITION</Link>
          <Link to="#">REFUND & CANCELLATION</Link>
          <Link to="#">PRIVACY POLICY</Link>
          <Link to="#">ORDER & SHIPPING</Link>
          <Link to="#">PAYMENT TERMS</Link>
          <Link to="#">TERMS OF SERVICE</Link>
          <Link to="#">REFUND POLICY</Link>
        </div>
      </div>
      <div>
      <h2>ALSO AVAILABLE ON</h2>
        <div className={styles.row}>
          <Link to="#">NYKAA</Link>
          <Link to="#">AMAZON</Link>
          <Link to="#">FLIPKART</Link>
          <Link to="#">MYNTRA</Link>
        </div>
      </div>
      <div>
      <h2>STAY UPDATED</h2>
        <div className={styles.row}>
          <div>
            <input type="text" placeholder="example@example.com" />
            <button>SUBMIT</button>
          </div>
          <button>DOWNLOAD THE APP</button>
          <div>
            <Link to="#">FOLLOW US</Link>
            <FaFacebookF />
            <SiInstagram />
            <IoLogoYoutube />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export { Footer };
