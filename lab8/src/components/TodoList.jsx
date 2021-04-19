import React, {useState} from 'react';

import TodoListContext from './TodoListContext';
import TodoItem from './TodoItem';
import TodoCreateButton from './TodoCreateButton';


function TodoList() {
  const todoListState = useState([{id: 0}]);
  const [todoItems, setTodoItems] = todoListState;
  return (
    <TodoListContext.Provider value={todoListState}>
      <TodoCreateButton />
      <ul className='TodoList'>
        {todoItems.map((item) => {
          return <TodoItem key={item.id} id={item.id}/>;
        })}
      </ul>
    </TodoListContext.Provider>
  );
}

export default TodoList;