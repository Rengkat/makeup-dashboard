import { createSlice } from "@reduxjs/toolkit/query/react";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = appSlice.actions;
