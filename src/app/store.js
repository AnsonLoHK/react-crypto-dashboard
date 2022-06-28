// CryptoApiProject 實際引用的store
import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
// login 是 welcome 页面的一个模块
// import { loginReducer  } from "../components/welcome/LoginRedux";

// or export default configureStore
export const store = configureStore({
  reducer: {
    // login 是 welcome 页面的一个模块
    // login: loginReducer, reducer 2

    //把api自动生成的reducer加进入
    [cryptoApi.reducerPath]: cryptoApi.reducer, //reducer 1
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
