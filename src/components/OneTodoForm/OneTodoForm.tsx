import { PiTrash, PiCheckFat } from "react-icons/pi";
import { REMOVE_TODO } from "../../store/reducers";
import { COMPLETED_TODO, REMOVE_COMPLETED_TODO } from "../../store/reducers";
import { useDispatch } from "react-redux";
import { useState } from "react";

type PropsAddedType = {
  text: string,
  id: string
}
export default function OneTodoForm(props: PropsAddedType) { // этот компонент будет отвечать за отображение добавленной таски
  const { text, id } = props; // здесь при помощи деструктуризации я получаю переменные text и id пришедшие из пропсов
  const [done, setDone] = useState(false); // использую локальный хук состояния для назначения поля done в компоненте
  const dispatch = useDispatch(); // инициализирую диспатч для выбрасывания необходимых редьюсеру действий

  const handleCheckClick = () => { // здесь происходит обработка клика по иконке выполнено
    const updatedDone = !done; // изначально у таски done назначено в false, поэтому присваиваю противоположное значение
    setDone(updatedDone); // изменяю локальное состояние используя функцию хука useState

    const action = updatedDone ? COMPLETED_TODO : REMOVE_COMPLETED_TODO; // в тернарнике выясняю, является ли задание выполненным, и если да, в переменной будет храниться действие  COMPLETED_TODO, в противном случае REMOVE_COMPLETED_TODO
    dispatch(action({ text, id, done: updatedDone })); // диспатчу действие, пришедшее из переменной action, с объектом action, в который передаю полученные из пропсов текст и ид, и передаю новое значение done
  }

  return ( // возвращаю разметку компонента 
    <div className="One-todo-form" >
      <p className={done ? "done" : ""}>{text}</p>
      <div className="icons-div">
        <PiCheckFat
          onClick={handleCheckClick}
          className="check-icon" />
        <PiTrash
          onClick={() => dispatch(REMOVE_TODO({ text, id, done }))}
          className="trash-icon" />
      </div>
    </div>
  )
}