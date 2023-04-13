import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Redux/reducers/user.reducer";
import { cartReducer } from "./Redux/reducers/cart.reducer";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
