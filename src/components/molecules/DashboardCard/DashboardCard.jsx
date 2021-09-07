import React from 'react';
import Title from '../../atoms/Title/Title';
import styles from './DashboardCard.module.css';

const DashboardCard = ({ title, color, onClick }) => (
  <div className={`${styles.card} ${styles[color]}`}>
    <Title color="black" size="big">
      {title}
    </Title>
  </div>
);

export default DashboardCard;
