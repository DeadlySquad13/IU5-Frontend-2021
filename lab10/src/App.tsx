import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchForm from './components/SearchForm/SearchForm';
import Card from './components/Card/Card';

import './App.css';

function App() {
  return (
    <Router basename='/lab10/build/'>
      {/* <Router> */}
      <div className='App'>
        <h1 className='App__text-h1'>Github Profile Searcher</h1>
        <Switch>
          <Route exact path='/' component={SearchForm} />
          <Route path='/user/'>
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
