import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isUser: false,
};

const reducers = {
  setOpen: (state, action) => {
    state.isOpen = !state.isOpen;
  },
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers,
});

export const { setOpen } = archiveSlice.actions;

export default archiveSlice.reducer;
