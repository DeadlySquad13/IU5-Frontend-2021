import React from 'react';

import TodoInput from './TodoInput.js';
import TodoCheckBox from './TodoCheckBox.js';
import TodoDeleteButton from './TodoDeleteButton.js';

const TodoItem = (props) => {
  console.dir(props);
  return (
    <li>
      <TodoCheckBox />
      <TodoInput />
      <TodoDeleteButton id={props.id} />
    </li>
  );
}

export default TodoItem;