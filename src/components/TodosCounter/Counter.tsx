import { useSelector } from "react-redux"
import { StateStoreType } from "../../types/typeState"


export default function Counter() { // этот компонент будет отвечать за подсчет выполненных и невыполненных тасок
  const incompletedTodos = useSelector((state: StateStoreType) => state.todos.todos.filter(todo => !todo.done)); // здесь использую селектор для доступа к невыполненным таксам
  const completedTodos = useSelector((state: StateStoreType) => state.todos.completedTodos) // здесь выбираю из хранилища выполненные таски

  return ( // в возвращаемом компоненте отображаю длину полученного выше массива
    <div className="counter" id="counter">
      <p>Completed: {completedTodos.length}</p>
      <p>Incompleted: {incompletedTodos.length}</p>
    </div>
  )
}