import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'ChulJong',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'last_enemy@naver.com',
      message: 'go for it',
      fileName: 'chuljong',
      fileURL: 'chuljong.png',
    },
    {
      id: '2',
      name: 'ChulJong',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'last_enemy@naver.com',
      message: 'go for it',
      fileName: 'chuljong',
      fileURL: null,
    },
    {
      id: '3',
      name: 'ChulJong',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'last_enemy@naver.com',
      message: 'go for it',
      fileName: 'chuljong',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
