import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  micCheck: false,
  headCheck: false,
  bgmCheck:false,
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
};

export const webrtcSlice = createSlice({
  name: "webrtc",
  initialState,
  reducers,
});

export const { setMicCheck,setHeadCheck,setBgmCheck } = webrtcSlice.actions;

export default webrtcSlice.reducer;
