import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reverseReducer from "./reverse";
import archiveReducer from "./archive";
import userReducer from "./user";
import friendReducer from "./friend";

export const store = configureStore({
  reducer: {
    reverse: reverseReducer,
    archive: archiveReducer,
    user: userReducer,
    friend: friendReducer,
  },
});

export default store;
