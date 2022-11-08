import { combineReducers, configureStore } from "@reduxjs/toolkit";
import archiveReducer from "./archive";

export const store = configureStore({
  reducer: {
    archive: archiveReducer,
  },
});

export default store;
