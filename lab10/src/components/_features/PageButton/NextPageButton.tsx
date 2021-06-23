import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const NextPageButton = () => {
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

export default NextPageButton;
