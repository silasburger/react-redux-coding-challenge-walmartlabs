import { APPLY_DISCOUNT, RECEIVED_PRICING_DATA } from '../../constants';

const initialState = {};

export default function pricingReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_PRICING_DATA:
      return action.data;
    case APPLY_DISCOUNT:
      if(action.discountCode === 'DISCOUNT') {
        const newDiscount = Math.trunc((state.subtotal * 0.10) * 100) / 100;
        return {...state, discount: newDiscount, total: (state.subtotal - state.savings - newDiscount + state.tax)}
      }
      return state;
    default:
      return state;
  }
}
