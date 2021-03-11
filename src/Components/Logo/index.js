import React from "react";
import BotinBurger from "./BotinBurger.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <h1>
      <>
        <img src={BotinBurger} className={styles.img} />
      </>
    </h1>
  );
};

export default Logo;
