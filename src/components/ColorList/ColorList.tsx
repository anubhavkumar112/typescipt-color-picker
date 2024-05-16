import React from 'react';
import styles from './ColorList.module.css';

interface ColorListProps {
  colors: string[];
  selectColorHandler: (color: string) => void;
}

const ColorList: React.FC<ColorListProps> = ({ colors, selectColorHandler }) => {
  const circleColors = colors.map((color, index) => (
    <button
      key={index}
      className={`${styles.colorItem} m-2`}
      style={{ backgroundColor: color }}
      onClick={() => selectColorHandler(color)}
    ></button>
  ));

  return <div className={styles.colorList}>{circleColors}</div>;
};

export default ColorList;
