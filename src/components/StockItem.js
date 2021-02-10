import React from 'react';
import PropTypes from 'prop-types';

function StockItem(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.quantity}</p>
    </>
  );
}

StockItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default StockItem;

