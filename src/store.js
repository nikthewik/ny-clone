import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./features/query/querySlice.jsx";
import toggleReducer from "./features/toggle/toggleSlice.jsx";
import dropdownReducer from "./features/dropdown/dropdownSlice.jsx";

const store = configureStore({
  reducer: {
    query: queryReducer,
    toggle: toggleReducer,
    dropdown: dropdownReducer,
  },
});

export default store;
