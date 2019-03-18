import { getPurchaseData } from './mocks/purchaseDataMock';
import {
  RECEIVED_PRICING_DATA,
  RECEIVED_ITEM_DATA,
  APPLY_DISCOUNT
} from './constants';

export function fetchPurchaseData() {
  return function(dispatch) {
    getPurchaseData()
      .then(response => {
        dispatch(recievedPricingData(response.pricing));
        dispatch(recievedItemData(response.itemDetails))
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function recievedPricingData(data) {
  return { type: RECEIVED_PRICING_DATA, data };
}

export function recievedItemData(data) {
  return { type: RECEIVED_ITEM_DATA, data };
}

export function applyDiscount(discountCode) {
  return { type: APPLY_DISCOUNT, discountCode };
}
