import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type LoginFormState = {
  id: string;
  password: string;
};
export type SignupState = LoginFormState & { name: string };

const initialState: LoginFormState = { id: "", password: "" };
// createSlice() : 하나의 상태(state) 를 관리하기 위한 redux 모듈을 한번에 만들어주는 함수
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginFormState>) => {
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
    logout: (state) => {
      ((state.id = ""), (state.password = ""));
    },
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
