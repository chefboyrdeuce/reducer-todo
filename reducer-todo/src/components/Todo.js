import React from 'react';
import { TOGGLE_TODO } from '../reducers/types';

const Todo = ({ task, completed, id, toggleTodo }) => {
    console.log(task)
    return (
        <li onClick={() => toggleTodo(id)} style = {completed ? {textDecoration: 'line-through'} : {}} >
            {task}
        </li>
    
)};

export default Todo