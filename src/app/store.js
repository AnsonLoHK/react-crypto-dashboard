// Redux Toolkit Example 會用到
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// We need to configure our store. So here is how we do it.
// export default store({
//   reducer: {
//     [myApi.reducerPath]: myApi.reducer,
//   },
// });
