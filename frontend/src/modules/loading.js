import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingPage: false,
};

const reducers = {
  setLoadingPage: (state, action) => {
    state.loadingPage = action.payload;
  },
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers,
});

export const { setLoadingPage } = loadingSlice.actions;

export default loadingSlice.reducer;
