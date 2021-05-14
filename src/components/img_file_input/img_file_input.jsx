import React, { memo, useRef, useState } from 'react';
import styles from './img_file_input.module.css';

const ImgFileInput = memo(({ imgUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onInputChange = async (event) => {
    setLoading(true);
    const uploaded = await imgUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onInputChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.img : styles.noimg}`}
          onClick={onButtonClick}
        >
          <i className={`fas fa-file-${name ? 'image' : 'upload'}`}></i>
          {name || 'Upload image'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
});
export default ImgFileInput;
