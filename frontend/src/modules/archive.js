import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myArchiveList: [],
  friendArchiveList: [],
  likeArchiveList: [],
  joinArchive: { members: [{ nickname: "" }] },
  lastArchive: { members: [{ nickname: "" }] },
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
  setJoinArchive: (state, action) => {
    state.joinArchive = action.payload;
  },
  setLastArchive: (state, action) => {
    state.lastArchive = action.payload;
  },
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers,
});

export const {
  setMyArchiveList,
  setFriendArchiveList,
  setLikeArchiveList,
  setJoinArchive,
  setLastArchive,
} = archiveSlice.actions;

export default archiveSlice.reducer;
