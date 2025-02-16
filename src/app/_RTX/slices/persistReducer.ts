import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import products from "./productsSlice";
import categories from "./categoriesSlice";
import cat_id from "./categoryIdSlice";
import cart from "./cartSlice";
const allReducers = combineReducers({
  categories,
  cart, 
  cat_id,
  products,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, allReducers);
export default persistedReducer;
