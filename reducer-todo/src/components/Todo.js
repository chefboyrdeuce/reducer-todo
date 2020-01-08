import React from 'react';

const Todo = ({ task, completed, id }) => {
    console.log(task)
    return (
        <li>
            {task}
        </li>
    
)};

export default Todo