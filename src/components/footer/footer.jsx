import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>Make your business card</p>
    <i className="far fa-address-card"></i>
  </footer>
));

export default Footer;
