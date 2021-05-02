import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectInput } from '../searchSlice';

import { generateUserUrl } from './_utilities/generateUrl.js';
import fetchDataThunk from './_handlers/fetchDataThunk.js';

import './assets-SearchForm/_css/SearchForm__Button.css';

const SearchButton = () => {
  const dispatch = useDispatch();
  const memoizedFetchUser = useCallback(
    async (login) => {
      await dispatch(
        fetchDataThunk({ login: login, generateUrl: generateUserUrl })
      );
    },
    [dispatch]
  );

  const value = useSelector(selectInput);
  const history = useHistory();
  return (
    <button
      className='SearchButton'
      onClick={() => {
        memoizedFetchUser(value);
        history.push('/user/');
      }}
    >
      Search
    </button>
  );
};

export default SearchButton;
