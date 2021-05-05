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
      id: 1,
      name: 'Ji Soo',
      company: 'HoduBoom',
      theme: 'colorful',
      title: 'Patissiere',
      email: 'js1008@naver.com',
      message: "I'm gonna be rich",
      fileName: 'Photo_soo',
      fileURL: '',
    },
    {
      id: 2,
      name: 'Kwang Su',
      company: 'HappyTree',
      theme: 'light',
      title: 'Interior contractor',
      email: 'k_su@naver.com',
      message: 'I want the Mercedes-Benz',
      fileName: 'Photo_su',
      fileURL: '',
    },
    {
      id: 3,
      name: 'Ji Soo',
      company: 'HoduBoom',
      theme: 'dark',
      title: 'Patissiere',
      email: 'js1008@naver.com',
      message: "I'm gonna be rich",
      fileName: 'Photo_soo',
      fileURL: '',
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
