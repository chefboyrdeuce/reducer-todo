import React from 'react'

const TodoForm = ({ task, handleChange, addTodo, clearCompleted }) => {
    return (
        <form onSubmit={addTodo}>
            <input type="text" value={task} onChange={handleChange}/>
            <button type="submit">Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm
