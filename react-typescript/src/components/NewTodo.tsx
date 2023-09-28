import { useContext, useRef } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const todoTextRef = useRef<HTMLInputElement>(null);

    const handleSubmission = (event: React.FormEvent)=>{
        event?.preventDefault();
        const enteredText = todoTextRef.current!.value;

        if(enteredText?.trim().length===0){
            return;
        }
        
        todoCtx.addTodo(enteredText);
    }

    return <form onSubmit={handleSubmission} className={classes.form}>
        <label>Todo Text
        </label>

        <input type='text' ref={todoTextRef}/>
        <button >Add Todo</button>
    </form>
}
 
export default NewTodo;