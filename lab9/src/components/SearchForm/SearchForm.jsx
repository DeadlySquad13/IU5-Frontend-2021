import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCount } from '../features/PageButton/counterSlice.js';

import SearchInput from './SearchInput.jsx';
import SearchButton from './SearchButton.jsx';
import NextPageButton from '../features/PageButton/NextPageButton.jsx';

import './css/SearchForm.css';

const SearchForm = () => {
  const count = useSelector(selectCount);
  return (
    <div className='SearchForm'>
      <label className='SearchLabel'>
        <SearchInput />
      </label>
      <SearchButton />
      {/* <NextPageButton />
      <p>{count}</p> */}
    </div>
  );
};

export default withRouter(SearchForm);
