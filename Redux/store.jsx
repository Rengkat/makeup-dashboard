import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./services/AppSlice";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preloadedState,
});
