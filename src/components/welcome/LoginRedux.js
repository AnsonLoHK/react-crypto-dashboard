// login 是 welcome 页面的一个模块 (暫時專案還未引用 0628)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  authentication: false,
};

// 0628 內文要改
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      if (state.username == "user" && state.password == "password") {
        state.authentication = true;
      } else {
        state.authentication = false;
      }
    },
    setUsername: (state) => {},
    setPassword: (state) => {},
  },
});
export const { login, setUsername, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
