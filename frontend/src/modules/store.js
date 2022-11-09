import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reverseReducer from "./reverse";
import archiveReducer from "./archive";

export const store = configureStore({
  reducer: {
    reverse: reverseReducer,
    archive: archiveReducer,
  },
});

export default store;
