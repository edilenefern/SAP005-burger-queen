import React from "react";
import Botinburgerblack from "./Botinburgerblack.png";
import styles from "./iconhall.module.css";

const IconHall = () => {
  return (
    <h1>
      <figure>
        <img src={Botinburgerblack} className={styles.img} />
      </figure>
    </h1>
  );
};

export default IconHall;