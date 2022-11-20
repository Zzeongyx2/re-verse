import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  micCheck: true,
  headCheck: true,
  bgmCheck: true,
  musicTheme: 0,
};

const reducers = {
  setMicCheck: (state, action) => {
    state.micCheck = action.payload;
  },
  setHeadCheck: (state, action) => {
    state.headCheck = action.payload;
  },
  setBgmCheck: (state, action) => {
    state.bgmCheck = action.payload;
  },
  setMusicTheme: (state, action) => {
    state.musicTheme = action.payload;
  },
};

export const webrtcSlice = createSlice({
  name: "webrtc",
  initialState,
  reducers,
});

export const { setMicCheck, setHeadCheck, setBgmCheck, setMusicTheme } =
  webrtcSlice.actions;

export default webrtcSlice.reducer;
