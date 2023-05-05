import React from "react";
import styles from "../Styles/Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div>
        <div className={styles.row}>
          <h2>GET TO KNOW US</h2>
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
        <div className={styles.row}>
          <h2>ALSO AVAILABLE ON</h2>
          <Link to="#">NYKAA</Link>
          <Link to="#">AMAZON</Link>
          <Link to="#">FLIPKART</Link>
          <Link to="#">MYNTRA</Link>
        </div>
      </div>
      <div>
        <div className={styles.row}>
          <h2>STAY UPDATED</h2>
          <div className={styles.updated_input}>
            <input type="text" placeholder="example@example.com" />
            <button className={styles.submit_btn}>SUBMIT</button>
          </div>
          <button className={styles.download_app_btn}>DOWNLOAD THE APP</button>
          <div className={styles.social_links}>
            <Link to="#">FOLLOW US</Link>
            <IconContext.Provider value={{ size: "1.8rem" }}>
              <div className={styles.fb_icon}>
                <FaFacebookF />
              </div>
              <div className={styles.insta_icon}>
                <SiInstagram />
              </div>
              <div className={styles.youtube_icon}>
                <IoLogoYoutube />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export { Footer };
