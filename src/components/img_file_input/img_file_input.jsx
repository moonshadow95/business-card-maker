import React, { useRef } from 'react';
import styles from './img_file_input.module.css';

const ImgFileInput = ({ imgUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onInputChange = async (event) => {
    const uploaded = await imgUploader.upload(event.target.files[0]);
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
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'Upload image'}
      </button>
    </div>
  );
};
export default ImgFileInput;
