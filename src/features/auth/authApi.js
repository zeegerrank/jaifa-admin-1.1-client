import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/api/" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ username, password }) => ({
        url: "register",
        method: "POST",
        body: { username, password },
      }),
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "register",
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});
