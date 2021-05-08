import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  // login 컴포넌트에 있는 history의 state의 id
  const historyState = useHistory().state;

  // cards[1] == {id:1,name:'Jisoo,...
  const [cards, setCards] = useState({});

  // 카드를 사용자의 id별로 저장하여 사용한다.
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    // stopSync() 컴포넌트가 언마운트되면 실행
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
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
    cardRepository.saveCard(userId, newCard);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
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
