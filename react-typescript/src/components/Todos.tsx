import React, { useContext } from "react";
import TodoDetail from "./TodoDetail";
import classes from './Todos.module.css'
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () =>{
    const todosCtx = useContext(TodosContext);
    return <ul className={classes.todos}>

        {
        todosCtx.items.map(item => 
        <TodoDetail key={item.id} 
        text={item.text} 
        onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>
        )}
        
    </ul>

}

export default Todos;