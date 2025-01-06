import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./services/AppSlice";
import { AuthSliceApi } from "./api/AuthSliceApi";

export const store = configureStore({
  reducer: {
    app: appSlice,
    [AuthSliceApi.reducerPath]: AuthSliceApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthSliceApi.middleware),
});
