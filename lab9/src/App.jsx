import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm.jsx';

function App() {
  return (
    <div className='App'>
      <h1>Github Profile Searcher</h1>
      <SearchForm />
      {/* <form> */}
      {/* {path} = useRouteMatch() */}
      {/* </form> */}
    </div>
  );
}

export default App;
