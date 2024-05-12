type PropsAddedType = {
  text: string
}
export default function OneTodoForm(props: PropsAddedType) {
  const { text } = props
  return (
    <div className="One-todo-form">
      <p>{text}</p>
    </div>
  )
}