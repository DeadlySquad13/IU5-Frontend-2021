import React from 'react';
import TodoListContext from './TodoListContext';

import createTodoItem from './handlers/createTodoItem.js';

const TodoCreateButton = () => {
  const value = React.useContext(TodoListContext);
  return (
    <button
      onClick={createTodoItem.bind(this, value)}
    >
      Create
    </button>
  )
}

export default TodoCreateButton;
