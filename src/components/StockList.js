import React from 'react';
import StockItem from './StockItem';
import PropTypes from 'prop-types';

function StockList(props) {
  return (
    <>
      {props.stockList.map((stockItem) =>
        <StockItem 
          whenItemClicked = { props.onItemSelection }
          name={stockItem.name}
          description={stockItem.description}
          quantity={stockItem.quantity}
          key={stockItem.id}
          id={stockItem.id}/>
      )}
    </>
  );
}

StockList.propTypes = {
  stockList: PropTypes.array,
  onItemSelection: PropTypes.func

}

export default StockList;