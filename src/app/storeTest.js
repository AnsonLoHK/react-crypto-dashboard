/**  RTK 範例結構用法 step2**/
import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from "@reduxjs/toolkit/query";
import { myApi } from "../services/apiSliceContent";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [myApi.reducerPath]: myApi.reducer,
  },
  //  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
