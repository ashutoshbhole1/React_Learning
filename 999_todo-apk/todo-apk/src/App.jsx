import { useState } from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoHead from './Components/todo_Head'
import TodoInput from './Components/todo_inputs'
import TodoItem1 from './Components/todo_item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoHead />
      <TodoInput />
      <TodoItem1></TodoItem1>
    </>
  )
}

export default App;
