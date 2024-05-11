import './App.css'
import Card from '../Card/Card'
import { StateType } from '../../types/typeState'
import { useSelector } from 'react-redux'

function App() {
  const todo = useSelector((state: StateType) => state.todos)
  console.log(todo)

  return (
    <Card />
  )
}

export default App
