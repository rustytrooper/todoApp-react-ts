export type TodoType = {
  id: string,
  text: string,
  done: boolean
}

export type InitStateType = {
  todos: TodoType[],
  completedTodos: TodoType[],
}