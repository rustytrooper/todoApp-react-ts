import { InitStateType } from "../types/typeInitState";
import { createSlice } from "@reduxjs/toolkit";
import { ActionPayloadType } from "../types/typeAction";

export const initialState: InitStateType = {
  todos: [
    { id: 1, text: 'sleep' },
    { id: 2, text: 'code' },
    { id: 3, text: 'repeat' }
  ]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    ADD_TODO: (state: InitStateType, action: ActionPayloadType) => {
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    },
    REMOVE_TODO: (state: InitStateType, action: ActionPayloadType) => {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      }
    }
  }
})

export const { ADD_TODO, REMOVE_TODO } = todoSlice.actions;
export const { reducer: todoReducer } = todoSlice;