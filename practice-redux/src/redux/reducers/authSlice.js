// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.id = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.id = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
