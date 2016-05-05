import React, { PropTypes } from 'react';
import styles from './items.css';

export default function Items(props) {
  return (
    <div className={styles.items}>
      {props.items.map((item, index) =>
        <img className={styles.item} key={index}role="presentation" src={item.src} />
      )}
    </div>
  );
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
};
