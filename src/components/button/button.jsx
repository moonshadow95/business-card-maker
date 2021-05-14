import React, { memo } from 'react';
import styles from './button.module.css';

const Button = memo(({ name, onClick }) => {
  let icon;
  const getIcon = (name) => {
    switch (name) {
      case 'Add':
        return (icon = 'plus');
      case 'Delete':
        return (icon = 'trash-alt');
      default:
        throw new Error('error');
    }
  };
  getIcon(name);
  return (
    <button className={styles.button} onClick={onClick}>
      <i className={`fas fa-${icon}`}></i>
      {name}
    </button>
  );
});

export default Button;
