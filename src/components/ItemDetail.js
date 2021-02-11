import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item, onClickingDelete } = props; // Object Destructuring //

  return (
    <>
      <h1>Item Details</h1>
      <h3>{item.name}</h3>
      <h4>{item.description}</h4>
      <h4>{item.quantity}</h4>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={ () => onClickingDelete(item.id) }>Remove Item</button>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;