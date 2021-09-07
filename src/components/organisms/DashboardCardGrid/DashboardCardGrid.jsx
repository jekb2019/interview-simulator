import React from 'react';
import { Children } from 'react';
import styles from './DashboardCardGrid.module.css';

const DashboardCardGrid = ({ children }) => (
  <div className={styles.grid}>
    {Children.map(children || null, (child, i) => {
      return (
        <div className={styles.card}>
          <child.type {...child.props} key={i} />
        </div>
      );
    })}
  </div>
);

export default DashboardCardGrid;
