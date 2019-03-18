import { combineReducers } from "redux";
import purchaseReducer from "./containers/PurchaseSummary/reducers/purchaseReducer";
import priceReducer from "./containers/PurchaseSummary/reducers/priceReducer";

export default combineReducers({
  prices: priceReducer,
  product: purchaseReducer
});
