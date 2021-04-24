import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SearchForm from './components/SearchForm/SearchForm.jsx';
import Card from './components/Card/Card.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Github Profile Searcher</h1>
        {/* <nav>
          <ul>
            <li>
              <Link to="/search">Expore</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path='/search'>
            <SearchForm />
          </Route>
          <Route path='/user'>
            <Card />
          </Route>
          {/* <form> */}
          {/* {path} = useRouteMatch() */}
          {/* </form> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
