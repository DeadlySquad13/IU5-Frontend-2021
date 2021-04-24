import React, { useCallback } from 'react';
// import './assets/css/SearchButton.css';
import SearchFormContext from './SearchFormContext';
import searchUsers from './handlers/searchUsers.js';

const SearchButton = () => {
  const memoizedSearchUsers = useCallback(async (login) => {
    searchUsers(login);
  }, []);

  const value = React.useContext(SearchFormContext);
  const [login] = value;
  return (
    <button
      className='SearchButton'
      onClick={() => {
        console.log('Search');
        memoizedSearchUsers(login).catch((e) => console.log(e.message));
        // return memoizedSearchUsers(login);
      }}
    >
      Search
    </button>
  );
};

export default SearchButton;
