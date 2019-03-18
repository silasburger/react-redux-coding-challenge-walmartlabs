import { getPurchaseData } from './mocks/purchaseDataMock';
import { RECEIVED_PURCHASE_DATA, FETCH_PURCHASE_DATA_FAILED, LOADING_PURCHASE_DATA } from './constants';

export function fetchPurchaseData() {
  return function(dispatch) {
    dispatch(LOADING_PURCHASE_DATA);
    getPurchaseData()
      .then(response => dispatch(RECEIVED_PURCHASE_DATA))
      .catch(response => dispatch(FETCH_PURCHASE_DATA_FAILED))
  };
}
