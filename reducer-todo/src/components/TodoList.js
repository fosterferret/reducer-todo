import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    return (
      <div>
        {props.state.map(todo => (
          <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
        ))}
      </div>
    );
  }