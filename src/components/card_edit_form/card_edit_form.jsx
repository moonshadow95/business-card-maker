import React, { memo } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = memo(({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, theme, email, message, fileName } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();

    // 기존의 card를 복사, 새로운 오브젝트 만듦
    const newCard = {
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    updateCard(newCard);
  };

  const onsubmit = (event) => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        onChange={onChange}
        value={theme}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <div className={styles.button}>
        <Button name="Delete" onClick={onsubmit} />
      </div>
    </form>
  );
});

export default CardEditForm;
