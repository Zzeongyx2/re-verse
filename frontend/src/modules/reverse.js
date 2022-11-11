import { createSlice } from "@reduxjs/toolkit";
import * as THREE from "three";

const initialState = {
  isOpen: false,
  isCampfireOn: 0,
  article: {
    title: "",
    content: "",
    memoryDate: `${new Date()}`,
  },
};

const reducers = {
  setOpen: (state, action) => {
    state.isOpen = !state.isOpen;
  },
  setCampfireOn: (state, action) => {
    state.isCampfireOn = action.payload;
  },
  createArticle: (state, action) => {
    state.article = action.payload;
    // state.article.title = action.payload;
    // state.article.content = action.payload;
    // state.article.memoryDate = action.payload;
  },
};

export const reverseSlice = createSlice({
  name: "reverse",
  initialState,
  reducers,
});

export const { setOpen, setCampfireOn, createArticle } = reverseSlice.actions;

export default reverseSlice.reducer;
