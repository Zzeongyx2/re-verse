import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUser: {
    nickname: "",
    message: "",
    avatar: "",
  },
};

const reducers = {
  setLoginUser: (state, action) => {
    state.loginUser = action.payload;
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { setLoginUser } = userSlice.actions;

export default userSlice.reducer;
