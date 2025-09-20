import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='p-4 text-3xl'>Vipula, I love you soo much 💕❤️</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
