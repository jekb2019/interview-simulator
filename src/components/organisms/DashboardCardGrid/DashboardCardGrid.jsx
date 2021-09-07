import React from 'react';
import styles from './DashboardCardGrid.module.css';

const DashboardCardGrid = ({ children }) => (
  <div className={styles.grid}>
    {children.map((child) => (
      <div className={styles.card}>{child}</div>
    ))}
  </div>
);

export default DashboardCardGrid;
