import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await authApi.login(credentials);
  return response.data;
});

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export default authSlice.reducer;
