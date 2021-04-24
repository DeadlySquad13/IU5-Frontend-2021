import React from 'react';
import { useSelector } from 'react-redux';

import { selectCount } from '../features/PageButton/counterSlice.js';

import SearchInput from './SearchInput.jsx';
import SearchButton from './SearchButton.jsx';
import NextPageButton from '../features/PageButton/NextPageButton.jsx';

const SearchForm = () => {
  const count = useSelector(selectCount);
  return (
    <>
      <label className='SearchLabel'>
        Search:
        <SearchInput />
      </label>
      <SearchButton />
      <NextPageButton />
      <p>{count}</p>
    </>
  );
};

export default SearchForm;
