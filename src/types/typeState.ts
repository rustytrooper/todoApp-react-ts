import { InitStateType } from "./typeInitState"
import { Reducer } from "@reduxjs/toolkit"

export type StateType = {
  todos: Reducer<InitStateType>
}