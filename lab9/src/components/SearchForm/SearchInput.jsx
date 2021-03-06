import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectInput } from '../searchSlice.js';
import { input } from '../searchSlice.js';

import '../assets/css/index.css';
import './css/SearchInput.css';

const SearchInput = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectInput);
  return (
    <input
      type='text'
      value={value}
      placeholder='Start typing login'
      className='Input'
      onChange={(e) => {
        dispatch(input(e.target.value));
      }}
    />
  );
};

export default SearchInput;
