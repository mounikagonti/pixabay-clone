import { configureStore } from "@reduxjs/toolkit";
import pixabayReducer from "../redux//slice/PixabaySlice";

export const store = configureStore({
  reducer: {
    pixabay: pixabayReducer,
  },
});
