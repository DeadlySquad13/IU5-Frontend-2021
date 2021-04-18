import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/TodoList.js';

import './assets/css/index.css';

ReactDom.render(<TodoList />, document.getElementById('root'));