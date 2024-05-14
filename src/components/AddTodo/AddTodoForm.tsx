import { useState, FormEventHandler } from "react"
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../store/reducers";
import { TodoType } from "../../types/typeInitState";
import Counter from "../TodosCounter/Counter";
import { nanoid } from "@reduxjs/toolkit";


export default function AddTodoForm() { // создаю компонент формы добавления тасок
  const [input, setInput] = useState('');  // использую хук состояния для изменения состояния инпута при введении текста таски
  const dispatch = useDispatch()  // создаю переменную для диспатчеризации действий при наступлении событий
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => { //инициализирую функцию перехвата сабмита формы таски
    e.preventDefault();  // предотвращаю дефолтное поведение сабмита формы - перезагрузку страницы
    if (input.length === 0) { // если пользователь не вводит текст таски - выдать предупреждение, очистить форму и выйти из условия
      alert('Add your task')
      setInput('')
      return
    } else {   // в противном случае, если текст был введен, создаю объект action, который передам редьюсеру, в поле id присваиваю уникальный ключ, значением поля текст назначаю введенный пользователем данные
      const actionPayload: TodoType = {
        id: nanoid(),
        text: input,
        done: false
      }
      dispatch(ADD_TODO(actionPayload)) //диспатчу действие добавления таски и в качестве аргумента передаю созданный объект action
      setInput('') // обнуляю поле ввода
    }
  }

  const toggleTheme = () => { // эта функция выполняет переключение темы по клику на иконку; по полю id получаб все элементы, добавляю их в массив и для каждого элемента массива, если он не null и не undefined, меняю значение класса
    const root = document.getElementById('root')
    const card = document.getElementById('card')
    const cardWrap = document.getElementById('card-wrapper')
    const counter = document.getElementById('counter')
    const addBtn = document.getElementById('add-btn')
    const toggle = document.getElementById('toggle')
    const elemetsArray = [root, card, cardWrap, counter, addBtn, toggle]

    elemetsArray.forEach((el) => el?.classList.toggle('mountain'))
  }

  return ( // возвращаю непосредственную разметку компонента формы добавления таски
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
      <div onClick={toggleTheme} className="toggle-theme" id="toggle"></div>
    </div>
  )
}