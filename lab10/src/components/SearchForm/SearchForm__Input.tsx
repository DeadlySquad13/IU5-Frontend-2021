import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectInput } from '../searchSlice';
import { input } from '../searchSlice';


import '../assets/_css/index.css';
import './assets-SearchForm/_css/SearchForm__Input.css';

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

export default withRouter(SearchInput);
