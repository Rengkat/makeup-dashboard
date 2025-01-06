import { createSlice } from "@reduxjs/toolkit";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  isUserLoggedIn,
  removeUserFromLocalStorage,
} from "../Hooks/localStorage";

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: getUserFromLocalStorage(),
    isUserLoggedIn: isUserLoggedIn(),
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
      removeUserFromLocalStorage();
    },
  },
});
export const { login, logout } = appSlice.actions;
export default appSlice.reducer;
