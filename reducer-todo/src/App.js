import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/index';
import TodoList from './components/TodoList';
import logo from './logo.svg';
import './App.css';


function App() {
  const [state,dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList todos={state}/>
    </div>
  );
}

export default App;
