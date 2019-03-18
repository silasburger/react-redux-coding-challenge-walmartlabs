import { getPurchaseData } from '../../mocks/purchaseDataMock';
import {
  RECEIVED_PURCHASE_DATA,
  FETCH_PURCHASE_DATA_FAILED,
  LOADING_PURCHASE_DATA
} from '../../constants';

const initialState = {};

export default function purchaseReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_PURCHASE_DATA:
      break;
    case FETCH_PURCHASE_DATA_FAILED:
      break;
    case LOADING_PURCHASE_DATA:
      break;
    default:
      break;
  }
}
