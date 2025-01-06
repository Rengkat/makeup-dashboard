import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseUrl } from "./BaseUrl";
const AUTH_URL = "/auth";
export const AuthSliceApi = createApi({
  reducerPath: "authApi",
  baseQuery: BaseUrl,
  tagTypes: [],
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    reverifyEmail: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/new-verification`,
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        body: data,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
        body: {},
      }),
    }),
  }),
});
export const { useLoginMutation, useLogoutMutation } = AuthSliceApi;
