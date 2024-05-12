import { useState, FormEventHandler } from "react"
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../store/reducers";
import { TodoType } from "../../types/typeInitState";
import randomNum from "../../helpers/randomNumber";
import { useSelector } from "react-redux";
import { StateStoreType } from "../../types/typeState";
// import { IconName } from "react-icons/pi";


export default function AddTodoForm() {
  const [input, setInput] = useState('');
  const newTodos = useSelector((state: StateStoreType) => state.todos.todos)
  const dispatch = useDispatch()
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      alert('Add your task')
      setInput('')
      return
    } else {
      const actionPayload: TodoType = {
        id: randomNum(),
        text: input
      }
      dispatch(ADD_TODO(actionPayload)
      )
      setInput('')
      console.log(newTodos)
    }
  }

  return (
    <div className="Add-todo-div">
      <h1>TODO</h1>
      <form className="Add-todo-form" onSubmit={handleSubmit}>
        <input
          className="Add-todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ADD YOUR TASK . . ."></input>
        <button className="Add-todo-button" type="submit">ADD</button>
      </form>
    </div>
  )
}