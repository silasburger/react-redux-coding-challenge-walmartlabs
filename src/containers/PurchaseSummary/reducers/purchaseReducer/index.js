import { getPurchaseData } from '../../mocks/purchaseDataMock';
import {FETCH_PURCHASE_DATA} from '../../constants';

const initialState = {};

export default function purchaseReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_PURCHASE_DATA:
      
      break;
  
    default:
      break;
  }
}