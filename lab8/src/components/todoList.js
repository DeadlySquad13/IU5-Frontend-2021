import React, {useState, useEffect} from 'react';

import TodoItem from './todoItem.js';

function TodoList() {
  const [todoItems, setTodoItems] = useState([{initValue: 'vadim'}, {initValue: 'xolodec'}]);
  return (
    <div>
    {todoItems.map((item) => {
      return <TodoItem />;
    })}
    </div>
  );
}

export default TodoList;