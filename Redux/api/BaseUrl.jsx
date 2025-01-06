import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const BaseUrl = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
});
