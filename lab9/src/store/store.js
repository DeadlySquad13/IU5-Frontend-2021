import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/features/PageButton/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
