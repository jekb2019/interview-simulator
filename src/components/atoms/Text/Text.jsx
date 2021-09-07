import React from 'react';
import styles from './Text.module.css';

const Text = ({ children, color, size }) => (
  <span className={`${styles[color]} ${styles[size]}`}>{children}</span>
);

export default Text;
