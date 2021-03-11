import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.conteiner}>
      <footer className={styles.contentFooter}>
        {/* Desenvolvido por : &nbsp; */}
        <a
          href="https://github.com/edilenefern"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edilene Fernandes
        </a>
        e &nbsp;&nbsp;
        <a
          href="https://github.com/silvassara"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sara Silva
        </a>
        &emsp;&emsp;
      </footer>
    </div>
  );
}

export default Footer;
