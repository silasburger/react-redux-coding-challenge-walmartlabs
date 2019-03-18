import { APPLY_DISCOUNT, RECEIVED_PRICING_DATA } from '../../constants';

const initialState = {};

export default function pricingReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_PRICING_DATA:
      return action.data;
      break;
    case APPLY_DISCOUNT:
      break;
    default:
      return state;
  }
}
