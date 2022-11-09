import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reverseReducer from "./reverse";

export const store = configureStore({
  reducer: {
    reverse: reverseReducer,
  },
});

export default store;
