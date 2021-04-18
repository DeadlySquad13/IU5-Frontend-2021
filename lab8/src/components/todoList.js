import React, {useState} from 'react';

import TodoListContext from './TodoListContext.js';
import TodoItem from './TodoItem.js';
import TodoCreateButton from './TodoCreateButton.js';


function TodoList() {
  const todoListState = useState([{id: 0}]);
  const [todoItems, setTodoItems] = todoListState;
  return (
    <TodoListContext.Provider value={todoListState}>
      <TodoCreateButton />
      <ol>
        {todoItems.map((item) => {
          return <TodoItem key={item.id} id={item.id}/>;
        })}
      </ol>
    </TodoListContext.Provider>
  );
}

export default TodoList;