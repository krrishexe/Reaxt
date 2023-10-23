import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            toggleCompleted: false
        }
      ],
      addTodo: function(todo){
      
      },
      updateTodo: function(id,todo){
      
      },
      deleteTodo: function(id){
        
      },
      toggleComplete:function(id){
      
      }
})

//creating our own hook ...
export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider