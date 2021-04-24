import React from 'react';

import TodoInput from './TodoInput';
import TodoCheckBox from './TodoCheckBox';
import TodoDeleteButton from './TodoDeleteButton';

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