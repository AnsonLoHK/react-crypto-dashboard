// CryptoApiProject 實際引用的store
import { configureStore } from "@reduxjs/toolkit";

import { useGetCryptosQuery } from "../services/cryptoApi";
//  0627 測試 REDUCER
import { counterReducer } from "./reducer/reducerStandard";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [useGetCryptosQuery.reducerPath]: useGetCryptosQuery.reducer,
    [useGetCryptosQuery.reducerPath]: useGetCryptosQuery.counterReducer, //reducer1
    // reducer2 ex: counter:counterReducer
  },
});

// ex: 此package沒用到
// import logger from "redux-logger";
// 中間建範例
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

// We need to configure our store. So here is how we do it.
// export default store({
//   reducer: {
//     [myApi.reducerPath]: myApi.reducer,
//   },
// });
