import React from 'react';
import TodoListContext from './TodoListContext';

import './assets/css/TodoCreateButton.css';
import createTodoItem from './handlers/createTodoItem';

const TodoCreateButton = () => {
  const value = React.useContext(TodoListContext);
  return (
    <button
      className="TodoCreateButton"
      onClick={createTodoItem.bind(this, value)}
    >
      New task
    </button>
  )
}

export default TodoCreateButton;
