import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item } = props; // Object Destructuring //

  return (
    <>
      <h1>Item Details</h1>
      <h3>{item.name}</h3>
      <h4>{item.description}</h4>
      <h4>{item.quantity}</h4>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;