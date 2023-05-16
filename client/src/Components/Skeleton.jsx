import React from "react";
import styles from "../Styles/Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
      <div className={`${styles.skeleton} ${styles.skeletonRating}`} />
      <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
      <div className={`${styles.skeleton} ${styles.skeletonHighlights}`} />
      <div className={`${styles.skeleton} ${styles.skeletonPrice}`} />
      <div className={`${styles.skeleton} ${styles.skeletonButton}`} />
    </div>
  );
};

export { Skeleton };
