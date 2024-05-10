import { InitStateType } from "../types/typeInitState";
// import { ReducerType } from "../types/typeReducer";
import { createSlice } from "@reduxjs/toolkit";
import { ActionPayloadType } from "../types/typeAction";

const initialState: InitStateType = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    ADD_TODO: (state: InitStateType, action: ActionPayloadType) => {
      state.todos = [action.payload, ...state.todos]
    }
  }
})

export const { ADD_TODO } = todoSlice.actions;
export const todoReducer = todoSlice.reducer