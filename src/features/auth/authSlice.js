import { createSlice } from "@reduxjs/toolkit";import { login } from "./authThunk";

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

export const selectAuthData = (state) => state.auth.data;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
