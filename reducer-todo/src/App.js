import React, { useReducer } from 'react';
import './App.css';

import { initialState, todoReducer } from './reducers/todoReducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoClear from './components/TodoClear';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='App'>
      <h1>Reducer Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
      <TodoClear dispatch={dispatch} />
    </div>
  );
}

export default App;
