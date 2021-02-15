import stockListReducer from '../../reducers/stock-list-reducer';

describe ('stockListReducer', () => {
  test('Should return default state if there is no action passed into reducer', () => {
    expect(stockListReducer({}, { type: null })).toEqual({});
  });
});