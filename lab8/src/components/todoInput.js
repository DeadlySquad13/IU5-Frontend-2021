import React, {useState} from 'react'

import './assets/css/index.css'


const TodoInput = () => {
  const initValue = '';
  const [value, setValue] = useState(initValue);
  return (
    <input
      type="text"
      value={value}
      className="todo-list__todo-input--deleted"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default TodoInput;