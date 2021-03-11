import React from "react";
import KitchenIcon from "./KitchenIcon.png";
import styles from "./iconkitchen.module.css";

const IconKitchen = () => {
  return (
    <h1>
      <figure>
        <img src={KitchenIcon} className={styles.img} />
      </figure>
    </h1>
  );
};

export default IconKitchen;