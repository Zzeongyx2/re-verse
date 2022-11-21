import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import reverseReducer from "./reverse";
import archiveReducer from "./archive";
import userReducer from "./user";
import friendReducer from "./friend";
import webrtcReducer from "./webrtc";
import loadingReducer from "./loading";
import cameraReducer from "./camera";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: [
    "reverse",
    "archive",
    "user",
    "friend",
    "webrtc",
    "loading",
    "camera",
  ],
  // blacklist -> 그것만 제외합니다
};

const reducers = combineReducers({
  reverse: reverseReducer,
  archive: archiveReducer,
  user: userReducer,
  friend: friendReducer,
  webrtc: webrtcReducer,
  loading: loadingReducer,
  camera: cameraReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
