import { PiTrash, PiCheckFat } from "react-icons/pi";
import { REMOVE_TODO } from "../../store/reducers";
import { COMPLETED_TODO, REMOVE_COMPLETED_TODO } from "../../store/reducers";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StateStoreType } from "../../types/typeState";

type PropsAddedType = {
  text: string,
  id: string
}
export default function OneTodoForm(props: PropsAddedType) {
  const { text, id } = props;
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const completedTodos = useSelector((state: StateStoreType) => state.todos.completedTodos)

  const handleCheckClick = () => {
    const updatedDone = !done;
    setDone(updatedDone);

    const action = updatedDone ? COMPLETED_TODO : REMOVE_COMPLETED_TODO;
    dispatch(action({ text, id, done: updatedDone }));
  }

  const handleDeletion = () => {
    if (completedTodos) {
      dispatch(REMOVE_TODO({ text, id, done }))
    }
    dispatch(REMOVE_TODO({ text, id, done }))
  }

  return (
    <div className="One-todo-form" >
      <p className={done ? "done" : ""}>{text}</p>
      <div className="icons-div">
        <PiCheckFat
          onClick={handleCheckClick}
          className="check-icon" />
        <PiTrash
          onClick={
            // () => dispatch(REMOVE_TODO({ text, id, done }))
            handleDeletion
          }
          className="trash-icon" />
      </div>
    </div>
  )
}