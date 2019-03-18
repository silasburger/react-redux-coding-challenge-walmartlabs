import { getPurchaseData } from './mocks/purchaseDataMock';
import {
  RECEIVED_PURCHASE_DATA,
  FETCH_PURCHASE_DATA_FAILED,
  LOADING_PURCHASE_DATA,
  APPLY_DISCOUNT
} from './constants';

export function fetchPurchaseData() {
  return function(dispatch) {
    dispatch(LOADING_PURCHASE_DATA);
    getPurchaseData()
      .then(response => dispatch(recievedPurchaseData(response)))
      .catch(err => dispatch(fetchPurchaseDataFailed(err)));
  };
}

export function recievedPurchaseData(data) {
  return { type: RECEIVED_PURCHASE_DATA, data };
}

export function fetchPurchaseDataFailed(err) {
  return { type: FETCH_PURCHASE_DATA_FAILED, err };
}

export function loadingPurchaseData() {
  return { type: LOADING_PURCHASE_DATA };
}

export function applyDiscount(discountCode) {
  return { type: APPLY_DISCOUNT, discountCode };
}
