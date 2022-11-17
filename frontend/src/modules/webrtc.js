import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  micCheck: true,
  headCheck: true,
  bgmCheck: true,
  musicTheme: 0,
  // bgmList: {
  //   theme1:
  //     "https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/A-Picnic-With-My-Family_AdobeStock_452603097_preview.m4a",
  //   theme2:
  //     "https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/We-Wish-You-A-Merry-Christmas_AdobeStock_353746933_preview.m4a",
  //   theme3:
  //     "https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/Sweet-Mood_AdobeStock_452607713_preview.m4a",
  //   theme4:
  //     "https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/Emotional-Cinematic-Music-Box_AdobeStock_528505763_preview.m4a",
  //   theme5:
  //     "https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/TheCats.m4a",
  // },
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
