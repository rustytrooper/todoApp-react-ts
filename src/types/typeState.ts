import { InitStateType } from "./typeInitState"
// import { Reducer } from "@reduxjs/toolkit"
import { TodoType } from "./typeInitState"


export type StateType = {
  // todos: Reducer<InitStateType>[]
  todos: InitStateType[]
}
export type StateStoreType = {
  todos: {
    todos: TodoType[]
  }
}