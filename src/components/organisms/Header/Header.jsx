import React from 'react';
import Text from '../../atoms/Text/Text';
import Title from '../../atoms/Title/Title';
import styles from './Header.module.css';

const Header = ({ color }) => (
  <div className={`${styles.header} ${styles[color]}`}>
    <Title color="black" size="medium">
      Dashboard
    </Title>
    <Text color="black" size="medium">
      Hello Jason
    </Text>
  </div>
);

export default Header;
