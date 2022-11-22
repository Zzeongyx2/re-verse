import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterThree: true,
  characterOne: false,
  charactereye: false,
  keyW: false,
  keyA: false,
  keyS: false,
  keyD: false,
};

const reducers = {
  setOnThree: (state, action) => {
    state.characterThree = true;
    state.characterOne = false;
    state.charactereye = false;
  },
  setOnOne: (state, action) => {
    state.characterThree = false;
    state.characterOne = true;
    state.charactereye = false;
  },
  setEye: (state, action) => {
    state.characterThree = false;
    state.characterOne = false;
    state.charactereye = true;
  },
  setKeyW: (state, action) => {
    state.keyW = action.payload;
  },
  setKeyA: (state, action) => {
    state.keyA = action.payload;
  },
  setKeyS: (state, action) => {
    state.keyS = action.payload;
  },
  setKeyD: (state, action) => {
    state.keyD = action.payload;
  },
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers,
});

export const { setOnThree, setOnOne, setEye, setKeyW, setKeyA, setKeyS, setKeyD } =
  cameraSlice.actions;

export default cameraSlice.reducer;
