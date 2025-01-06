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
    loginUser: (state, action) => {
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
      state.isUserLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
      removeUserFromLocalStorage();
    },
  },
});
export const { loginUser, logout } = appSlice.actions;
export default appSlice.reducer;
