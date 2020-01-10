import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/index';
import TodoList from './components/TodoList';
import { ADD_TODO, CHANGE_TODO_TASK, TOGGLE_TODO } from './reducers/types';
import TodoForm from './components/TodoForm';
import './App.css';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  const addTodo = event => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: state.task
  });
};

  const handleChange = event => 
  dispatch({
    type: CHANGE_TODO_TASK,
    payload: event.target.value
  });

  const toggleTodo = (id) => dispatch({
    type: TOGGLE_TODO,
    payload: id
  });

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList todos={state.todos} toggleTodo={toggleTodo} />
      <TodoForm 
        handleChange={handleChange} 
        task={state.task} 
        addTodo={addTodo}
      /> 
    </div>
  );
}

export default App;
