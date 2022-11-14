import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reverseReducer from "./reverse";
import archiveReducer from "./archive";
import userReducer from "./user";
import friendReducer from "./friend";
import webrtcReducer from "./webrtc";
export const store = configureStore({
  reducer: {
    reverse: reverseReducer,
    archive: archiveReducer,
    user: userReducer,
    friend: friendReducer,
    webrtc:webrtcReducer
  },
});

export default store;
