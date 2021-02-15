import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item, onClickingDelete, onClickingSell } = props; // Object Destructuring //
  let sellButton;
  let quantity;
  if (item.quantity !== 0) {
    quantity = <h4>{item.quantity}</h4>;
    sellButton = <button onClick={ () => onClickingSell(item, false) }>Sell Item</button>;
  } else {
    quantity = <h4><strong>Item out of stock</strong></h4>;
  };

  return (
    <>
      <h1>Item Details</h1>
      <h3>{item.name}</h3>
      <h4>{item.description}</h4>
      {quantity}
      {sellButton}
      <button onClick={ () => onClickingSell(item, true) }>Re-stock Item</button>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={ () => onClickingDelete(item.id) }>Remove Item</button>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default ItemDetail;