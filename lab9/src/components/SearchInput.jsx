import React, { useState } from 'react';

import './assets/css/index.css';

import SearchFormContext from './SearchFormContext';

const SearchInput = () => {
  const initValue = '';
  const [value, setValue] = useState(initValue);
  const setLogin = React.useContext(SearchFormContext)[1];
  return (
    <input
      type='text'
      value={value}
      placeholder='Start typing login'
      className='Input'
      onChange={(e) => {
        setValue(e.target.value);
        setLogin(e.target.value);
      }}
    />
  );
};

export default SearchInput;
