import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <p>&copy; Nik Peleshatyi - 2021</p>
      <p>
        Fullstack <span className={styles.red}>Ya</span>Tube Adaptation
      </p>
    </footer>
  );
};

export default Footer;
