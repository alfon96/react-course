import React, { useState } from "react";
import Todo from "../models/todo";

type AuxProps = { children: JSX.Element };

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string)=> void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>(
    {
    items: [],
    addTodo : ()=>{},
    removeTodo: (id:string) =>{}
}
)


const TodosContextProvider = (props:AuxProps)=>{
const [todos, setTodoList] = useState<Todo[]>([]);
  
  const onNewTodoSubmit = (value : string ) : void =>{
    setTodoList( 
      prevTodo => prevTodo.concat(new Todo(value)))
  };

  const removeTodoHandler = (id:string) : void =>{
    setTodoList( 
      prevTodo => prevTodo.filter(todo=>todo.id!==id));
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo:onNewTodoSubmit,
    removeTodo: removeTodoHandler
  }
    return <TodosContext.Provider value= {contextValue}>
        {props.children}
    </TodosContext.Provider>
}



export default TodosContextProvider;