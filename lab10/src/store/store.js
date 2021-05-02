import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/_features/PageButton/counterSlice.js';
import searchReducer from '../components/searchSlice.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
  },
});
