// import './App.css'
import { useEffect, useState } from "react"
import {TodoContextProvider} from "./Contexts/TodoContext"

function App() {

  const [todo,setTodo] = useState([])

  const addTodo = (todo)=>{
    // setTodo((prev)=>[...prev , todo]) 
    // setTodo((prev)=>{})  , 
    // it will keep track of the previous todo value as well.
    // --> this will start from backwards.
    setTodo((prev)=>[{id:Date.now(), ...todo},...prev])
  }
  const updateTodo = (id,todo)=>{
    setTodo((prev)=>prev.forEach((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))

  }
  const deleteTodo = (id)=>{
    setTodo((prev)=>prev.filter((prevTodo)=>(prevTodo.id !== id)))
  }
  const toggleComplete = (id)=>{
    setTodo((prev)=>prev.forEach((prevTodo)=>(prevTodo.id === id ? {...prevTodo , toggleCompleted : !prevTodo.toggleCompleted} : prevTodo )))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0){
      setTodo(todos)
    }
  },[])

  return (
    <TodoContextProvider value={{todo,addTodo,updateTodo,deleteTodo,toggleComplete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
