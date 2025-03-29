import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import postSlice from "./postSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postSlice, // Added postSlice
  },
});

export default store;
