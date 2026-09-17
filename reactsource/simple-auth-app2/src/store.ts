import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    //myCounter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
