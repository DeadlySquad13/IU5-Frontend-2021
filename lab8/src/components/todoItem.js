import React from 'react';

import TodoInput from './TodoInput.js';
import TodoCheckBox from './TodoCheckBox.js';
import TodoDeleteButton from './TodoDeleteButton.js';

const TodoItem = () => {
  return (
    <li>
      <TodoCheckBox />
      <TodoInput />
      <TodoDeleteButton />
    </li>
  );
}

export default TodoItem;