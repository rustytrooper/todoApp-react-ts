import { PiTrash, PiCheckFat } from "react-icons/pi";
import { REMOVE_TODO } from "../../store/reducers";
import { useDispatch } from "react-redux";
import { TodoType } from "../../types/typeInitState";

type PropsAddedType = {
  text: string,
  actionPayload: TodoType
}
export default function OneTodoForm(props: PropsAddedType) {
  const { text, actionPayload } = props;
  const dispatch = useDispatch()
  return (
    <div className="One-todo-form">
      <p>{text}</p>
      <div className="icons-div">
        <PiCheckFat className="check-icon" />
        <PiTrash onClick={() => dispatch(REMOVE_TODO(actionPayload))} className="trash-icon" />
      </div>
    </div>
  )
}