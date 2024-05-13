import { InitStateType } from "./typeInitState"
import { TodoType } from "./typeInitState"


export type StateType = {
  todos: InitStateType[]
}
export type StateStoreType = {
  todos: {
    todos: TodoType[],
    completedTodos: TodoType[],
    done: TodoType[]
  }
}