import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import { authSlice } from "@/features/auth/Login/authSlice.ts";

const preloadedToken = localStorage.getItem("token");

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  preloadedState: {
    auth: { token: preloadedToken },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
