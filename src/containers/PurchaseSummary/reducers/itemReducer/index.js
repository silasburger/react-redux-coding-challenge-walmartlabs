import {
  RECEIVED_ITEM_DATA,
} from '../../constants';

const initialState = {};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_ITEM_DATA:
      return action.data;
    default:
      return state;
  }
}
