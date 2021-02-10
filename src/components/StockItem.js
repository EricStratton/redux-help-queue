import React from 'react';
import PropTypes from 'prop-types';

function StockItem(props) {
  return (
    <>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        {/*<p>{props.description}</p>
        <p>{props.quantity}</p>*/}
      </div>
    </>
  );
}

StockItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default StockItem;

