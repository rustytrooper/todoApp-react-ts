import AddTodoForm from "../AddTodo/AddTodoForm";
import OneTodoForm from "../OneTodoForm/OneTodoForm";
import { StateStoreType } from "../../types/typeState";
import { useSelector } from "react-redux";

export default function Card() {
  const todo = useSelector((state: StateStoreType) => state.todos.todos)
  return (
    <div className="card">
      <AddTodoForm />
      <div className="card-todos-wrapper">
        <ul className="card-ul">
          {todo.map((el) => {
            return (
              <li key={el.id}>
                <OneTodoForm text={el.text} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
} 