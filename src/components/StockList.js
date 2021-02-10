import React from 'react';
import StockItem from './StockItem';
import PropTypes from 'prop-types';

function StockList(props) {
  return (
    <>
      {props.stockList.map((stockItem, index) =>
        <StockItem name={stockItem.name}
          description={stockItem.description}
          quantity={stockItem.quantity}
          key={index}/>
      )}
    </>
  );
}

StockList.propTypes = {
  stockList: PropTypes.array
}

export default StockList;