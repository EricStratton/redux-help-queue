import stockListReducer from '../../reducers/stock-list-reducer';

describe ('stockListReducer', () => {

  let action;
    const stockData = {
      name: 'T-Shirt',
      description: 'Red t-shirts.',
      quantity: 20,
      id: 1
    };

  const currentState = {
    1: { name: 'T-Shirt',
    description: 'Red t-shirts.',
    quantity: 20,
    id: 1 },
    2: { name: 'Socks', 
    description: 'Stripped socks',
    quantity: 50,
    id: 2 }
  }

  test('Should return default state if there is no action passed into reducer', () => {
    expect(stockListReducer({}, { type: null })).toEqual({});
  });

  
  test('Should succesfully add new stock data to masterStockList', () => {
    const { name, description, quantity, id } = stockData;
    action = {
      type: 'ADD_STOCK',
      name: name, 
      description: description,
      quantity: quantity,
      id: id
    };

    expect(stockListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a stock item', () => {
    action = {
      type: 'DELETE_STOCK',
      id: 1
    };
    expect(stockListReducer(currentState, action)).toEqual({
      2: { name: 'Socks', 
      description: 'Stripped socks',
      quantity: 50, 
      id: 2 }
    });
  });

});