import { createSlice } from "@reduxjs/toolkit";
import * as THREE from "three";

const initialState = {
  myArchiveList: [],
  friendArchiveList: [],
  likeArchiveList: [],
};

const reducers = {
  setMyArchiveList: (state, action) => {
    state.myArchiveList = action.payload;
  },
  setFriendArchiveList: (state, action) => {
    state.friendArchiveList = action.payload;
  },
  setLikeArchiveList: (state, action) => {
    state.likeArchiveList = action.payload;
  },
};

export const reverseSlice = createSlice({
  name: "archive",
  initialState,
  reducers,
});

export const { setMyArchiveList, setFriendArchiveList, setLikeArchiveList } = reverseSlice.actions;

export default reverseSlice.reducer;
