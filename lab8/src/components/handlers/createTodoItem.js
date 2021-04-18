import createId from '../utils/createId';

const createTodoItem = (todoListState) => {
  console.log('createTodoItem');
  const [todoItems , setTodoItems] = todoListState;
  setTodoItems([...todoItems, {id: createId()}]);
}

export default createTodoItem;