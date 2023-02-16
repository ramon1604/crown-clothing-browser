import {
  configureStore,
  combineReducers,
} from "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.2/+esm";

import directoriesReducer from "../store/slices/directories/directoriesSlice.js";
import userReducer from "../store/slices/user/userSlice.js";
import cartReducer from "../store/slices/cart/cartSlice.js";
import productsReducer from "../store/slices/products/productsSlice.js";
import navigationReducer from "../store/slices/navigation/navigationSlice.js";

export const reducer = combineReducers({
  user: userReducer,
  directories: directoriesReducer,
  cart: cartReducer,
  products: productsReducer,
  navigation: navigationReducer,
});
globalObjects.reducer = reducer;

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
globalObjects.store = store;
