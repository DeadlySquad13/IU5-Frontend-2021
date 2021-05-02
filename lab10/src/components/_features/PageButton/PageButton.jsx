import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from './counterSlice.js';

const PageButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(increment());
      }}
    >
      Next Page
    </button>
  );
};

export default PageButton;
