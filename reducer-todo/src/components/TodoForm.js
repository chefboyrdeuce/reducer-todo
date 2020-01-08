import React from 'react'

const TodoForm = ({ task, handleChange, addTodo }) => {
    return (
        <form onSubmit={addTodo}>
            <input type="text" value={task} onChange={handleChange}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm
