import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // isOpen: false,
  info: {
    archiveId: "",
    stuffs: [],
    details: null, // 폴라로이드 오브젝트에서 글 상세 보기 할 때, 내가 어떤 글을 보고 있는지
  },
  editBtn: false,
  travelWriteIsOpen: false,
  travelReadIsOpen: false,
  annivWriteIsOpen: false,
  annivReadIsOpen: false,
  diaryWriteIsOpen: false,
  diaryReadIsOpen: false,
  modalIsOpen: false,
  isCampfireOn: 0,
  article: {
    // 노트북 오브젝트에서 내가 글을 작성할 때, 어떤 인풋을 주었는지
    title: "",
    content: "",
    memoryDate: `${new Date()}`,
  },
  travel: {
    articleList: [],
    timelines: [],
  },
  anniv: {
    articleList: [],
    timelines: [],
  },
  diary: {
    articleList: [],
    timelines: [],
  },
  selectStuff: 0,
  isCardOpen: false,
};

const reducers = {
  setInfo: (state, action) => {
    state.info = action.payload;
  },
  setEditBtn: (state, action) => {
    state.editBtn = !state.editBtn;
  },
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
  setModalIsOpen: (state, action) => {
    state.modalIsOpen = !state.modalIsOpen;
  },
  setCampfireOn: (state, action) => {
    state.isCampfireOn = action.payload;
  },
  createArticle: (state, action) => {
    state.article = action.payload;
  },
  setTravel: (state, action) => {
    state.travel = action.payload;
  },
  setAnniv: (state, action) => {
    state.anniv = action.payload;
  },
  setDiary: (state, action) => {
    state.diary = action.payload;
  },
  setSelectStuff: (state, action) => {
    state.selectStuff = action.payload;
  },
  setIsCardOpen: (state, action) => {
    state.isCardOpen = !state.isCardOpen;
  },
};

export const reverseSlice = createSlice({
  name: "reverse",
  initialState,
  reducers,
});

export const {
  setInfo,
  setEditBtn,
  setTravelWriteIsOpen,
  setTravelReadIsOpen,
  setAnnivWriteIsOpen,
  setAnnivReadIsOpen,
  setDiaryWriteIsOpen,
  setDiaryReadIsOpen,
  setModalIsOpen,
  setCampfireOn,
  createArticle,
  setTravel,
  setAnniv,
  setDiary,
  setSelectStuff,
  setIsCardOpen,
} = reverseSlice.actions;

export default reverseSlice.reducer;
