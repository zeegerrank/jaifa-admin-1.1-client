import { combineReducer } from "redux";
import authReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";

const rootReducer = combineReducer({
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
