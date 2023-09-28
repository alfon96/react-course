import React, { MouseEventHandler } from "react";
import Todo from "../models/todo";
import classes from './TodoDetail.module.css'

const TodoDetail: React.FC<{text : string, onRemoveTodo: (event: React.MouseEvent)=>void}> = (props) => {
    return ( 
    <li className={classes.item} onClick={props.onRemoveTodo}>
        {props.text}
    </li> 
    
    );
}
 
export default TodoDetail;