import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./theme";

const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
  },
});

export default store;
