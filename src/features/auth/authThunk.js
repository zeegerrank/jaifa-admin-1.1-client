import { createAsyncThunk } from "@reduxjs/toolkit";import { useLoginMutation } from "../api/apiSlice";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await useLoginMutation(credentials);
  return response.data;
});
