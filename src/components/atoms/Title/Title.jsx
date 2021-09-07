import React from 'react';
import styles from './Title.module.css';

const Title = ({ children, color, size }) => (
  <span className={`${styles[color]} ${styles[size]}`}>{children}</span>
);

export default Title;
