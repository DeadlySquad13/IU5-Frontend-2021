import React from 'react';
import TodoListContext from './TodoListContext';

const deleteTodoItem = (todoListState, id) => {
  console.log('deleteTodoItem');
  const [todoItems, setTodoItems] = todoListState;
  const modifiedTodoItems = todoItems.filter(item => item.id !== id);
  setTodoItems([...modifiedTodoItems]);
}

const TodoDeleteButton = ({id}) => {
  console.log('current id', id);
  const value = React.useContext(TodoListContext);
  return (
    <button
      onClick={deleteTodoItem.bind(this, value, id)}
    >
      Delete
    </button>
  );
}

export default TodoDeleteButton;
