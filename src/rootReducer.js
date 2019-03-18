import { combineReducers } from "redux";
import itemReducer from "./containers/PurchaseSummary/reducers/itemReducer";
import pricingReducer from "./containers/PurchaseSummary/reducers/pricingReducer";

export default combineReducers({
  pricing: pricingReducer,
  item: itemReducer
});
