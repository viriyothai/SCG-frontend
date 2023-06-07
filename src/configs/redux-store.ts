import { configureStore } from "@reduxjs/toolkit";
//import { post_slice } from "../redux";

export const store = configureStore({
  reducer: {
    //post: post_slice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
