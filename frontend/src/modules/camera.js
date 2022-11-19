import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterThree: true,
  characterOne: false,
  team: false,
  game: false,
};

const reducers = {
  setOnThree: (state, action) => {
    state.characterThree = true;
    state.characterOne = false;
    state.team = false;
    state.game = false;
  },
  setOnOne: (state, action) => {
    state.characterThree = false;
    state.characterOne = true;
    state.team = false;
    state.game = false;
  },
  setOnTeam: (state, action) => {
    state.team = action.payload;
  },
  setOnGame: (state, action) => {
    state.game = action.payload;
  },
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers,
});

export const { setOnThree, setOnOne, setOnTeam, setOnGame } =
  cameraSlice.actions;

export default cameraSlice.reducer;
