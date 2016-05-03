import React, { PropTypes } from 'react';
import styles from './items.css';

export default function Items(props) {
  return (
    <ul className={styles.items}>
      {props.items.map((item, index) =>
        <li className={styles.item} key={index} >1<img role="presentation" src={item.src} /></li>
      )}
    </ul>
  );
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
};
