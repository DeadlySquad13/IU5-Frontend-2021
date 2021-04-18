import React from 'react';
import TodoListContext from './TodoListContext';

import createId from './utils/createId';

const createTodoItem = (todoListState) => {
  console.log('createTodoItem');
  const [todoItems , setTodoItems] = todoListState;
  setTodoItems([...todoItems, {id: createId()}]);
}

const TodoCreateButton = () => {
  return (
    <TodoListContext.Consumer>
    {(value) => {
      return (
        <button
          onClick={createTodoItem.bind(this, value)}
        >
          Create
        </button>
      )
    }}
    </TodoListContext.Consumer>
  )
}

export default TodoCreateButton;
