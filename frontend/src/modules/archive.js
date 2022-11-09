import { createSlice } from "@reduxjs/toolkit";
import * as THREE from "three";

const initialState = {
  isOpen: false,
  isCampfireOn: 0,
};

const reducers = {
  setOpen: (state, action) => {
    state.isOpen = !state.isOpen;
  },
  setCampfireOn: (state, action) => {
    state.isCampfireOn = action.payload;
  },
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers,
});

export const { setOpen, setCampfireOn } = archiveSlice.actions;

export default archiveSlice.reducer;
