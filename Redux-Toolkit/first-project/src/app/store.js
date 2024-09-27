import { configureStore } from "@reduxjs/toolkit";
import todoToReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoToReducer,
});
