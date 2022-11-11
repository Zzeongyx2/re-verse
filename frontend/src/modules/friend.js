import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friendList: [],
};

const reducers = {
  setFriendList: (state, action) => {
    state.friendList = action.payload;
  },
};

export const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers,
});

export const { setFriendList } = friendSlice.actions;

export default friendSlice.reducer;
