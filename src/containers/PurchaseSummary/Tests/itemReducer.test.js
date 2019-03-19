import ItemReducer from '../reducers/itemReducer';
import { RECEIVED_ITEM_DATA } from '../constants';

const initialState = {
  itemName: '',
  pictureURL: '',
  quantity: 0,
  price: 0,
  prevPrice: 0
};

const itemData = {
  itemName: 'OFM Essentials Racecar-Style Leather Gaming Chair, Green',
  pictureURL:
    'https://i5.walmartimages.com/asr/79916c35-3293-48ff-acff-be325b2e4c84_2.ef5b1bd1451de6b63a7c20d2485d56c6.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
  quantity: 1,
  price: 99.11,
  prevPrice: 102.96
};

describe('item reducer', () => {
  it('should return the initial state', () => {
    expect(ItemReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVED_ITEM_DATA', () => {
    expect(
      ItemReducer(initialState, {
        type: RECEIVED_ITEM_DATA,
        data: itemData
      })
    ).toEqual(itemData);
  });
});
