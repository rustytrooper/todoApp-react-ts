import { useSelector } from "react-redux"
import { StateStoreType } from "../../types/typeState"


export default function Counter() {
  const incompletedTodos = useSelector((state: StateStoreType) => state.todos.todos.filter(todo => !todo.done));
  const completedTodos = useSelector((state: StateStoreType) => state.todos.completedTodos)

  return (
    <div className="counter" id="counter">
      <p>Completed: {completedTodos.length}</p>
      <p>Incompleted: {incompletedTodos.length}</p>
    </div>
  )
}