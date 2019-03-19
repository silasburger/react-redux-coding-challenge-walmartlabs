import pricingReducer from '../reducers/pricingReducer';
import { RECEIVED_PRICING_DATA, APPLY_DISCOUNT } from '../constants';

const initialState = {
  subtotal: 0,
  previousPrice: 0,
  savings: 0,
  discount: 0,
  tax: 0,
  total: 0,
  zip: 0
};

const pricingData = {
  subtotal: 102.96,
  previousPrice: 120.99,
  savings: 3.85,
  discount: 0.0,
  tax: 8.92,
  total: 108.95,
  zip: 94702
};

describe('pricing reducer', () => {
  it('should return the initial state', () => {
    expect(pricingReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RECIEVED_PRICING_DATA', () => {
    expect(
      pricingReducer(initialState, {
        type: RECEIVED_PRICING_DATA,
        data: pricingData
      })
    ).toEqual(pricingData);
  });

  it('should handle APPLY_DISCOUNT', () => {
    expect(
      pricingReducer(pricingData, {
        type: APPLY_DISCOUNT,
        discountCode: 'DISCOUNT'
      })
    ).toEqual({
      subtotal: 102.96,
      previousPrice: 120.99,
      savings: 3.85,
      discount: 10.29,
      tax: 8.92,
      total: 97.74,
      zip: 94702
    });
  });
});
