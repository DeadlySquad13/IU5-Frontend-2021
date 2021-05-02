import React from 'react';
import { withRouter } from 'react-router-dom';

import SearchInput from './SearchForm__Input.jsx';
import SearchButton from './SearchForm__Button.jsx';

import './assets-SearchForm/_css/SearchForm.css';

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
