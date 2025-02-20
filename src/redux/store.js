import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categorySlice";
import uiReducer from "./reducers/uiSlice";
export const store = configureStore({
  reducer: {
    category: categoryReducer,
    ui: uiReducer,
  },
});

export default store;
