import {
  RECEIVED_ITEM_DATA,
} from '../../constants';

const initialState = {
  itemName: '',
  pictureURL: '',
  quantity: 0,
  price: 0,
  prevPrice: 0
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_ITEM_DATA:
      return action.data;
    default:
      return state;
  }
}
