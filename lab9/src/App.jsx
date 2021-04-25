import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';

import SearchForm from './components/SearchForm/SearchForm.jsx';
import Card from './components/Card/Card.jsx';

import './App.css';

function App() {
  return (
      <Router>
      <div className='App'>
        <h1 className='App__text-h1'>Github Profile Searcher</h1>
        <Switch>
          <Route exact path='/' component={SearchForm} />
          <Route path='/user'>
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
