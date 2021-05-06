import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    // cards[1] == {id:1,name:'Jisoo,...}
    1: {
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
    2: {
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
    3: {
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
  });

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

  const creadteOrUpdateCard = (newCard) => {
    // map을 이용하여 동일한 id를 가진 아이템을 찾으려면
    // 배열이 길어질수록 오래 걸리기 때문에 성능에 좋지 않다.
    // object의 key: value => object['key']
    // cards를 배열이아닌 오브젝트로 만들어서 card['key']를 이용한다.

    setCards((cards) => {
      // 기존의(setCards를 부르는 시점) cards object를 복사
      const updated = { ...cards };
      // newCard의 id가 key인 object를 newCard로 변경
      // id가 오브젝트에 없다면 새로운 것이 추가됨
      updated[newCard.id] = newCard;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={creadteOrUpdateCard}
          updateCard={creadteOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
