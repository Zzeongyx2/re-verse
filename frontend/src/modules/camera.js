import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterThree: true,
  characterOne: false,
  characterEye: false,
  keyPress: {
    keyW: false,
    keyA: false,
    keyS: false,
    keyD: false,
  },
  chatPress: false,
  position: { x: -30, y: 0, z: -30 },
};

const reducers = {
  setOnThree: (state, action) => {
    state.characterThree = true;
    state.characterOne = false;
    state.characterEye = false;
  },
  setOnOne: (state, action) => {
    state.characterThree = false;
    state.characterOne = true;
    state.characterEye = false;
  },
  setEye: (state, action) => {
    state.characterThree = false;
    state.characterOne = false;
    state.characterEye = true;
  },
  setKeyW: (state, action) => {
    state.keyPress.keyW = action.payload;
  },
  setKeyA: (state, action) => {
    state.keyPress.keyA = action.payload;
  },
  setKeyS: (state, action) => {
    state.keyPress.keyS = action.payload;
  },
  setKeyD: (state, action) => {
    state.keyPress.keyD = action.payload;
  },
  setPosition: (state, action) => {
    state.position = action.payload;
  },
  setReverseChatPress: (state, action) => {
    state.chatPress = action.payload;
  },
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers,
});

export const {
  setOnThree,
  setOnOne,
  setEye,
  setKeyW,
  setKeyA,
  setKeyS,
  setKeyD,
  setPosition,
  setReverseChatPress,
} = cameraSlice.actions;

export default cameraSlice.reducer;
