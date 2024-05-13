import { useState, FormEventHandler } from "react"
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../store/reducers";
import { TodoType } from "../../types/typeInitState";
import { useSelector } from "react-redux";
import { StateStoreType } from "../../types/typeState";
import Counter from "../TodosCounter/Counter";
import { nanoid } from "@reduxjs/toolkit";
import { PiMountainsDuotone, PiTreeEvergreenDuotone } from "react-icons/pi";
// import * as cssCard from '../Card/Card.css'


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
        id: nanoid(),
        text: input,
        done: false
      }
      dispatch(ADD_TODO(actionPayload)
      )
      setInput('')
      console.log(newTodos, 'newTodos')
    }
  }

  const toggleTheme = () => {
    const root = document.getElementById('root')
    const card = document.getElementById('card')
    const cardWrap = document.getElementById('card-wrapper')
    const counter = document.getElementById('counter')
    const addBtn = document.getElementById('add-btn')
    const toggle = document.getElementById('toggle')


    root?.classList.toggle('mountain')
    card?.classList.toggle('mountain')
    cardWrap?.classList.toggle('mountain')
    counter?.classList.toggle('mountain')
    addBtn?.classList.toggle('mountain')
    toggle?.classList.toggle('mountain')
  }

  return (
    <div className="Add-todo-div">
      <Counter />
      <h1>TODO</h1>
      <form className="Add-todo-form" onSubmit={handleSubmit}>
        <input
          className="Add-todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ADD YOUR TASK . . ."></input>
        <button className="Add-todo-button" id="add-btn" type="submit">ADD</button>
      </form>
      <div onClick={toggleTheme} className="toggle-theme" id="toggle">
        {document.getElementById('root')?.classList.contains('mountain') ? (<PiMountainsDuotone className="mountain-icon" />) : (<PiTreeEvergreenDuotone className="tree-icon" />)}
      </div>
    </div>
  )
}