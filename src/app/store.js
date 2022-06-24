// Redux Toolkit Example 0624
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "13",
  initialSate: {
    value: 0,
  },
  reducer: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

// 初始化Store
const store = configureStore({
  reducer: counterSlice.reducer,
});
export { store };
