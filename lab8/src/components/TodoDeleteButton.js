import React from 'react';

const deleteTodoItem = () => {
  console.log('deleteTodoItem');
}

const TodoDeleteButton = () => {
  return (
    <button
      onClick={deleteTodoItem}
    >
      Delete
    </button>
  )
}

export default TodoDeleteButton;
