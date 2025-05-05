import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="btns ">
      <button type="button" class="btn btn-outline-primary m-3">Primary</button>
      <button type="button" class="btn btn-outline-secondary m-3">Secondary</button>
      <button type="button" class="btn btn-outline-success m-3">Success</button>
      <button type="button" class="btn btn-outline-danger m-3 ">Danger</button>
      <button type="button" class="btn btn-outline-warning m-3 ">Warning</button>
      <button type="button" class="btn btn-outline-info m-3 ">Info</button>
      <button type="button" class="btn btn-outline-light m-3 ">Light</button>
      <button type="button" class="btn btn-outline-dark m-3 ">Dark</button>
    </div>
    </>
  )
}

export default App
