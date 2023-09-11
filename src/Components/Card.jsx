import React, { require } from "react";
import styles from "./Card.module.css";
export const Card = ({ items }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeading}>
        <img src={items.image} alt="logo" />
        <p>{items.heading}</p>
      </div>
      <div className={styles.cardLabel}>
        <p>{items.label}</p>
      </div>
    </div>
  );
};
