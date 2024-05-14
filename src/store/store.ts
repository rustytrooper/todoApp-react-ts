import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers";

export const store = configureStore({ // здесь настроила store для доступа к управлению состоянием через хук useSelector
  reducer: {
    todos: todoReducer,
  }
})