import { InitStateType } from "../types/typeInitState";
import { createSlice } from "@reduxjs/toolkit";
import { ActionPayloadType } from "../types/typeAction";

export const initialState: InitStateType = {
  todos: [
  ],
  completedTodos: [],
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
      const { id, done } = action.payload;
      const updatedTodos = state.todos.filter(todo => todo.id !== id);

      if (done === true) {
        return {
          ...state,
          todos: updatedTodos,
          completedTodos: state.completedTodos.filter(todo => todo.id !== id),
        };
      }

      return {
        ...state,
        todos: updatedTodos
      };
    },
    COMPLETED_TODO: (state: InitStateType, action: ActionPayloadType) => {
      return {
        ...state,
        completedTodos: [...state.completedTodos, { ...action.payload, done: true }],
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, done: true };
          }
          return todo;
        })
      }
    },
    REMOVE_COMPLETED_TODO: (state: InitStateType, action: ActionPayloadType) => {
      return {
        ...state,
        completedTodos: state.completedTodos.filter(el => el.id !== action.payload.id),
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, done: false };
          }
          return todo;
        })
      }
    }
  }
})

export const { ADD_TODO, REMOVE_TODO, COMPLETED_TODO, REMOVE_COMPLETED_TODO } = todoSlice.actions;
export const { reducer: todoReducer } = todoSlice;