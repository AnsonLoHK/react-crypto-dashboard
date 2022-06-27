// CryptoApiProject 實際引用的store
import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from "@reduxjs/toolkit/query";

import { useGetCryptosQuery } from "../services/cryptoApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [useGetCryptosQuery.reducerPath]: useGetCryptosQuery.reducer,
  },
});

// We need to configure our store. So here is how we do it.
// export default store({
//   reducer: {
//     [myApi.reducerPath]: myApi.reducer,
//   },
// });
