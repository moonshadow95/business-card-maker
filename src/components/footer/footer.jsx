import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => (
  <footer className={styles.footer}>
    <p className={styles.title}>
      Make your business card<i className="far fa-address-card"></i>
    </p>
  </footer>
);

export default Footer;
