import React from 'react';
import styles from './DashboardTemplate.module.css';
const DashboardTemplate = ({ header, grid }) => (
  <div className={styles.dashboard}>
    <header className={styles.header}>{header}</header>
    <div className={styles.contentWrapper}>
      <article className={styles.grid}>{grid}</article>
    </div>
  </div>
);

export default DashboardTemplate;
