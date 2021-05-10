import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  // 유저가 있다면 maker화면으로
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <h1 className={styles.title}>Login with</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            className={`${styles.button} ${styles.google}`}
            onClick={onLogin}
          >
            <i className="fab fa-google"></i>Google
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={`${styles.button} ${styles.github}`}
            onClick={onLogin}
          >
            <i className="fab fa-github"></i>Github
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={`${styles.button} ${styles.facebook}`}
            onClick={onLogin}
          >
            <i className="fab fa-facebook-square"></i>Facebook
          </button>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default Login;
