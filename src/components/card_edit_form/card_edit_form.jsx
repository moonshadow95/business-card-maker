import React from 'react';
import Button from '../button/button';
import ImgFileInput from '../img_file_input/img_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
  } = card;

  const onsubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme">
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImgFileInput name="Add Image" />
      </div>
      <div className={styles.button}>
        <Button name="Delete" onClick={onsubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
