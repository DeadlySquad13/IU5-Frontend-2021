import React, { useState } from 'react';

import SearchFormContext from './SearchFormContext.jsx';

import SearchInput from './SearchInput.jsx';
import SearchButton from './SearchButton.jsx';
import NextPageButton from './features/PageButton/NextPageButton.jsx';

import { useSelector } from 'react-redux';
import { selectCount } from './features/PageButton/counterSlice.js';

const SearchForm = () => {
  const searchFormState = useState('');
  const count = useSelector(selectCount);
  return (
    <SearchFormContext.Provider value={searchFormState}>
      <label className='searchLabel'>
        Search:
        <SearchInput />
      </label>
      <SearchButton />
      <NextPageButton />
      <p>{count}</p>
    </SearchFormContext.Provider>
  );
};

export default SearchForm;
