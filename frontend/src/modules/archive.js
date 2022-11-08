// import { createSlice } from "@reduxjs/toolkit";
// import { PURGE } from "redux-persist";

// const initialState = {
//   isOpen: false,
// };

// const reducers = {
//   setIsOpen: (state, { payload: isOpen }) => {
//     state.isOpen = isOpen;
//   },
// };

// export const archiveSlice = createSlice({
//   name: "archive",
//   initialState,
//   reducers,
//   extraReducers: (builder) => {
//     builder.addCase(PURGE, () => initialState);
//   },
// });

// export const { setIsOpen } = archiveSlice.actions;

// export default archiveSlice.reducer;

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
