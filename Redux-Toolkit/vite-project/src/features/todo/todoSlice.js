import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello world",
        }
    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        updateTodo :(state,action) =>{
            state.todos = state.todos.map(
                (todo)=>(todo.id === action.payload ? todo : state.todos)
            )
        },
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer