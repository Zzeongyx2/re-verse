import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // isOpen: false,
  travelWriteIsOpen: false,
  travelReadIsOpen: false,
  annivWriteIsOpen: false,
  annivReadIsOpen: false,
  diaryWriteIsOpen: false,
  diaryReadIsOpen: false,
  isCampfireOn: 0,
  article: {
    title: "",
    content: "",
    memoryDate: `${new Date()}`,
  },
};

const reducers = {
  setTravelWriteIsOpen: (state, action) => {
    state.travelWriteIsOpen = !state.travelWriteIsOpen;
  },
  setTravelReadIsOpen: (state, action) => {
    state.travelReadIsOpen = !state.travelReadIsOpen;
  },
  setAnnivWriteIsOpen: (state, action) => {
    state.annivWriteIsOpen = !state.annivWriteIsOpen;
  },
  setAnnivReadIsOpen: (state, action) => {
    state.annivReadIsOpen = !state.annivReadIsOpen;
  },
  setDiaryWriteIsOpen: (state, action) => {
    state.diaryWriteIsOpen = !state.diaryWriteIsOpen;
  },
  setDiaryReadIsOpen: (state, action) => {
    state.diaryReadIsOpen = !state.diaryReadIsOpen;
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

export const {
  setTravelWriteIsOpen,
  setTravelReadIsOpen,
  setAnnivWriteIsOpen,
  setAnnivReadIsOpen,
  setDiaryWriteIsOpen,
  setDiaryReadIsOpen,
  setCampfireOn,
  createArticle,
} = reverseSlice.actions;

export default reverseSlice.reducer;
