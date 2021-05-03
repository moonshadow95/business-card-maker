import React from 'react';

const CardAddForm = ({ card }) => {
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

  return (
    <form>
      <input type="text" name="name" value={name} />
      <input type="text" name="company" value={company} />
      <input type="text" name="theme" value={theme} />
    </form>
  );
};

export default CardAddForm;
