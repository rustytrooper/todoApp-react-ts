import AddTodoForm from "../AddTodo/AddTodoForm";
import OneTodoForm from "../OneTodoForm/OneTodoForm";
import { StateStoreType } from "../../types/typeState";
import { useSelector } from "react-redux";

export default function Card() { // здесь инициализирую компонент Card
  const todo = useSelector((state: StateStoreType) => state.todos.todos) //использую хук useSelector для доступа к хранилищу состояния и последующего взаимодействия с его элементами
  return (
    <div className="card" id='card'>
      <AddTodoForm />
      <div className="card-todos-wrapper" id='card-wrapper'>
        <ul className="card-ul">
          {todo.map((el) => { // методом map прохожу по массиву таок пользователя и для каждой таски возвращаю разметку в формате элемента li, который имеет уникальный ключ
            /* в возвращаемой разметке вставляю компонет добавленной таски, в пропсах передаю текст и id каждой таски  */
            return (
              <li key={el.id}>
                <OneTodoForm text={el.text} id={el.id} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
} 