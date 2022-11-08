import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  isOpen: false,
};

const reducers = {
  setIsOpen: (state, { payload: isOpen }) => {
    state.isOpen = isOpen;
  },
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setIsOpen } = archiveSlice.actions;

export default archiveSlice.reducer;
