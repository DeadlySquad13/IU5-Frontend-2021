import React from 'react';
import { withRouter } from 'react-router-dom';

import SearchInput from './SearchInput.jsx';
import SearchButton from './SearchButton.jsx';

import './css/SearchForm.css';

const SearchForm = () => {
  return (
    <div className='SearchForm'>
      <label className='SearchLabel'>
        <SearchInput />
      </label>
      <SearchButton />
    </div>
  );
};

export default withRouter(SearchForm);
