// import './App.css'
import { useEffect, useState } from "react"
import { TodoContextProvider } from "./Contexts/TodoContext"
import TodoForm from "./Components/TodoForm"
import TodoItem from "./Components/TodoItem"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // setTodo((prev)=>[...prev , todo]) 
    // setTodo((prev)=>{})  , 
    // it will keep track of the previous todo value as well.
    // --> this will start from backwards.
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.forEach((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.forEach((prevTodo) => (prevTodo.id === id ? { ...prevTodo, toggleCompleted: !prevTodo.toggleCompleted } : prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {                   // this useEffect is for to updating the added todos values to the todos array and to save that new items to the localStorage.
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo)=>(
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
