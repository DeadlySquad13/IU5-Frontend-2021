import React from 'react';
import './assets/css/index.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Things I will (not) do</h1>
      <TodoList />
    </div>
  );
}

export default App;