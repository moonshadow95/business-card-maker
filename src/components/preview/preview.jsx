import React from 'react';
import Card from '../card/card';
import styles from './preivew.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    {Object.keys(cards).map((key) => (
      <Card key={key} card={cards[key]} />
    ))}
  </section>
);

export default Preview;
