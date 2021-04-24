import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from './counterSlice.js';

const NextPageButton = () => {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
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
