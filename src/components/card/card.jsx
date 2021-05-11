import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  // deconstructing => card., card. 반복을 피함
  const DEFAULT_IMG = '/images/default_logo.png';
  const { name, company, theme, title, email, message, fileURL } = card;
  const url = fileURL || DEFAULT_IMG;
  return (
    <li className={`${styles.card} ${getThemeStyle(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>
          <i className="fab fa-connectdevelop"></i>
          {message}
        </p>
      </div>
    </li>
  );
};

// theme에 맞춰 스타일 설정
function getThemeStyle(theme) {
  switch (theme) {
    case 'light':
      return styles.light;
    case 'dark':
      return styles.dark;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`Invalid theme: ${theme}`);
  }
}

export default Card;
