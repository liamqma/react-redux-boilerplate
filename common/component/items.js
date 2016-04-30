import React, { PropTypes } from 'react';

export default function Items(props) {
  return (
    <ul>
      {props.items.map((item, index) =>
        <li key={index} ><img role="presentation" src={item.src} /></li>
      )}
    </ul>
  );
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
};
