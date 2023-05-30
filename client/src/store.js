import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Redux/reducers/user.reducer";
import { cartReducer } from "./Redux/reducers/cart.reducer";
import { resetPassword } from "./Redux/reducers/resetPassword.reducer";
import { productReducer } from "./Redux/reducers/product.reducer";
import { searchReducer } from "./Redux/reducers/search.reducer";
import { shipmentReducer } from "./Redux/reducers/shipment.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  reset: resetPassword,
  search: searchReducer,
  shipment: shipmentReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
