// import { PropsFormType } from "../../types/typePropsCard"
import { useState, FormEventHandler } from "react"
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../store/reducers";
import { TodoType } from "../../types/typeInitState";
import randomNum from "../../helpers/randomNumber";

export default function AddTodoForm() {
  // const { onChange } = props;
  const [input, setInput] = useState('');
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
      dispatch(
        ADD_TODO(actionPayload)
      )
    }
  }

  return (
    <div>
      <h1>TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task..."></input>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}