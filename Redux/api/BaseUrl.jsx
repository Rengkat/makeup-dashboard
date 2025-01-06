import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const BaseUrl = fetchBaseQuery({
  baseUrl: "https://api.fullybeauty.com",
  credentials: "include",
});
