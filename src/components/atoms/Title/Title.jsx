import React from 'react';
import styles from './Title.module.css';

const Title = ({ children, color, size }) => (
  <h1 className={`${styles[color]} ${styles[size]}`}>{children}</h1>
);

export default Title;
