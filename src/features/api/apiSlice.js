import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/api/auth/" }),
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

export const { useRegisterMutation, useLoginMutation } = apiSlice;
