import React from 'react';
import styles from './ColorBox.module.css';

interface Props {
  selectedColor: string;
}

const ColorBox: React.FC<Props> = ({ selectedColor }) => {
  return (
    <div
      className={styles.colorBox}
      style={{ backgroundColor: selectedColor }}
    ></div>
  );
};

export default ColorBox;
